import React, { useState } from 'react';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatMessage } from '../types';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatModal: React.FC<ChatModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'agent',
      text: 'Hello! Welcome to Gander Digital Agency. Are you looking to launch a new product, revamp your brand identity, or build an interactive experience?',
      time: 'Just now',
    },
  ]);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      time: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    const userText = input;
    setInput('');

    // Simulate smart agency response
    setTimeout(() => {
      let reply = "That sounds exciting! Our creative directors and engineering leads would love to review your scope. Could you share your target timeline and budget range?";
      if (userText.toLowerCase().includes('brand') || userText.toLowerCase().includes('design')) {
        reply = "Branding & visual design is our core craft! We've helped over 100+ product founders define iconic identities. Let's schedule a 20-minute discovery session.";
      } else if (userText.toLowerCase().includes('price') || userText.toLowerCase().includes('cost')) {
        reply = "Our tailored agency sprints typically start from $15k for brand sprints and $35k for complete product design & development cycles.";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'agent',
          text: reply,
          time: 'Just now',
        },
      ]);
    }, 800);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 15 }}
          className="relative w-full max-w-lg bg-black/65 backdrop-blur-2xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col h-[520px]"
        >
          {/* Header */}
          <div className="px-6 py-4 bg-white/5 backdrop-blur-md border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#ff4122] flex items-center justify-center text-white font-bold text-xs shadow-md">
                G
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Gander Concierge</h3>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online • Avg response 1m
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'agent' && (
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white text-xs shrink-0 mt-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff4122]" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#ff4122] text-white rounded-br-none shadow-md'
                      : 'bg-white/10 text-white/90 rounded-bl-none border border-white/10'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSend} className="p-4 bg-[#14141d] border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about pricing, services, timeline..."
              className="flex-1 bg-[#0a0a0e] border border-white/15 rounded-full px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#ff4122]"
            />
            <button
              type="submit"
              className="w-10 h-10 rounded-full bg-[#ff4122] hover:bg-[#ff5733] flex items-center justify-center text-white transition-colors shrink-0 shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
