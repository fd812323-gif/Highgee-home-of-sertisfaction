import { PageRoute } from '../types';
import { buildWhatsAppUrl, WHATSAPP_NUMBER_DISPLAY } from '../data/assets';
import { BrandMark, WhatsAppIcon } from './BrandMark';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const whatsappUrl = buildWhatsAppUrl('Hello HIGHGEE, I would like to connect with your team.');

  return (
    <footer className="bg-[#08331D] text-white/90 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-block"
            >
              <BrandMark tone="light" />
            </a>
            <p className="text-sm text-white/75 leading-relaxed max-w-md">
              Home of Satisfaction. Freshly prepared homemade Nigerian meals, natural plantain
              chips, spiced beef snacks, event catering, and luxury massage therapy — delivered with
              care and quality.
            </p>
            <p className="text-xs font-semibold tracking-wide text-[#E8A817]">
              ORDER TODAY, PAY ON DELIVERY.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E8A817]">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('menu');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#hire-us"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('hire-us');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Hire Us
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('privacy');
                  }}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp Contact */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#E8A817]">
              WhatsApp Orders &amp; Enquiries
            </h3>
            <p className="text-sm text-white/75 leading-relaxed">
              Place food orders, reserve event catering, or schedule your spa relaxation session
              directly with HIGHGEE on WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors"
            >
              <WhatsAppIcon className="w-7 h-7 shrink-0" />
              <div className="text-left">
                <span className="block text-[11px] uppercase tracking-wider text-[#E8A817] font-semibold">
                  Chat on WhatsApp
                </span>
                <span className="block text-sm font-semibold text-white tabular-nums">
                  {WHATSAPP_NUMBER_DISPLAY}
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/60">
          <p>&copy; {new Date().getFullYear()} HIGHGEE. All rights reserved.</p>
          <p>Quality, Satisfaction and Excellence in Every Experience.</p>
        </div>
      </div>
    </footer>
  );
}
