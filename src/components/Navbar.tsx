import { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { PageRoute } from '../types';
import { BrandMark } from './BrandMark';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const NAV_LINKS: Array<{ page: PageRoute; label: string }> = [
  { page: 'home', label: 'Home' },
  { page: 'menu', label: 'Menu' },
  { page: 'hire-us', label: 'Hire Us' },
  { page: 'about', label: 'About Us' },
  { page: 'privacy', label: 'Privacy' },
];

export function Navbar({ currentPage, onNavigate, cartCount, onOpenCart }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page: PageRoute) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#0D4A2A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('home');
          }}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D4A2A] rounded-sm shrink-0"
          aria-label="HIGHGEE Home"
        >
          <BrandMark tone="dark" />
        </a>

        {/* Zone 2: Clean single-line text nav links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const active = currentPage === link.page;
            return (
              <a
                key={link.page}
                href={`#${link.page}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.page);
                }}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0D4A2A] ${
                  active
                    ? 'text-[#0D4A2A] font-semibold'
                    : 'text-[#3C463F] hover:text-[#0D4A2A]'
                }`}
              >
                {link.label}
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-[2px] h-0.5 bg-[#E8A817] rounded-full"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action (Cart with live counter + Mobile Drawer Toggle) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenCart}
            aria-label={`Open shopping cart with ${cartCount} items`}
            className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-lg bg-[#0D4A2A] text-white text-sm font-medium whitespace-nowrap shrink-0 hover:bg-[#08331D] active:scale-[0.98] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D4A2A] cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 text-[#E8A817]" strokeWidth={2} />
            <span className="hidden sm:inline">Cart</span>
            <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-[#E8A817] text-[#08331D] text-xs font-bold tabular-nums">
              {cartCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#0D4A2A]/15 text-[#0D4A2A] hover:bg-[#0D4A2A]/5 transition-colors cursor-pointer"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#0D4A2A]/10 bg-white px-4 py-4 space-y-1 shadow-lg"
        >
          {NAV_LINKS.map((link) => {
            const active = currentPage === link.page;
            return (
              <button
                key={link.page}
                type="button"
                onClick={() => handleNav(link.page)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  active
                    ? 'bg-[#0D4A2A] text-white'
                    : 'text-[#1D2821] hover:bg-[#0D4A2A]/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>
      )}
    </header>
  );
}
