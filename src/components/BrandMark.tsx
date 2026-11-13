interface BrandMarkProps {
  tone?: 'dark' | 'light';
}

export function BrandMark({ tone = 'dark' }: BrandMarkProps) {
  const textColor = tone === 'light' ? 'text-white' : 'text-[#0D4A2A]';
  const strokeColor = tone === 'light' ? '#E8A817' : '#0D4A2A';
  const accentColor = '#E8A817';

  return (
    <span className={`inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${textColor}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M9.5 19.5C6.8 19.1 5 17 5 14.3C5 11.4 7.4 9.2 10.3 9.3C11.4 7.1 13.6 5.6 16 5.6C18.4 5.6 20.6 7.1 21.7 9.3C24.6 9.2 27 11.4 27 14.3C27 17 25.2 19.1 22.5 19.5V23.5C22.5 24.6 21.6 25.5 20.5 25.5H11.5C10.4 25.5 9.5 24.6 9.5 23.5V19.5Z"
          stroke={strokeColor}
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <path d="M10 21.5H22" stroke={accentColor} strokeWidth="2.1" strokeLinecap="round" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight">HIGHGEE</span>
    </span>
  );
}

interface WhatsAppIconProps {
  className?: string;
  monochrome?: boolean;
}

export function WhatsAppIcon({ className = 'w-5 h-5', monochrome = false }: WhatsAppIconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {!monochrome && <circle cx="16" cy="16" r="16" fill="#25D366" />}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.002 6.4C10.708 6.4 6.4 10.708 6.4 16.002C6.4 17.905 6.956 19.754 8.006 21.335L6.588 25.6L11.01 24.185C12.536 25.115 14.254 25.605 16.002 25.605C21.296 25.605 25.604 21.297 25.604 16.002C25.604 10.708 21.296 6.4 16.002 6.4ZM21.564 19.955C21.331 20.61 20.222 21.158 19.67 21.242C19.174 21.318 18.545 21.351 17.855 21.132C17.434 20.998 16.893 20.822 16.205 20.525C13.297 19.27 11.399 16.337 11.253 16.143C11.107 15.948 10.071 14.573 10.071 13.149C10.071 11.725 10.816 11.024 11.08 10.736C11.344 10.448 11.658 10.376 11.851 10.376C12.044 10.376 12.238 10.378 12.408 10.386C12.587 10.395 12.827 10.318 13.063 10.885C13.304 11.466 13.884 12.89 13.956 13.035C14.029 13.18 14.077 13.35 13.98 13.544C13.883 13.738 13.835 13.86 13.69 14.03C13.545 14.2 13.386 14.409 13.255 14.539C13.11 14.684 12.959 14.841 13.128 15.132C13.297 15.423 13.88 16.373 14.742 17.142C15.85 18.13 16.784 18.436 17.075 18.581C17.366 18.726 17.535 18.702 17.704 18.508C17.873 18.314 18.429 17.661 18.622 17.37C18.815 17.079 19.009 17.127 19.275 17.224C19.541 17.321 20.967 18.022 21.258 18.167C21.549 18.312 21.742 18.385 21.815 18.506C21.888 18.627 21.888 19.208 21.564 19.955Z"
        fill="white"
      />
    </svg>
  );
}
