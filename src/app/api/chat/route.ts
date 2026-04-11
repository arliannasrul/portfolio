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
- Kontak: Arahkan ke menu kontak di beranda atau sosmed.`;

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

    const result = await chat.sendMessage(latestMessage);
    const responseText = result.response.text();

    return NextResponse.json({ reply: responseText });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({ error: "Terjadi kesalahan pada AI Assistant. Pastikan API Key valid atau coba lagi nanti." }, { status: 500 });
  }
}
