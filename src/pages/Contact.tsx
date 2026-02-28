import { Mail, MessageCircle, Send, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Get in <span className="text-gradient">Touch</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Have questions about our services or need support with an order? 
          Our team is available 24/7 to assist you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a href="mailto:support@pvamasters.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Email Us</div>
                  <div className="text-slate-400 text-sm group-hover:text-blue-400 transition-colors">support@pvamasters.com</div>
                </div>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-medium text-white mb-1">Location</div>
                  <div className="text-slate-400 text-sm">
                    123 Digital Avenue, Tech City<br />
                    New York, NY 10001, USA
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6">Instant Support</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[#25D366]/10 text-[#25D366] font-bold hover:bg-[#25D366] hover:text-white transition-all border border-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
              <a 
                href="https://t.me/pvamasters_support" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[#0088cc]/10 text-[#0088cc] font-bold hover:bg-[#0088cc] hover:text-white transition-all border border-[#0088cc]/20"
              >
                <Send className="w-5 h-5" /> Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>
            
            <button className="w-full btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
