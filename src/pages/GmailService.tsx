import { useState } from 'react';
import { Mail, CheckCircle, HelpCircle, MessageCircle } from 'lucide-react';
import PricingTable from '../components/ui/PricingTable';
import ChatModal from '../components/ui/ChatModal';
import { motion } from 'motion/react';

export default function GmailService() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ amount: number, price: number } | null>(null);

  const plans = [
    { amount: 50, price: 20, features: ['Fully Verified', 'Aged Accounts', 'Secure & Clean', 'Bulk Available'] },
    { amount: 100, price: 35, features: ['Fully Verified', 'Aged Accounts', 'Secure & Clean', 'Bulk Available'] },
    { amount: 250, price: 80, features: ['Fully Verified', 'Aged Accounts', 'Secure & Clean', 'Bulk Available'] },
  ];

  const handleBuyClick = (plan: any) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const faqs = [
    { q: "Are these fresh or aged accounts?", a: "We provide both. Our standard packages include aged accounts (3-12 months) for better reliability." },
    { q: "Can I change the password?", a: "Yes, you will receive full access including recovery email, and we recommend changing the password upon receipt." },
    { q: "What is the replacement policy?", a: "We offer a 48-hour replacement warranty for any accounts that are disabled or unable to login." },
    { q: "Are these accounts created manually?", a: "Yes, all accounts are manually created with unique IPs to ensure the highest quality score." },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-900/50 border-b border-slate-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl shadow-red-500/30">
            <Mail className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Buy Gmail <span className="text-red-500">PVA Accounts</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Secure, verified Gmail accounts for your business communication and marketing needs.
            High reputation and ready for immediate use.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Pricing */}
        <div className="mb-24">
          <PricingTable 
            title="Choose Your Plan" 
            plans={plans} 
            color="red" 
            linkTo="#" 
            isHome={false}
            onBuyClick={handleBuyClick}
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">Why Choose Our Gmail Accounts?</h3>
            <div className="space-y-6">
              {[
                "Phone Verified (PVA)",
                "Recovery Email Included",
                "Manually Created",
                "High Trust Score",
                "Works Worldwide",
                "Instant Delivery"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Custom Requirements?</h3>
            <p className="text-slate-400 mb-6">
              Need accounts from specific countries or with specific names? We can handle custom orders.
            </p>
            <button 
              onClick={() => { setSelectedPlan(null); setIsModalOpen(true); }}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700"
            >
              Contact Sales
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mb-24">
          <h3 className="text-3xl font-display font-bold text-white text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
              >
                <h4 className="flex items-start gap-3 text-lg font-semibold text-white mb-2">
                  <HelpCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-slate-400 pl-8">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Need help choosing?</h3>
          <p className="text-slate-400 mb-8">Our experts are here to guide you.</p>
          <button 
            onClick={() => { setSelectedPlan(null); setIsModalOpen(true); }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold shadow-lg shadow-red-500/20 transition-all"
          >
            <MessageCircle className="w-5 h-5" /> Chat with Support
          </button>
        </div>
      </div>

      <ChatModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName="Gmail PVA Accounts"
        planName={selectedPlan ? `${selectedPlan.amount} Accounts` : undefined}
        price={selectedPlan ? `${selectedPlan.price}` : undefined}
      />
    </div>
  );
}
