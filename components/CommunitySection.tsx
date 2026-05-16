function SectionOrnament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-8 h-px bg-brass/40" />
      <svg
        className="w-2 h-2 text-brass/60"
        viewBox="0 0 8 8"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect x="4" y="0" width="5.66" height="5.66" rx="0.5" transform="rotate(45 4 4)" />
      </svg>
      <div className="w-8 h-px bg-brass/40" />
    </div>
  );
}

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/antiquesinmoore",
    icon: FacebookIcon,
    prominent: true,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/antiquesinmoore",
    icon: InstagramIcon,
    prominent: false,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@mikeandfrank",
    icon: TikTokIcon,
    prominent: false,
  },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 md:py-28 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="mb-14 md:mb-18 text-center">
          <span className="text-brass text-xs font-sans font-semibold tracking-[0.25em] uppercase">
            Our Community
          </span>
          <h2 className="mt-4 font-display text-cream-50 text-4xl md:text-5xl tracking-wide text-balance">
            A Haven for the Curious
          </h2>
          <SectionOrnament className="mt-5 justify-center" />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          {/* Prose */}
          <div className="md:col-span-3">
            <p className="text-cream-200/90 font-sans text-lg leading-relaxed">
              Antiques in Moore is more than a store — it&apos;s a community of
              independent vendors, weekend treasure hunters, and people who
              believe old things still have stories left to tell. Step inside
              8,000 square feet of curated finds: mid-century furniture, vintage
              jewelry, rare collectibles, and everyday treasures you won&apos;t
              find anywhere else.
            </p>
            <p className="mt-5 text-cream-300/60 font-sans text-base leading-relaxed">
              Open every weekend, with special outdoor markets and seasonal
              events throughout the year. Whether you&apos;re a serious
              collector or just love the thrill of the hunt, there&apos;s always
              something new to discover.
            </p>
          </div>

          {/* Social links */}
          <div className="md:col-span-2">
            <h3 className="font-serif font-bold text-cream-50 text-lg mb-6">
              Find Us Online
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-3 font-sans transition-colors duration-250 ease-gentle ${
                    social.prominent
                      ? "text-brass hover:text-brass-light text-base font-semibold"
                      : "text-stone-400 hover:text-cream-200 text-sm"
                  }`}
                >
                  <social.icon />
                  <span>{social.label}</span>
                  <ExternalLinkIcon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Inline SVG icons */

function FacebookIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 0 1 1.523.99 4.088 4.088 0 0 1 .99 1.524c.163.46.349 1.26.403 2.43.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.17-.24 1.97-.403 2.43a4.34 4.34 0 0 1-2.513 2.513c-.46.163-1.26.349-2.43.403-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.054-1.97-.24-2.43-.403a4.34 4.34 0 0 1-2.513-2.513c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.054-1.17.24-1.97.403-2.43A4.34 4.34 0 0 1 5.15 2.207c.46-.163 1.26-.349 2.43-.403C8.845 2.175 9.225 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.903.333 4.14.63a6.47 6.47 0 0 0-2.245 1.462A6.47 6.47 0 0 0 .433 4.337C.136 5.1-.067 5.972.009 7.25.067 8.53.081 8.938.081 12s.014 3.47.072 4.75c.058 1.278.261 2.15.558 2.913a6.47 6.47 0 0 0 1.462 2.245 6.47 6.47 0 0 0 2.245 1.462c.763.297 1.635.5 2.913.558 1.28.058 1.688.072 4.95.072s3.67-.014 4.95-.072c1.278-.058 2.15-.261 2.913-.558a6.75 6.75 0 0 0 3.707-3.707c.297-.763.5-1.635.558-2.913.058-1.28.072-1.688.072-4.95s-.014-3.67-.072-4.95c-.058-1.278-.261-2.15-.558-2.913a6.47 6.47 0 0 0-1.462-2.245A6.47 6.47 0 0 0 19.663.63C18.9.333 18.028.13 16.75.072 15.47.014 15.062 0 12 0z" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="18.406" cy="5.594" r="1.44" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.36-6.22V9.4a8.16 8.16 0 0 0 4.77 1.53V7.48a4.85 4.85 0 0 1-.91-.79z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="w-3 h-3 flex-shrink-0 opacity-40 group-hover:opacity-70 transition-opacity"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-4.5-6H18m0 0v4.5m0-4.5-7.5 7.5"
      />
    </svg>
  );
}
