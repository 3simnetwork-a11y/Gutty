import { Link } from 'react-router-dom';
import { Instagram, Mail, Shield, CreditCard, MessageCircle, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                P
              </div>
              <span className="text-xl font-display font-bold text-white">
                Pvamasters
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Premium marketplace for high-quality, verified digital accounts. 
              We provide secure, aged, and phone-verified accounts for your business growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">All Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Contact Support</Link>
              </li>
              <li>
                <Link to="#" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/instagram" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors">
                  <Instagram className="w-4 h-4" /> Buy Instagram PVA Accounts
                </Link>
              </li>
              <li>
                <Link to="/services/gmail" className="flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors">
                  <Mail className="w-4 h-4" /> Buy Gmail PVA Accounts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="text-white text-sm font-medium">Live Chat Support</div>
                  <div className="text-slate-400 text-xs">Available 24/7 via Telegram</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="text-white text-sm font-medium">Email Us</div>
                  <div className="text-slate-400 text-xs">support@pvamasters.com</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-blue-500 mt-0.5" />
                <div>
                  <div className="text-white text-sm font-medium">Secure Payments</div>
                  <div className="text-slate-400 text-xs">Crypto & Credit Cards Accepted</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Pvamasters. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <CreditCard className="w-4 h-4" /> Secure Payment Gateway
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
