import { motion } from 'motion/react';
import { ArrowRight, Shield, Clock, Headphones, Star, CheckCircle } from 'lucide-react';
import PricingTable from '../components/ui/PricingTable';

export default function Home() {
  const instagramPlans = [
    { amount: 50, price: 25, features: ['Email Verified', 'Phone Verified', 'Ready for Marketing', 'Instant Delivery'] },
    { amount: 100, price: 45, features: ['Email Verified', 'Phone Verified', 'Ready for Marketing', 'Instant Delivery'] },
    { amount: 250, price: 99, features: ['Email Verified', 'Phone Verified', 'Ready for Marketing', 'Instant Delivery'] },
  ];

  const gmailPlans = [
    { amount: 50, price: 20, features: ['Fully Verified', 'Aged Accounts', 'Secure & Clean', 'Bulk Available'] },
    { amount: 100, price: 35, features: ['Fully Verified', 'Aged Accounts', 'Secure & Clean', 'Bulk Available'] },
    { amount: 250, price: 80, features: ['Fully Verified', 'Aged Accounts', 'Secure & Clean', 'Bulk Available'] },
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-blue-400 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              #1 Trusted PVA Marketplace
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Premium Digital <br />
              <span className="text-gradient">PVA Accounts</span> Marketplace
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              High Quality, Aged & Secure Accounts for Marketing & Business Growth. 
              Instant delivery and 24/7 support for all your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToPricing}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                View Services <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-xl bg-slate-900 text-slate-300 font-semibold border border-slate-800 hover:bg-slate-800 hover:text-white transition-all w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Clock, title: 'Instant Delivery', desc: 'Get your accounts delivered immediately after purchase.' },
            { icon: Shield, title: 'Secure Payments', desc: 'We support multiple secure payment methods including Crypto.' },
            { icon: Headphones, title: '24/7 Support', desc: 'Our team is available round the clock to assist you.' },
            { icon: Star, title: 'High Quality', desc: 'All accounts are verified, aged and ready for use.' },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-gradient p-6 rounded-2xl"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 mb-4">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Unbeatable <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose the perfect package for your business needs. All plans come with our satisfaction guarantee.
          </p>
        </div>

        <div className="space-y-16">
          <PricingTable 
            title="Instagram PVA Accounts" 
            plans={instagramPlans} 
            color="pink" 
            linkTo="/services/instagram" 
          />
          
          <PricingTable 
            title="Gmail PVA Accounts" 
            plans={gmailPlans} 
            color="red" 
            linkTo="/services/gmail" 
          />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-12 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Happy Clients', value: '10K+' },
              { label: 'Accounts Sold', value: '500K+' },
              { label: 'Support Agents', value: '24/7' },
              { label: 'Satisfaction', value: '100%' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{stat.value}</div>
                <div className="text-slate-500 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
