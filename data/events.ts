export interface AIMEvent {
  id: string;
  title: string;
  date: string; // ISO date
  time: string;
  description: string;
  location: string;
  isFeatured: boolean;
}

export const events: AIMEvent[] = [
  {
    id: 'outdoor-popup-2026-04',
    title: 'Outdoor Pop Up Market',
    date: '2026-04-25',
    time: '9 AM - 5 PM',
    description: 'Browse vendors in the parking lot for our spring outdoor market.',
    location: '825 NW 24th Street, Moore, OK',
    isFeatured: true,
  },
];

export const defaultHours = {
  friday: '12 PM - 5 PM',
  weekend: '9 AM - 5 PM',
};

export function getUpcomingEvents(): AIMEvent[] {
  const now = new Date();
  return events.filter(e => new Date(e.date) >= now);
}
