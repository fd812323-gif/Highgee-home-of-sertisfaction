import { CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';
import { BRAND_IMAGES, PROMO_FLYERS, buildWhatsAppUrl } from '../data/assets';
import { ResilientImage } from '../components/ResilientImage';
import { WhatsAppIcon } from '../components/BrandMark';

interface AboutUsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export function AboutUsPage({ onNavigate }: AboutUsPageProps) {
  const whatsappUrl = buildWhatsAppUrl('Hello HIGHGEE, I would love to learn more about your services.');

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* Header */}
      <section className="bg-[#0D4A2A] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E8A817]">
              ABOUT HIGHGEE
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-balance">
              HIGHGEE — HOME OF SATISFACTION.
            </h1>
            <p className="text-base sm:text-lg text-white/88 leading-relaxed">
              HIGHGEE is a multi-service lifestyle brand dedicated to bringing satisfaction,
              delicious experiences and relaxation closer to people.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-white/15 aspect-[4/3]">
              <ResilientImage
                src={BRAND_IMAGES.swallowsSoups}
                alt="Traditional Nigerian soups and pounded yam prepared by HIGHGEE"
                eager
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Our Story */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4A2A] mb-2">
              01. Our Story
            </p>
            <h2 className="font-display text-3xl font-semibold text-[#141A16]">
              Crafted Around Taste, Comfort &amp; Care
            </h2>
          </div>
          <div className="lg:col-span-8 bg-white rounded-2xl border border-black/8 p-6 sm:p-8 space-y-4 text-[#2C3730] text-base leading-relaxed">
            <p>
              HIGHGEE is a multi-service lifestyle brand dedicated to bringing satisfaction,
              delicious experiences and relaxation closer to people.
            </p>
            <p>
              From freshly prepared Nigerian homemade meals to naturally made plantain chips and
              delicious beef snacks, we are passionate about quality, taste and customer
              satisfaction.
            </p>
            <p>
              Our passion goes beyond food. Through HIGHGEE Therapy, we also provide massage
              therapy experiences designed to help people relax, refresh and take a break from the
              everyday stress of life.
            </p>
            <p>
              Whether you are craving a delicious Nigerian meal, looking for satisfying snacks,
              planning an event or seeking relaxation, HIGHGEE is here to serve you.
            </p>
            <p className="font-semibold text-[#0D4A2A] pt-2">
              At HIGHGEE, our promise is simple: QUALITY, SATISFACTION AND EXCELLENCE IN EVERY
              EXPERIENCE.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-[#0D4A2A] text-white space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E8A817]">
              02. Our Mission
            </p>
            <h3 className="font-display text-2xl font-semibold">
              Bringing Joy to Every Plate &amp; Every Session
            </h3>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              To prepare wholesome homemade Nigerian meals, crisp natural snacks, and restorative
              wellness therapy with uncompromising hygiene, authentic ingredients, and warm
              customer care.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-[#14110F] text-white border border-[#D4AF37]/25 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
              03. Our Vision
            </p>
            <h3 className="font-display text-2xl font-semibold">
              A Trusted Nigerian Multi-Service Lifestyle Name
            </h3>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              To be the everyday destination people trust whenever they desire nourishing Nigerian
              dishes, dependable event catering, satisfying local snacks, or peaceful spa
              relaxation.
            </p>
          </div>
        </section>

        {/* Our Services & Why Choose HIGHGEE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 bg-white rounded-2xl border border-black/8 p-7 space-y-5">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4A2A]">
                04. Our Services
              </p>
              <h3 className="font-display text-2xl font-semibold text-[#141A16]">
                Four Divisions, One Promise
              </h3>
            </div>
            <ul className="space-y-3.5 text-sm text-[#3C463F]">
              <li className="pb-3 border-b border-black/6">
                <strong className="text-[#141A16] block">HIGHGEE Foods</strong>
                Homemade Nigerian rice dishes, swallows, soups, special meals, proteins, catering,
                and home delivery.
              </li>
              <li className="pb-3 border-b border-black/6">
                <strong className="text-[#141A16] block">HIGHGEE Chips</strong>
                Crunchy ripe and unripe plantain chips made from natural plantain, vegetable oil,
                and salt.
              </li>
              <li className="pb-3 border-b border-black/6">
                <strong className="text-[#141A16] block">HIGHGEE Kitchen Snacks</strong>
                Deliciously spiced beef snacks and meat-based treats crafted for pure enjoyment.
              </li>
              <li>
                <strong className="text-[#141A16] block">HIGHGEE Therapy</strong>
                Professional full-body, relaxation, therapeutic, and stress-relief spa massage
                sessions.
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6 bg-white rounded-2xl border border-black/8 p-7 space-y-5">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4A2A]">
                05. Why Choose HIGHGEE
              </p>
              <h3 className="font-display text-2xl font-semibold text-[#141A16]">
                Built Around Customer Peace of Mind
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-[#3C463F]">
              {[
                'Fresh homemade preparation tailored for rich, authentic Nigerian flavour.',
                'Simple WhatsApp ordering with direct human confirmation and clear communication.',
                'Strict Pay On Delivery policy — no online card details or payment stress.',
                'Natural ingredients in our plantain chips and carefully seasoned beef snacks.',
                'Dedicated spa relaxation sanctuary designed to help you unwind completely.',
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0D4A2A] mt-0.5 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('menu')}
                className="px-5 py-2.5 rounded-xl bg-[#0D4A2A] text-white text-sm font-semibold hover:bg-[#08331D] cursor-pointer"
              >
                Explore Menu
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl border border-[#0D4A2A]/20 text-[#0D4A2A] text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#0D4A2A]/5"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Chat With Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* Original Brand Heritage Designs */}
        <section className="space-y-6">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4A2A]">
              Brand Identity Gallery
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#141A16]">
              Our Signature Promotional Designs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { src: PROMO_FLYERS.foods, title: 'HIGHGEE Foods' },
              { src: PROMO_FLYERS.chips, title: "HIGHGEE's Chips" },
              { src: PROMO_FLYERS.beef, title: 'HIGHGEE Kitchen Beef Snack' },
              { src: PROMO_FLYERS.spa, title: 'HIGHGEE Therapy Massage' },
            ].map((flyer) => (
              <div
                key={flyer.title}
                className="bg-white rounded-2xl border border-black/8 overflow-hidden flex flex-col"
              >
                <div className="aspect-square bg-[#F3F1EC] overflow-hidden">
                  <ResilientImage
                    src={flyer.src}
                    alt={flyer.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-semibold text-[#141A16]">{flyer.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
