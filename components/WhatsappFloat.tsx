"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/916379721546"   // 👉 replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
