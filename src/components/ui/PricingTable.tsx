import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface Plan {
  amount: number;
  price: number;
  features: string[];
}

interface PricingCardProps {
  title: string;
  plans: Plan[];
  color: 'blue' | 'pink' | 'red';
  linkTo: string; // URL to redirect to
  onBuyClick?: (plan: Plan) => void; // Optional handler if we want to open modal directly (for service pages)
  isHome?: boolean; // If true, use Link. If false, use button with onClick
}

export default function PricingTable({ title, plans, color, linkTo, onBuyClick, isHome = true }: PricingCardProps) {
  const colorStyles = {
    blue: {
      accent: 'from-blue-500 to-cyan-400',
      bg: 'hover:border-blue-500/30',
      button: 'bg-blue-600 hover:bg-blue-500',
      icon: 'text-blue-400'
    },
    pink: {
      accent: 'from-pink-500 to-rose-400',
      bg: 'hover:border-pink-500/30',
      button: 'bg-pink-600 hover:bg-pink-500',
      icon: 'text-pink-400'
    },
    red: {
      accent: 'from-red-500 to-orange-400',
      bg: 'hover:border-red-500/30',
      button: 'bg-red-600 hover:bg-red-500',
      icon: 'text-red-400'
    }
  };

  const styles = colorStyles[color];

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r ${styles.accent} inline-block`}>
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -5 }}
            className={`relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex flex-col ${styles.bg} transition-all duration-300 group`}
          >
            {index === 1 && (
              <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r ${styles.accent} text-white text-xs font-bold uppercase tracking-wider shadow-lg`}>
                Best Value
              </div>
            )}
            
            <div className="text-center mb-6">
              <div className="text-slate-400 font-medium mb-2">{plan.amount} Accounts</div>
              <div className="flex items-center justify-center gap-1">
                <span className="text-sm text-slate-500">$</span>
                <span className="text-4xl font-display font-bold text-white">{plan.price}</span>
              </div>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <div className={`mt-0.5 w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center ${styles.icon} flex-shrink-0`}>
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            
            {isHome ? (
              <Link 
                to={linkTo}
                className={`w-full py-3 rounded-xl font-semibold text-white text-center transition-all shadow-lg shadow-slate-900/20 ${styles.button}`}
              >
                Buy Now
              </Link>
            ) : (
              <button
                onClick={() => onBuyClick && onBuyClick(plan)}
                className={`w-full py-3 rounded-xl font-semibold text-white text-center transition-all shadow-lg shadow-slate-900/20 ${styles.button}`}
              >
                Buy Now
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
