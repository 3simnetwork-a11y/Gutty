import { X, MessageCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  planName?: string;
  price?: string;
}

export default function ChatModal({ isOpen, onClose, serviceName, planName, price }: ChatModalProps) {
  // Replace with actual contact numbers/usernames
  const whatsappNumber = "1234567890"; 
  const telegramUsername = "pvamasters_support";
  
  const message = `Hi, I'm interested in buying ${serviceName}${planName ? ` - ${planName} ($${price})` : ''}.`;
  const encodedMessage = encodeURIComponent(message);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl z-[70] overflow-hidden"
          >
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
              <h3 className="text-xl font-display font-bold text-white">Contact Sales</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-800 rounded-full transition-colors text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <p className="text-slate-300 text-sm mb-4">
                To complete your purchase for <span className="text-blue-400 font-semibold">{serviceName}</span>, please contact our support team directly. We'll guide you through the secure payment process.
              </p>
              
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white group-hover:text-[#25D366] transition-colors">WhatsApp</div>
                    <div className="text-xs text-slate-400">Instant Response</div>
                  </div>
                </div>
                <Send className="w-5 h-5 text-slate-500 group-hover:text-[#25D366] -rotate-45 group-hover:rotate-0 transition-all" />
              </a>
              
              <a 
                href={`https://t.me/${telegramUsername}?start=${encodedMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-[#0088cc]/10 border border-[#0088cc]/20 hover:bg-[#0088cc]/20 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center text-white">
                    <Send className="w-5 h-5 fill-current" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-white group-hover:text-[#0088cc] transition-colors">Telegram</div>
                    <div className="text-xs text-slate-400">24/7 Support</div>
                  </div>
                </div>
                <Send className="w-5 h-5 text-slate-500 group-hover:text-[#0088cc] -rotate-45 group-hover:rotate-0 transition-all" />
              </a>
            </div>
            
            <div className="p-4 bg-slate-950/50 text-center text-xs text-slate-500 border-t border-slate-800">
              Secure payments via Crypto (USDT, BTC, ETH) & Credit Cards
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
