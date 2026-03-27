const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "#events" },
  { label: "Vendors", href: "#community" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/antiquesinmoore",
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/antiquesinmoore",
    icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@mikeandfrank",
    icon: TikTokIcon,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-stone-800 text-cream-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 md:py-18">
        {/* Multi-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1: Contact */}
          <div>
            <h3 className="font-serif font-bold text-cream-50 text-lg mb-5">
              Contact
            </h3>
            <address className="not-italic font-sans text-sm leading-relaxed space-y-3">
              <div>
                <p className="text-cream-100">825 NW 24th Street, Bldg B</p>
                <p className="text-cream-100">Moore, OK 73160</p>
              </div>
              <p>
                <a
                  href="tel:+14056238698"
                  className="text-cream-200 hover:text-brass-light transition-colors duration-250 ease-gentle"
                >
                  (405) 623-8698
                </a>
              </p>
              <p>
                <a
                  href="mailto:mikesok49@gmail.com"
                  className="text-cream-200 hover:text-brass-light transition-colors duration-250 ease-gentle"
                >
                  mikesok49@gmail.com
                </a>
              </p>
            </address>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h3 className="font-serif font-bold text-cream-50 text-lg mb-5">
              Hours
            </h3>
            <div className="font-sans text-sm leading-relaxed space-y-2">
              <div className="flex justify-between max-w-xs">
                <span className="text-stone-400">Friday</span>
                <span className="text-cream-100">12 PM &ndash; 5 PM</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span className="text-stone-400">Saturday</span>
                <span className="text-cream-100">9 AM &ndash; 5 PM</span>
              </div>
              <div className="flex justify-between max-w-xs">
                <span className="text-stone-400">Sunday</span>
                <span className="text-cream-100">9 AM &ndash; 5 PM</span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links + Social */}
          <div>
            <h3 className="font-serif font-bold text-cream-50 text-lg mb-5">
              Explore
            </h3>
            <nav className="font-sans text-sm space-y-2 mb-8">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-cream-200 hover:text-brass-light transition-colors duration-250 ease-gentle"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <h3 className="font-serif font-bold text-cream-50 text-lg mb-4">
              Follow Us
            </h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-300 hover:text-brass-light transition-colors duration-250 ease-gentle"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + credit */}
        <div className="mt-14 pt-6 border-t border-stone-700">
          <p className="text-center text-stone-500 font-sans text-xs tracking-wide">
            A Mike Ramsey Jr. Production
          </p>
        </div>
      </div>
    </footer>
  );
}

/* Inline SVG icons */

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 0 1 1.523.99 4.088 4.088 0 0 1 .99 1.524c.163.46.349 1.26.403 2.43.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.054 1.17-.24 1.97-.403 2.43a4.34 4.34 0 0 1-2.513 2.513c-.46.163-1.26.349-2.43.403-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.17-.054-1.97-.24-2.43-.403a4.34 4.34 0 0 1-2.513-2.513c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849c.054-1.17.24-1.97.403-2.43A4.34 4.34 0 0 1 5.15 2.207c.46-.163 1.26-.349 2.43-.403C8.845 2.175 9.225 2.163 12 2.163zM12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.903.333 4.14.63a6.47 6.47 0 0 0-2.245 1.462A6.47 6.47 0 0 0 .433 4.337C.136 5.1-.067 5.972.009 7.25.067 8.53.081 8.938.081 12s.014 3.47.072 4.75c.058 1.278.261 2.15.558 2.913a6.47 6.47 0 0 0 1.462 2.245 6.47 6.47 0 0 0 2.245 1.462c.763.297 1.635.5 2.913.558 1.28.058 1.688.072 4.95.072s3.67-.014 4.95-.072c1.278-.058 2.15-.261 2.913-.558a6.75 6.75 0 0 0 3.707-3.707c.297-.763.5-1.635.558-2.913.058-1.28.072-1.688.072-4.95s-.014-3.67-.072-4.95c-.058-1.278-.261-2.15-.558-2.913a6.47 6.47 0 0 0-1.462-2.245A6.47 6.47 0 0 0 19.663.63C18.9.333 18.028.13 16.75.072 15.47.014 15.062 0 12 0z" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="18.406" cy="5.594" r="1.44" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.92 2.92 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.57 6.33 6.33 0 0 0 9.37 22a6.33 6.33 0 0 0 6.36-6.22V9.4a8.16 8.16 0 0 0 4.77 1.53V7.48a4.85 4.85 0 0 1-.91-.79z" />
    </svg>
  );
}
