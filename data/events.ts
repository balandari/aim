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

export const events: AIMEvent[] = [];

export const seasonalEventUpdate = {
  title: "Outdoor Markets Return This Fall",
  description:
    "Our outdoor pop-up markets are taking a summer pause and are planned to return when cooler weather does. Until then, the store is open every weekend with fresh vendor finds inside.",
  note: "Next outdoor market planned when cooler weather returns.",
};

export const defaultHours = {
  weekend: "9 AM - 5 PM",
};

export function getUpcomingEvents(): AIMEvent[] {
  const now = new Date();
  return events.filter((e) => new Date(e.date) >= now);
}
