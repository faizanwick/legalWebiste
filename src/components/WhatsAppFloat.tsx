'use client';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
    return (
      <a
        href="https://wa.me/+91 8125814077"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <FaWhatsapp size={32} />
      </a>
    );
  }