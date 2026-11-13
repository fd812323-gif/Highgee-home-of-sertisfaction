import { useState } from 'react';
import { X } from 'lucide-react';
import { SPA_SERVICES } from '../data/menuData';
import { buildWhatsAppUrl } from '../data/assets';
import { WhatsAppIcon } from './BrandMark';

interface SpaBookingModalProps {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}

export function SpaBookingModal({ isOpen, initialService, onClose }: SpaBookingModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [preferredService, setPreferredService] = useState(
    initialService || SPA_SERVICES[0].title
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'HIGHGEE THERAPY — SPA BOOKING REQUEST',
      '',
      `Customer Name: ${customerName.trim() || 'Not specified'}`,
      `Preferred Massage Service: ${preferredService}`,
      `Preferred Date: ${preferredDate || 'Flexible'}`,
      `Preferred Time: ${preferredTime || 'Flexible'}`,
      `Additional Booking Information: ${additionalInfo.trim() || 'None'}`,
      '',
      'Kindly confirm session availability.',
    ];
    const url = buildWhatsAppUrl(lines.join('\n'));

    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.target = '_blank';
    anchor.rel = 'noopener noreferrer';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-xs p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="spa-booking-title"
    >
      <div className="w-full sm:max-w-lg bg-[#12100E] text-[#F5EFE2] border border-[#D4AF37]/30 rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden">
        <div className="px-6 py-4 border-b border-[#D4AF37]/20 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-[#D4AF37] tracking-wide">HIGHGEE Therapy</p>
            <h3 id="spa-booking-title" className="font-display text-xl font-semibold text-white">
              Book Your Spa Session
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close spa booking form"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#D4AF37]/80 hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="spa-name" className="block text-xs font-medium text-[#E8D18C] mb-1.5">
              Customer Name *
            </label>
            <input
              id="spa-name"
              type="text"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Your full name"
              className="w-full rounded-xl bg-[#1C1814] border border-[#D4AF37]/25 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label htmlFor="spa-service" className="block text-xs font-medium text-[#E8D18C] mb-1.5">
              Preferred Massage Service *
            </label>
            <select
              id="spa-service"
              value={preferredService}
              onChange={(e) => setPreferredService(e.target.value)}
              className="w-full rounded-xl bg-[#1C1814] border border-[#D4AF37]/25 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
            >
              {SPA_SERVICES.map((svc) => (
                <option key={svc.id} value={svc.title}>
                  {svc.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="spa-date" className="block text-xs font-medium text-[#E8D18C] mb-1.5">
                Preferred Date *
              </label>
              <input
                id="spa-date"
                type="date"
                required
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full rounded-xl bg-[#1C1814] border border-[#D4AF37]/25 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label htmlFor="spa-time" className="block text-xs font-medium text-[#E8D18C] mb-1.5">
                Preferred Time *
              </label>
              <input
                id="spa-time"
                type="time"
                required
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full rounded-xl bg-[#1C1814] border border-[#D4AF37]/25 px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="spa-notes" className="block text-xs font-medium text-[#E8D18C] mb-1.5">
              Additional Booking Information
            </label>
            <textarea
              id="spa-notes"
              rows={2}
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Preferred pressure, focus areas, or special requests..."
              className="w-full rounded-xl bg-[#1C1814] border border-[#D4AF37]/25 px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C150] text-[#0B0B0C] font-bold text-sm flex items-center justify-center gap-2.5 transition-colors cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5" monochrome />
            <span>Continue Booking on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
}
