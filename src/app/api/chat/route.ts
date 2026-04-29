import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "API Key not configured" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const body = await req.json();
    const { messages } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages array" }, { status: 400 });
    }

    const systemInstruction = `Kamu adalah Arlian Nasrul Ramadhani (biasa dipanggil Nasrul). Jawablah pesan seolah-olah kamu adalah Nasrul asli yang sedang membalas chat secara langsung dengan manusiawi, kasual, dan asik.
ATURAN FORMAT BALASAN (SANGAT PENTING):
1. DILARANG KERAS menggunakan tulisan tebal/bold (**kata**), miring (*kata*), atau markdown lainnya karena website ini tidak bisa membacanya.
2. Gunakan kalimat santai, pisahkan paragraf dengan enter/garis baru yang jelas agar mudah dibaca. Jangan buat paragraf yang terlalu panjang.
3. JANGAN PERNAH menyebut dirimu sebagai AI atau bot. Gunakan kata ganti "aku" atau "saya".

Informasi profilmu:
- Pendidikan Saat Ini: S1 Sistem Informasi di Universitas Merdeka Malang/UNMER Malang (2023 - Sekarang, IPK 3.91), fokus pada Web & Mobile Development.
- Pendidikan Lalu: SMK Negeri 4 Malang, jurusan Multimedia (2019 - 2023).
- Minat & Keahlian Utama: Website Development (Full-stack), Tech Enthusiast, UI/UX, dan Video Editing.
- Pengalaman: Driver ShopeeFood & Maxim untuk membiayai kuliah secara mandiri, KKN Desa Pandanrejo (PDD), Volunteer PKKMB (Humas), Video Editor di Amazing Malang.
- Kontak: Arahkan ke menu kontak di beranda atau sosmed.

Daftar Proyek Terbaru (Portfolio):
1. MitraSpace Admin CMS: Platform e-commerce Multi-Tenant dengan rekomendasi produk berbasis AI. Tech: Next.js 14, TypeScript, Prisma, Gemini AI. Demo: https://toko-admin-five.vercel.app/
2. Digital Portal KKN Kelompok 5 Desa Pandanrejo: Portal edukasi pengelolaan sampah plastik dan mesin pirolisis. Tech: Next.js 15, Genkit AI, Gemini AI. Demo: https://kkn-kelompok5-desapandanrejo.vercel.app/
3. Smart Receipt Hub AI: Manajemen pengeluaran dengan ekstraksi data struk otomatis via AI (OCR). Tech: Next.js, Gemini AI, Google Cloud API. Demo: https://smart-receipt-gamma.vercel.app/`;

    // Gunakan gemini-2.5-flash sebagai model default yang direkomendasikan.
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash"
    });

    const latestMessage = messages[messages.length - 1].content;
    let history = messages.slice(0, -1).map((msg: any) => ({
      role: msg.role === "user" ? "user" : "model",
      parts: [{ text: msg.content }],
    }));

    // Gemini API history MUST start with a 'user' message.
    // Our initial state in the UI is a 'model' greeting message, so we must slice it out.
    if (history.length > 0 && history[0].role === "model") {
      history = history.slice(1);
    }

    const chat = model.startChat({
        history: [
            {
                role: "user",
                parts: [{ text: systemInstruction }]
            },
            {
                role: "model",
                parts: [{ text: "Sip, aku mengerti. Mulai sekarang aku akan merespons sebagai Nasrul asli dengan gaya bahasanya yang asik." }]
            },
            ...history
        ],
    });

    // Implement retry logic for transient errors (503 Service Unavailable, 429 Too Many Requests)
    const sendMessageWithRetry = async (message: string, maxRetries = 3) => {
      for (let i = 0; i < maxRetries; i++) {
        try {
          return await chat.sendMessage(message);
        } catch (error: any) {
          const isTransientError = 
            error?.status === 503 || 
            error?.status === 429 || 
            error?.message?.includes("503") || 
            error?.message?.includes("429") ||
            error?.message?.includes("Service Unavailable") ||
            error?.message?.includes("Too Many Requests");

          if (isTransientError && i < maxRetries - 1) {
            const delay = Math.pow(2, i) * 1000;
            console.warn(`Gemini API transient error (attempt ${i + 1}/${maxRetries}):`, error.message);
            console.warn(`Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            continue;
          }
          throw error;
        }
      }
    };

    const result = await sendMessageWithRetry(latestMessage);
    if (!result) throw new Error("No response from AI");
    
    const responseText = result.response.text();

    return NextResponse.json({ reply: responseText });
  } catch (error: any) {
    console.error("Gemini API Error Detail:", {
      message: error.message,
      status: error.status,
      stack: error.stack
    });
    
    const isOverloaded = error?.message?.includes("503") || error?.status === 503;
    
    return NextResponse.json(
      { 
        error: isOverloaded 
          ? "Server AI sedang sibuk (Error 503). Silakan coba lagi dalam beberapa detik." 
          : "Terjadi kesalahan pada AI Assistant. Coba lagi nanti ya!" 
      }, 
      { status: error?.status || 500 }
    );
  }
}
