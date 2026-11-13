import { ArrowRight, Check, Sparkles, Utensils } from 'lucide-react';
import { MenuCategoryId, MenuItem, PageRoute } from '../types';
import { BRAND_IMAGES, PROMO_FLYERS, buildWhatsAppUrl } from '../data/assets';
import { FEATURED_MENU_IDS, MENU_ITEMS, SPA_SERVICES } from '../data/menuData';
import { ResilientImage } from '../components/ResilientImage';
import { ProductCard } from '../components/ProductCard';
import { WhatsAppIcon } from '../components/BrandMark';

interface HomePageProps {
  onNavigate: (page: PageRoute, category?: MenuCategoryId) => void;
  onQuickAdd: (item: MenuItem) => void;
  onCustomize: (item: MenuItem) => void;
  onOpenSpaBooking: (serviceTitle?: string) => void;
}

export function HomePage({
  onNavigate,
  onQuickAdd,
  onCustomize,
  onOpenSpaBooking,
}: HomePageProps) {
  const featuredItems = MENU_ITEMS.filter((item) => FEATURED_MENU_IDS.includes(item.id));
  const chipsItem = MENU_ITEMS.find((i) => i.id === 'snacks-highgee-plantain-chips');
  const beefItem = MENU_ITEMS.find((i) => i.id === 'snacks-beef-snacks');

  const chipsWhatsAppUrl = buildWhatsAppUrl(
    'Hello HIGHGEE, I would like to order HIGHGEE Plantain Chips (Payment on Delivery). Please share available pack options.'
  );
  const beefWhatsAppUrl = buildWhatsAppUrl(
    'Hello HIGHGEE, I would like to order HIGHGEE Kitchen Beef Snacks (Payment on Delivery). Please share available pack options.'
  );

  const scrollToServices = () => {
    const el = document.getElementById('highgee-services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[600px] lg:min-h-[660px] flex items-center bg-[#08331D] overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={BRAND_IMAGES.heroFeast}
            alt="Authentic Nigerian meal spread by HIGHGEE Foods featuring Jollof rice, fried rice, egusi soup, pounded yam, fried plantain, and grilled chicken"
            eager
            className="w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#072616]/95 via-[#08331D]/82 to-[#08331D]/45"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#E8A817]">
              HIGHGEE · Home of Satisfaction
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-white leading-[1.08] tracking-tight text-balance">
              GOOD FOOD. GREAT TASTE. COMPLETE RELAXATION.
            </h1>
            <p className="text-base sm:text-lg text-white/88 leading-relaxed max-w-xl">
              Welcome to HIGHGEE, your destination for delicious homemade Nigerian meals, crunchy
              plantain chips, tasty beef snacks and refreshing spa experiences. Whatever you crave
              or wherever you need to unwind, HIGHGEE is here for you.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => onNavigate('menu')}
                className="px-6 py-3.5 min-h-[46px] rounded-xl bg-[#E8A817] hover:bg-[#F2B705] text-[#08331D] text-sm font-bold tracking-wide inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>EXPLORE OUR MENU</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={scrollToServices}
                className="px-6 py-3.5 min-h-[46px] rounded-xl bg-white/10 hover:bg-white/18 text-white border border-white/25 text-sm font-semibold tracking-wide transition-colors cursor-pointer whitespace-nowrap"
              >
                DISCOVER OUR SERVICES
              </button>
            </div>

            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/85">
              <span className="font-semibold text-[#E8A817]">ORDER TODAY, PAY ON DELIVERY.</span>
              <span aria-hidden="true" className="text-white/40">·</span>
              <span>Homemade Meals · Event Catering · Snacks · Spa Therapy</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR MAJOR HIGHGEE SERVICES */}
      <section id="highgee-services" className="py-16 sm:py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4A2A]">
                One Unified Lifestyle Brand
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#141A16] tracking-tight text-balance">
                Four Signature Experiences Under HIGHGEE
              </h2>
            </div>
            <p className="text-sm text-[#4A554E] max-w-md">
              From freshly cooked Nigerian home-made dishes to artisan snacks and restorative
              massage therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 01. HIGHGEE Foods */}
            <div className="group bg-white rounded-2xl border border-black/8 overflow-hidden flex flex-col hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
              <div className="aspect-[4/3] overflow-hidden bg-[#0D4A2A]/10">
                <ResilientImage
                  src={BRAND_IMAGES.riceDishes}
                  alt="HIGHGEE Foods Nigerian meals and catering"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-[#0D4A2A]">01. Meals &amp; Delivery</p>
                  <h3 className="font-display text-xl font-semibold text-[#141A16]">
                    HIGHGEE Foods
                  </h3>
                  <p className="text-sm text-[#4A554E] leading-relaxed">
                    Freshly cooked Nigerian rice dishes, rich soups, swallows, proteins, and event
                    catering delivered to your door.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0D4A2A] hover:text-[#08331D] cursor-pointer"
                >
                  <span>Browse Nigerian Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 02. HIGHGEE Chips */}
            <div className="group bg-white rounded-2xl border border-black/8 overflow-hidden flex flex-col hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
              <div className="aspect-[4/3] overflow-hidden bg-[#F2B705]/15">
                <ResilientImage
                  src={BRAND_IMAGES.plantainChips}
                  alt="HIGHGEE Chips natural crunchy plantain chips"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-[#166534]">02. Natural Crunch</p>
                  <h3 className="font-display text-xl font-semibold text-[#141A16]">
                    HIGHGEE Chips
                  </h3>
                  <p className="text-sm text-[#4A554E] leading-relaxed">
                    Ripe and unripe natural plantain chips fried crisp with pure vegetable oil and
                    a light pinch of salt.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection('section-chips')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#166534] hover:text-[#0D4A2A] cursor-pointer"
                >
                  <span>Explore Plantain Chips</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 03. HIGHGEE Kitchen Snacks */}
            <div className="group bg-white rounded-2xl border border-black/8 overflow-hidden flex flex-col hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
              <div className="aspect-[4/3] overflow-hidden bg-[#3B1E14]/15">
                <ResilientImage
                  src={BRAND_IMAGES.beefSnacks}
                  alt="HIGHGEE Kitchen Beef Snacks"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-[#C2521A]">03. Savoury Bites</p>
                  <h3 className="font-display text-xl font-semibold text-[#141A16]">
                    HIGHGEE Kitchen Snacks
                  </h3>
                  <p className="text-sm text-[#4A554E] leading-relaxed">
                    Flavour-packed, spiced Nigerian beef snacks and meat-based treats crafted for
                    bold, instant satisfaction.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection('section-beef')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C2521A] hover:text-[#3B1E14] cursor-pointer"
                >
                  <span>See Beef Snacks</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 04. HIGHGEE Therapy */}
            <div className="group bg-[#14110F] text-white rounded-2xl border border-[#D4AF37]/25 overflow-hidden flex flex-col hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200">
              <div className="aspect-[4/3] overflow-hidden bg-black">
                <ResilientImage
                  src={BRAND_IMAGES.spaTherapy}
                  alt="HIGHGEE Therapy luxury spa and massage"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-1.5">
                  <p className="text-xs font-semibold text-[#D4AF37]">04. Wellness &amp; Spa</p>
                  <h3 className="font-display text-xl font-semibold text-white">
                    HIGHGEE Therapy
                  </h3>
                  <p className="text-sm text-white/75 leading-relaxed">
                    Professional full-body, therapeutic, and stress-relief massage experiences in a
                    serene, calming atmosphere.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection('section-spa')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D4AF37] hover:text-[#E8D18C] cursor-pointer"
                >
                  <span>Discover Spa Therapy</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED NIGERIAN DISHES PREVIEW */}
      <section className="py-16 sm:py-20 bg-white border-y border-black/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4A2A]">
                HIGHGEE Foods · Pay On Delivery
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#141A16] tracking-tight text-balance">
                Freshly Prepared Nigerian Favourites
              </h2>
              <p className="text-sm sm:text-base text-[#4A554E]">
                Add meals directly to your cart, pair your favourite proteins, and send your order
                straight to HIGHGEE on WhatsApp.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('menu')}
              className="self-start md:self-auto px-5 py-3 rounded-xl bg-[#0D4A2A] hover:bg-[#08331D] text-white text-sm font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
            >
              <Utensils className="w-4 h-4 text-[#E8A817]" />
              <span>View Full Menu Catalogue</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                onQuickAdd={onQuickAdd}
                onCustomize={onCustomize}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. HIGHGEE PLANTAIN CHIPS SECTION (Golden Yellow, Green & White) */}
      <section
        id="section-chips"
        className="py-16 sm:py-24 bg-gradient-to-br from-[#FFF9E3] via-[#FFFDF5] to-[#F2F9F3] border-b border-[#E8A817]/25"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#166534]">
                HIGHGEE&apos;s Chips · 100% Natural Ingredients
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#141A16] leading-tight text-balance">
                CRUNCH INTO PURE SATISFACTION.
              </h2>
              <p className="text-base sm:text-lg text-[#364239] leading-relaxed">
                Made with natural plantain, vegetable oil and salt. Deliciously crunchy,
                satisfying and perfect for every occasion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="p-4 rounded-xl bg-white border border-[#F2B705]/40 space-y-1">
                  <h3 className="text-sm font-bold text-[#166534]">Ripe Plantain Chips</h3>
                  <p className="text-xs text-[#4A554E] leading-relaxed">
                    Naturally sweet, golden-caramelised slices with an irresistible crisp snap.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#166534]/20 space-y-1">
                  <h3 className="text-sm font-bold text-[#166534]">Unripe Plantain Chips</h3>
                  <p className="text-xs text-[#4A554E] leading-relaxed">
                    Light, savoury, wholesome green plantain crisps dusted gently with salt.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#F2B705]/40 space-y-1">
                  <h3 className="text-sm font-bold text-[#166534]">Serving Bowls &amp; Sharing</h3>
                  <p className="text-xs text-[#4A554E] leading-relaxed">
                    Crisp, clean batches prepared fresh for family tables, offices, and celebrations.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#166534]/20 space-y-1">
                  <h3 className="text-sm font-bold text-[#166534]">Packaged For Convenience</h3>
                  <p className="text-xs text-[#4A554E] leading-relaxed">
                    Sealed packs ready for everyday snacking, travel, events, and bulk supply.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={chipsWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 min-h-[46px] rounded-xl bg-[#166534] hover:bg-[#0D4A2A] text-white text-sm font-bold tracking-wide inline-flex items-center gap-2.5 transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>ORDER PLANTAIN CHIPS</span>
                </a>
                {chipsItem && (
                  <button
                    type="button"
                    onClick={() => onQuickAdd(chipsItem)}
                    className="px-5 py-3.5 min-h-[46px] rounded-xl bg-[#F2B705] hover:bg-[#E0A800] text-[#141A16] text-sm font-bold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#F2B705]/50 shadow-md aspect-[4/3] bg-white">
                <ResilientImage
                  src={BRAND_IMAGES.plantainChips}
                  alt="Ripe and unripe HIGHGEE plantain chips in ceramic bowls with fresh green plantains"
                />
              </div>
              <div className="grid grid-cols-12 gap-4 items-center bg-white p-4 rounded-2xl border border-black/8">
                <div className="col-span-4 aspect-[4/3] rounded-xl overflow-hidden bg-[#FFF9E3]">
                  <ResilientImage
                    src={PROMO_FLYERS.chips}
                    alt="Original HIGHGEE's Chips promotional presentation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-8 space-y-1">
                  <p className="text-xs font-bold text-[#166534] uppercase tracking-wide">
                    Three Simple Ingredients
                  </p>
                  <p className="text-sm font-semibold text-[#141A16]">
                    Natural Plantain · Vegetable Oil · Salt
                  </p>
                  <p className="text-xs text-[#4A554E]">
                    Order individual packs or event supply directly on WhatsApp — pay on delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HIGHGEE BEEF SNACKS SECTION (Chocolate Brown, Warm Orange & Gold) */}
      <section id="section-beef" className="py-16 sm:py-24 bg-[#2A140D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#E5A93C]/30 aspect-[4/3] bg-[#3B1E14]">
                <ResilientImage
                  src={BRAND_IMAGES.beefSnacks}
                  alt="Spiced Nigerian beef snacks, kilishi strips, and smoky grilled beef skewers"
                />
              </div>
              <div className="grid grid-cols-12 gap-4 items-center bg-[#3B1E14] p-4 rounded-2xl border border-[#E5A93C]/20">
                <div className="col-span-4 aspect-[4/3] rounded-xl overflow-hidden">
                  <ResilientImage
                    src={PROMO_FLYERS.beef}
                    alt="HIGHGEE Kitchen Beef Snack promotional design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="col-span-8 space-y-1">
                  <p className="text-xs font-bold text-[#E5A93C] uppercase tracking-wide">
                    HIGHGEE Kitchen Specialties
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Slow-spiced, fire-kissed, irresistibly tender
                  </p>
                  <p className="text-xs text-white/75">
                    Available for personal cravings, gift packs, and party platters.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E5A93C]">
                HIGHGEE Kitchen Beef Snacks
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight text-balance">
                CHOP CHOP GOODNESS!
              </h2>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                Enjoy delicious, flavour-packed beef snacks prepared to satisfy your cravings.
              </p>

              <ul className="space-y-3 text-sm text-white/85 pt-1">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E5A93C] mt-0.5 shrink-0" />
                  <span>
                    Richly seasoned dried and grilled beef bites infused with authentic Nigerian
                    yaji and aromatic spices.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E5A93C] mt-0.5 shrink-0" />
                  <span>
                    Multiple serving presentations — ready-to-eat snack packs, party trays, and
                    paired platters with fresh red onions.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#E5A93C] mt-0.5 shrink-0" />
                  <span>
                    Prepared cleanly in small batches for maximum tenderness and bold savoury taste.
                  </span>
                </li>
              </ul>

              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={beefWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 min-h-[46px] rounded-xl bg-[#C2521A] hover:bg-[#D96023] text-white text-sm font-bold tracking-wide inline-flex items-center gap-2.5 transition-colors whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>ORDER BEEF SNACKS</span>
                </a>
                {beefItem && (
                  <button
                    type="button"
                    onClick={() => onQuickAdd(beefItem)}
                    className="px-5 py-3.5 min-h-[46px] rounded-xl bg-[#E5A93C] hover:bg-[#F0B84C] text-[#2A140D] text-sm font-bold transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HIGHGEE SPA & MASSAGE THERAPY SECTION (Black, Champagne Gold & Warm Brown) */}
      <section id="section-spa" className="py-20 sm:py-28 bg-[#0B0B0C] text-[#F5EFE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Split Header + Sanctuary Imagery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                HIGHGEE Therapy · Spa &amp; Massage
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight text-balance">
                RELAX. REFRESH. RECONNECT.
              </h2>
              <p className="text-base sm:text-lg text-[#E5DEC9]/85 leading-relaxed">
                Experience comfort, relaxation and professional massage therapy at HIGHGEE. Let
                every touch help you unwind from the stress of everyday life.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onOpenSpaBooking()}
                  className="px-7 py-3.5 min-h-[48px] rounded-xl bg-[#D4AF37] hover:bg-[#E5C150] text-[#0B0B0C] text-sm font-bold tracking-wide inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>BOOK YOUR SPA SESSION</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 h-full min-h-[320px] bg-[#161310]">
                <ResilientImage
                  src={BRAND_IMAGES.spaTherapy}
                  alt="HIGHGEE Therapy serene candlelight spa and hot stone massage sanctuary"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 6 Spa Massage Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SPA_SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-[#15120F] border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors flex flex-col justify-between gap-5"
              >
                <div className="space-y-2.5">
                  <p className="text-xs font-medium text-[#D4AF37] tracking-wide">
                    0{idx + 1}. {service.focus}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#E5DEC9]/75 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenSpaBooking(service.title)}
                  className="self-start text-xs font-semibold uppercase tracking-wider text-[#D4AF37] hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Request This Session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
