"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../app/LanguageContext";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "model", content: "Halo! Ini Nasrul. Ada yang bisa kubantu atau mau ngobrol seputar portofolioku?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { lang } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Adjust greeting based on language
  useEffect(() => {
    if (messages.length === 1 && messages[0].content.includes("Halo!")) {
        setMessages([
            { role: "model", content: lang === 'id' 
                ? "Halo! Ini Nasrul. Ada yang ingin ditanyakan tentang pengalaman atau kemampuanku?" 
                : "Hi there! It's Nasrul. Is there anything you'd like to ask about my experience or skills?" }
        ]);
    }
  }, [lang]);

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Gagal menghubungi server");
      }

      setMessages((prev) => [...prev, { role: "model", content: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          content: lang === 'id' ? "Maaf, terjadi kesalahan saat menghubungi AI. Pastikan API key kamu sudah benar dan koneksi internet stabil." : "Sorry, an error occurred while connecting to the AI. Please make sure the API key is correct and your internet connection is stable.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-[350px] max-w-[calc(100vw-3rem)] bg-base-100/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col"
            style={{ height: "450px", maxHeight: "calc(100vh - 8rem)" }}
          >
            {/* Header */}
            <div className="bg-[#6497B1] px-4 py-3 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">Chat with Nasrul</h3>
                  <p className="text-white/70 text-xs">{lang === 'id' ? 'Sedang online' : 'Online'}</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="text-white/80 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 max-w-[85%] ${
                    msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                  }`}
                >
                  <div
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                      msg.role === "user" ? "bg-[#6497B1] text-white" : "bg-base-300 text-base-content"
                    }`}
                  >
                    {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div
                    className={`px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "bg-[#6497B1] text-white rounded-tr-none"
                        : "bg-base-200 text-base-content rounded-tl-none border border-base-300 shadow-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex items-start gap-2 max-w-[85%] mr-auto">
                   <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-base-300 text-base-content">
                    <Bot size={14} />
                  </div>
                  <div className="px-3 py-3 rounded-2xl bg-base-200 text-base-content rounded-tl-none border border-base-300 shadow-sm flex items-center gap-1">
                     <span className="w-1.5 h-1.5 rounded-full bg-base-content/50 animate-bounce"></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-base-content/50 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                     <span className="w-1.5 h-1.5 rounded-full bg-base-content/50 animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={sendMessage} className="p-3 bg-base-200 border-t border-base-300">
              <div className="flex items-center gap-2 bg-base-100 rounded-full pr-1 pl-3 py-1 shadow-inner border border-base-300 focus-within:border-[#6497B1]/50 text-white transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={lang === 'id' ? "Tanya sesuatu..." : "Ask something..."}
                  className="flex-1 bg-transparent border-none focus:outline-none text-sm py-2"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="w-8 h-8 rounded-full bg-[#6497B1] text-white flex items-center justify-center disabled:opacity-50 hover:brightness-110 transition-colors shrink-0"
                >
                  <Send size={14} className="ml-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex items-center justify-center">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 10 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-[#6497B1] dark:text-blue-300 px-4 py-2 rounded-2xl shadow-xl border border-[#6497B1]/20 text-sm font-semibold whitespace-nowrap cursor-pointer hover:scale-105 transition-transform"
              onClick={toggleChat}
            >
              {lang === 'id' ? "Mari Mengobrol 👋" : "Let's Chat 👋"}
              <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-slate-800 border-t border-r border-[#6497B1]/20 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={toggleChat}
          className={`relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 ${
            isOpen ? "bg-red-500 text-white rotate-90" : "bg-[#6497B1] text-white"
          }`}
        >
          {!isOpen && (
            <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white dark:border-slate-900"></span>
            </span>
          )}
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>
    </div>
  );
}
