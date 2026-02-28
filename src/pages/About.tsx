import { Shield, Users, Target, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          About <span className="text-gradient">Pvamasters</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
          We are the leading provider of premium, phone-verified digital accounts. 
          Our mission is to empower businesses and marketers with high-quality assets for their growth.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-4">Our Mission</h2>
          <p className="text-slate-400 leading-relaxed">
            To provide the most reliable and secure digital accounts in the market. 
            We understand the challenges of modern digital marketing, and we aim to solve them by offering 
            accounts that stand the test of time.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12"
        >
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 mb-6">
            <Users className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-display font-bold text-white mb-4">Who We Are</h2>
          <p className="text-slate-400 leading-relaxed">
            A team of digital marketing experts and security specialists. 
            We have years of experience in the industry and know exactly what it takes to create 
            accounts that don't get banned.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-24">
        <h2 className="text-3xl font-display font-bold text-white text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Premium Quality", desc: "We don't sell bot-created junk. All accounts are manually verified." },
            { title: "Instant Delivery", desc: "Our automated system ensures you get your accounts immediately." },
            { title: "Secure Payments", desc: "We accept Crypto and major Credit Cards for your convenience." },
          ].map((item, i) => (
            <div key={i} className="text-center p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50">
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Info */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto">
        <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
          <CreditCard className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-display font-bold text-white mb-4">Secure Payments</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          We prioritize your security. All transactions are encrypted and processed through secure gateways.
          We accept Bitcoin, Ethereum, USDT, and major Credit Cards.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-slate-500 text-sm font-medium">
          <span className="px-4 py-2 rounded-lg bg-slate-950 border border-slate-800">Bitcoin</span>
          <span className="px-4 py-2 rounded-lg bg-slate-950 border border-slate-800">Ethereum</span>
          <span className="px-4 py-2 rounded-lg bg-slate-950 border border-slate-800">USDT (TRC20)</span>
          <span className="px-4 py-2 rounded-lg bg-slate-950 border border-slate-800">Visa/Mastercard</span>
        </div>
      </div>
    </div>
  );
}
