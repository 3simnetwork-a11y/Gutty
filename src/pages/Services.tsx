import { Link } from 'react-router-dom';
import { Instagram, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Our <span className="text-gradient">Services</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          We provide high-quality, verified accounts for all your social media and email marketing needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Instagram Card */}
        <Link to="/services/instagram" className="group relative block h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative h-full bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-pink-500/50 transition-all duration-300 flex flex-col"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-pink-500/20">
              <Instagram className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-display font-bold text-white mb-4">Buy Instagram PVA Accounts</h2>
            <p className="text-slate-400 mb-8 flex-grow">
              Premium phone verified Instagram accounts. Aged, secure, and ready for instant use in your marketing campaigns.
            </p>
            
            <div className="flex items-center text-pink-400 font-semibold group-hover:text-pink-300 transition-colors">
              View Plans <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </Link>

        {/* Gmail Card */}
        <Link to="/services/gmail" className="group relative block h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative h-full bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300 flex flex-col"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center text-white mb-6 shadow-lg shadow-red-500/20">
              <Mail className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-display font-bold text-white mb-4">Buy Gmail PVA Accounts</h2>
            <p className="text-slate-400 mb-8 flex-grow">
              High-quality Gmail accounts verified with unique phone numbers. Perfect for business emails and outreach.
            </p>
            
            <div className="flex items-center text-red-400 font-semibold group-hover:text-red-300 transition-colors">
              View Plans <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
