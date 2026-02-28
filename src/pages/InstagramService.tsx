import { useState } from 'react';
import { Instagram, CheckCircle, HelpCircle, MessageCircle } from 'lucide-react';
import PricingTable from '../components/ui/PricingTable';
import ChatModal from '../components/ui/ChatModal';
import { motion } from 'motion/react';

export default function InstagramService() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ amount: number, price: number } | null>(null);

  const plans = [
    { amount: 50, price: 25, features: ['Email Verified', 'Phone Verified', 'Ready for Marketing', 'Instant Delivery'] },
    { amount: 100, price: 45, features: ['Email Verified', 'Phone Verified', 'Ready for Marketing', 'Instant Delivery'] },
    { amount: 250, price: 99, features: ['Email Verified', 'Phone Verified', 'Ready for Marketing', 'Instant Delivery'] },
  ];

  const handleBuyClick = (plan: any) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const faqs = [
    { q: "Are these accounts phone verified?", a: "Yes, all our Instagram accounts are verified with real phone numbers to ensure longevity and security." },
    { q: "How fast is the delivery?", a: "We deliver accounts instantly after payment confirmation. In some cases, it might take up to 1-2 hours." },
    { q: "Do you offer replacements?", a: "Yes, we offer a 24-hour replacement guarantee for any non-working accounts upon first login." },
    { q: "Can I use these for marketing?", a: "Absolutely! These accounts are aged and warmed up, making them perfect for marketing campaigns." },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="bg-slate-900/50 border-b border-slate-800 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-2xl shadow-pink-500/30">
            <Instagram className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Buy Instagram <span className="text-pink-500">PVA Accounts</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Boost your social media presence with our premium, phone-verified Instagram accounts. 
            Secure, aged, and ready to scale your business.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-16">
        {/* Pricing */}
        <div className="mb-24">
          <PricingTable 
            title="Choose Your Plan" 
            plans={plans} 
            color="pink" 
            linkTo="#" 
            isHome={false}
            onBuyClick={handleBuyClick}
          />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <h3 className="text-2xl font-display font-bold text-white mb-6">Why Choose Our Instagram Accounts?</h3>
            <div className="space-y-6">
              {[
                "100% Phone Verified with Real SIM Cards",
                "Aged Accounts (3+ Months Old)",
                "Includes Recovery Email Access",
                "Unique IP Creation for Safety",
                "Profile Pictures Added (Optional)",
                "24/7 Customer Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-4">Bulk Orders?</h3>
            <p className="text-slate-400 mb-6">
              Need more than 250 accounts? We offer special discounts for bulk orders. 
              Contact our support team for a custom quote.
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
                  <HelpCircle className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-slate-400 pl-8">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/20 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-8">Our support team is just a message away.</p>
          <button 
            onClick={() => { setSelectedPlan(null); setIsModalOpen(true); }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold shadow-lg shadow-pink-500/20 transition-all"
          >
            <MessageCircle className="w-5 h-5" /> Chat with Support
          </button>
        </div>
      </div>

      <ChatModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName="Instagram PVA Accounts"
        planName={selectedPlan ? `${selectedPlan.amount} Accounts` : undefined}
        price={selectedPlan ? `${selectedPlan.price}` : undefined}
      />
    </div>
  );
}
