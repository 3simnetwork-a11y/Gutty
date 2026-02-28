import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Instagram, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              P
            </div>
            <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
              Pvamasters
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Home
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors py-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>
              
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 transition-all duration-200 ${
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden p-1">
                  <Link 
                    to="/services/instagram" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-500 group-hover/item:bg-pink-500 group-hover/item:text-white transition-colors flex-shrink-0">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-200">Buy Instagram PVA Accounts</div>
                      <div className="text-xs text-slate-500">Verified Accounts</div>
                    </div>
                  </Link>
                  <Link 
                    to="/services/gmail" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors group/item"
                  >
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 group-hover/item:bg-red-500 group-hover/item:text-white transition-colors flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-200">Buy Gmail PVA Accounts</div>
                      <div className="text-xs text-slate-500">Verified Accounts</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              About Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link 
              to="/contact" 
              className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors border border-slate-700"
            >
              Contact Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link to="/" className="text-slate-300 hover:text-white py-2">Home</Link>
              <div className="py-2">
                <div className="text-slate-500 text-xs uppercase font-semibold mb-2">Services</div>
                <Link to="/services/instagram" className="flex items-center gap-2 text-slate-300 hover:text-white py-2 pl-2 border-l border-slate-800 hover:border-blue-500 transition-colors">
                  <Instagram className="w-4 h-4" /> Buy Instagram PVA Accounts
                </Link>
                <Link to="/services/gmail" className="flex items-center gap-2 text-slate-300 hover:text-white py-2 pl-2 border-l border-slate-800 hover:border-red-500 transition-colors">
                  <Mail className="w-4 h-4" /> Buy Gmail PVA Accounts
                </Link>
              </div>
              <Link to="/about" className="text-slate-300 hover:text-white py-2">About Us</Link>
              <Link to="/contact" className="text-center py-3 bg-blue-600 rounded-lg text-white font-medium mt-2">
                Contact Support
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
