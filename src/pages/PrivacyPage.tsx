import { buildWhatsAppUrl, WHATSAPP_NUMBER_DISPLAY } from '../data/assets';
import { WhatsAppIcon } from '../components/BrandMark';

const POLICY_SECTIONS = [
  {
    title: '1. Customer Information',
    body: 'Information provided during an order, such as name, phone number and delivery address, is used strictly to process and fulfil the customer’s request accurately and efficiently.',
  },
  {
    title: '2. Order Processing',
    body: 'Food orders, snack orders, catering enquiries, and spa session bookings are received and confirmed directly through WhatsApp so our team can verify item availability and prepare everything fresh.',
  },
  {
    title: '3. Delivery Policy',
    body: 'HIGHGEE aims to prepare and deliver confirmed food orders as quickly as possible. All delivery arrangements and estimated delivery times are communicated clearly to customers during WhatsApp order confirmation. Delivery times may vary depending on location, availability, preparation time and order volume.',
  },
  {
    title: '4. Payment',
    body: 'ORDER TODAY, PAY ON DELIVERY. Payment is collected upon delivery. Customers are never required to make online payments or enter card details through the website.',
  },
  {
    title: '5. Customer Privacy',
    body: 'Customer contact and delivery information is handled responsibly and will never be sold or shared with third parties for unrelated marketing purposes.',
  },
  {
    title: '6. WhatsApp Communication',
    body: 'By placing an order or submitting a service request, customers understand that order confirmations, delivery updates, and service enquiries are processed directly through HIGHGEE’s official WhatsApp channel.',
  },
];

export function PrivacyPage() {
  const whatsappUrl = buildWhatsAppUrl(
    'Hello HIGHGEE, I have a question regarding your Privacy and Delivery Policy.'
  );

  return (
    <div className="bg-[#FAF9F6] min-h-screen pb-20">
      <section className="bg-[#0D4A2A] text-white py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E8A817]">
            Transparency &amp; Customer Trust
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-semibold">
            Privacy &amp; Delivery Policy
          </h1>
          <p className="text-sm sm:text-base text-white/85 max-w-2xl leading-relaxed">
            Clear guidelines on how HIGHGEE handles your order details, WhatsApp confirmations,
            deliveries, and Pay on Delivery terms.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        {POLICY_SECTIONS.map((section) => (
          <section
            key={section.title}
            className="bg-white rounded-2xl border border-black/8 p-6 sm:p-8 space-y-2.5"
          >
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#141A16]">
              {section.title}
            </h2>
            <p className="text-sm sm:text-base text-[#3C463F] leading-relaxed">{section.body}</p>
          </section>
        ))}

        <div className="bg-[#08331D] text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-semibold">Questions About Your Order?</h3>
            <p className="text-sm text-white/80">
              Reach HIGHGEE directly on WhatsApp ({WHATSAPP_NUMBER_DISPLAY}).
            </p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1FB858] text-[#052411] text-sm font-bold inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon className="w-5 h-5" monochrome />
            <span>Message HIGHGEE</span>
          </a>
        </div>
      </div>
    </div>
  );
}
