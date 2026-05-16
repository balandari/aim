function OrnamentLine() {
  return (
    <div className="flex items-center justify-center gap-2 mt-3">
      <div className="w-6 h-px bg-brass/30" />
      <svg
        className="w-1.5 h-1.5 text-brass/50"
        viewBox="0 0 6 6"
        fill="currentColor"
        aria-hidden="true"
      >
        <rect x="3" y="0" width="4.24" height="4.24" rx="0.5" transform="rotate(45 3 3)" />
      </svg>
      <div className="w-6 h-px bg-brass/30" />
    </div>
  );
}

const props = [
  {
    icon: VendorsIcon,
    value: "20+",
    label: "Unique Vendors",
  },
  {
    icon: CalendarIcon,
    value: "Est. 1998",
    label: "Serving Oklahoma",
  },
  {
    icon: BuildingIcon,
    value: "8,000",
    label: "Square Feet",
  },
  {
    icon: ClockIcon,
    value: "Open",
    label: "Every Weekend",
  },
];

export default function ValueProps() {
  return (
    <section className="relative bg-stone-900 border-y border-brass/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brass/10">
          {props.map((prop) => (
            <div key={prop.label} className="py-10 md:py-14 text-center px-4">
              <prop.icon />
              <div className="mt-3 font-display text-cream-50 text-2xl md:text-3xl tracking-wide">
                {prop.value}
              </div>
              <div className="mt-1 text-stone-400 font-sans text-xs tracking-[0.15em] uppercase">
                {prop.label}
              </div>
              <OrnamentLine />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VendorsIcon() {
  return (
    <svg
      className="w-8 h-8 mx-auto text-brass/70"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      className="w-8 h-8 mx-auto text-brass/70"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      className="w-8 h-8 mx-auto text-brass/70"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      className="w-8 h-8 mx-auto text-brass/70"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
