import { buildWhatsAppUrl } from '../data/assets';
import { WhatsAppIcon } from './BrandMark';

export function FloatingWhatsApp() {
  const href = buildWhatsAppUrl('Hello HIGHGEE, I would like to make an order or enquiry.');

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with HIGHGEE on WhatsApp"
      title="Chat with HIGHGEE on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.22)] hover:scale-105 active:scale-95 transition-transform duration-150 animate-whatsapp-float focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
    >
      <WhatsAppIcon className="w-14 h-14" />
    </a>
  );
}
