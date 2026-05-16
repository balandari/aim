export interface AIMEvent {
  id: string;
  title: string;
  date: string; // ISO date
  time: string;
  description: string;
  location: string;
  isFeatured: boolean;
  /** Optional path to a flyer image in /public */
  flyerImage?: string;
  /** Extra highlight details shown on the card */
  highlights?: string[];
  /** Weather note */
  weatherNote?: string;
  /** Vendor info blurb */
  vendorInfo?: string;
}

export const events: AIMEvent[] = [
  {
    id: 'outdoor-popup-2026-06',
    title: 'Outdoor Pop Up Market',
    date: '2026-06-13',
    time: '9 AM – 5 PM',
    description:
      'Vintage finds & timeless treasures! Browse antiques, collectibles, baked goods, and handmade crafts from vendors set up right in our parking lot. Whether you\'re a seasoned collector or just love a good treasure hunt, this is the summer event you don\'t want to miss.',
    location: 'Parking Lot — 825 NW 24th St, Moore, OK 73160',
    isFeatured: true,
    flyerImage: '/events/june-13-popup-flyer.jpg',
    highlights: [
      'Antiques & Collectibles',
      'Bakers & Crafters',
      'Vintage Finds',
    ],
    weatherNote: 'Weather permitting',
    vendorInfo:
      '10×10 vendor space for $30 — prepay to guarantee your spot. Call Frank at (405) 316-3353.',
  },
];

export const defaultHours = {
  weekend: '9 AM – 5 PM',
};

export function getUpcomingEvents(): AIMEvent[] {
  const now = new Date();
  return events.filter((e) => new Date(e.date) >= now);
}
