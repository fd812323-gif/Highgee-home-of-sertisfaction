import { useState } from 'react';
import { Check } from 'lucide-react';
import { BRAND_IMAGES, buildWhatsAppUrl } from '../data/assets';
import { HIRE_SERVICES } from '../data/menuData';
import { ResilientImage } from '../components/ResilientImage';
import { WhatsAppIcon } from '../components/BrandMark';

const BASE_HIRE_MESSAGE =
  'Hello HIGHGEE, I am interested in hiring your services. Kindly provide more information about your available services and arrangements.';

export function HireUsPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [notes, setNotes] = useState('');

  const toggleService = (title: string) => {
    setSelectedServices((prev) =>
      prev.includes(title) ? prev.filter((s) => s !== title) : [...prev, title]
    );
  };

  const directWhatsAppUrl = buildWhatsAppUrl(BASE_HIRE_MESSAGE);

  const buildCustomInquiryUrl = () => {
    if (selectedServices.length === 0 && !eventDate && !guestCount && !notes.trim()) {
      return directWhatsAppUrl;
    }
    const lines = [BASE_HIRE_MESSAGE, ''];
    if (selectedServices.length > 0) {
      lines.push(`Service(s) of Interest: ${selectedServices.join(', ')}`);
    }
    if (eventDate) lines.push(`Preferred Date: ${eventDate}`);
    if (guestCount.trim()) lines.push(`Estimated Guests / Quantity: ${guestCount.trim()}`);
    if (notes.trim()) lines.push(`Additional Details: ${notes.trim()}`);
    return buildWhatsAppUrl(lines.join('\n'));
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      {/* Hero Banner */}
      <section className="bg-[#0D4A2A] text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E8A817]">
              Event Catering, Bulk Supply &amp; Private Wellness
            </p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold leading-tight text-balance">
              Hire HIGHGEE For Your Events, Meals &amp; Relaxation
            </h1>
            <p className="text-base text-white/85 leading-relaxed">
              From intimate family dinners and corporate meetings to grand Nigerian weddings, bulk
              food arrangements, and private spa appointments, HIGHGEE delivers consistency, flavour,
              and dependable hospitality.
            </p>
            <div className="pt-2">
              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 min-h-[48px] rounded-xl bg-[#25D366] hover:bg-[#1FB858] text-[#052411] text-sm font-bold tracking-wide inline-flex items-center gap-2.5 transition-colors whitespace-nowrap"
              >
                <WhatsAppIcon className="w-5 h-5" monochrome />
                <span>CONTACT HIGHGEE ON WHATSAPP</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-white/15 aspect-[4/3] bg-[#08331D]">
              <ResilientImage
                src={BRAND_IMAGES.cateringEvents}
                alt="HIGHGEE professional Nigerian event catering display with chafing dishes and tropical table styling"
                eager
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        <div className="max-w-2xl space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0D4A2A]">
            Available Arrangements
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#141A16]">
            Services You Can Hire Us For
          </h2>
          <p className="text-sm sm:text-base text-[#4A554E]">
            Click any service below to include it in your WhatsApp enquiry, or reach us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HIRE_SERVICES.map((service, idx) => {
            const isSelected = selectedServices.includes(service.title);
            return (
              <button
                key={service.title}
                type="button"
                onClick={() => toggleService(service.title)}
                className={`text-left p-6 rounded-2xl border transition-all duration-150 flex flex-col justify-between gap-4 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0D4A2A] text-white border-[#0D4A2A] shadow-md'
                    : 'bg-white text-[#141A16] border-black/10 hover:border-[#0D4A2A]/40'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-xs font-semibold tabular-nums ${
                        isSelected ? 'text-[#E8A817]' : 'text-[#0D4A2A]'
                      }`}
                    >
                      0{idx + 1}.
                    </span>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                        isSelected
                          ? 'bg-[#E8A817] border-[#E8A817] text-[#08331D]'
                          : 'border-black/15 text-transparent'
                      }`}
                    >
                      <Check className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isSelected ? 'text-white/85' : 'text-[#4A554E]'
                    }`}
                  >
                    {service.detail}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Optional Enquiry Builder + Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-stretch">
          <div className="lg:col-span-7 bg-white rounded-2xl border border-black/10 p-6 sm:p-8 space-y-5">
            <div className="space-y-1">
              <h3 className="font-display text-2xl font-semibold text-[#141A16]">
                Prepare Your Booking Enquiry
              </h3>
              <p className="text-sm text-[#4A554E]">
                Optionally add your preferred date, guest estimate, or notes before launching
                WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="hire-date" className="block text-xs font-semibold text-[#28332C] mb-1.5">
                  Preferred Date (Optional)
                </label>
                <input
                  id="hire-date"
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm text-[#141A16] focus:outline-none focus:border-[#0D4A2A]"
                />
              </div>
              <div>
                <label htmlFor="hire-guests" className="block text-xs font-semibold text-[#28332C] mb-1.5">
                  Estimated Guests or Order Size
                </label>
                <input
                  id="hire-guests"
                  type="text"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  placeholder="e.g. 50 guests, 3 coolers, or 2 sessions"
                  className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm text-[#141A16] focus:outline-none focus:border-[#0D4A2A]"
                />
              </div>
            </div>

            <div>
              <label htmlFor="hire-notes" className="block text-xs font-semibold text-[#28332C] mb-1.5">
                Additional Event or Service Details
              </label>
              <textarea
                id="hire-notes"
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell us the dishes, snack packs, location, or spa arrangements you would like..."
                className="w-full rounded-xl border border-black/15 px-3.5 py-2.5 text-sm text-[#141A16] focus:outline-none focus:border-[#0D4A2A]"
              />
            </div>

            <div className="pt-2">
              <a
                href={buildCustomInquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 min-h-[48px] rounded-xl bg-[#0D4A2A] hover:bg-[#08331D] text-white text-sm font-bold inline-flex items-center justify-center gap-2.5 transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>CONTACT HIGHGEE ON WHATSAPP</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-rows-2 gap-4">
            <div className="rounded-2xl overflow-hidden border border-black/10 min-h-[180px]">
              <ResilientImage
                src={BRAND_IMAGES.heroFeast}
                alt="Nigerian party food and catering platters"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-black/10 min-h-[180px]">
              <ResilientImage
                src={BRAND_IMAGES.spaTherapy}
                alt="Private spa and wellness appointment setup by HIGHGEE Therapy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
