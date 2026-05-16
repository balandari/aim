import { getUpcomingEvents, defaultHours } from "@/data/events";

export default function EventsSection() {
  const upcoming = getUpcomingEvents();

  return (
    <section id="events" className="py-16 md:py-22 lg:py-26">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section heading */}
        <div className="mb-12 md:mb-16">
          <span className="text-earth text-xs font-sans font-semibold tracking-[0.2em] uppercase">
            What&apos;s Happening
          </span>
          <h2 className="mt-3 font-display text-stone-900 text-3xl md:text-4xl lg:text-5xl text-balance">
            Upcoming Events
          </h2>
        </div>

        {upcoming.length > 0 ? (
          <div className="grid gap-8 md:gap-10">
            {upcoming.map((event) => {
              const eventDate = new Date(event.date + "T12:00:00");
              const month = eventDate.toLocaleDateString("en-US", { month: "short" });
              const day = eventDate.getDate();
              const weekday = eventDate.toLocaleDateString("en-US", { weekday: "long" });

              if (event.isFeatured) {
                return (
                  <article
                    key={event.id}
                    className="relative bg-cream-50 border border-stone-200 rounded-xl p-8 md:p-10 shadow-warm-md"
                  >
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                      {/* Date badge */}
                      <div className="flex-shrink-0 flex md:flex-col items-center md:items-center gap-3 md:gap-1 md:w-24 md:pt-1">
                        <span className="text-earth font-sans font-bold text-sm uppercase tracking-wider">
                          {month}
                        </span>
                        <span className="font-display text-stone-900 text-4xl md:text-5xl leading-none">
                          {day}
                        </span>
                        <span className="text-stone-500 font-sans text-sm">
                          {weekday}
                        </span>
                      </div>

                      {/* Event details */}
                      <div className="flex-1">
                        <div className="mb-1">
                          <span className="inline-block bg-earth/10 text-earth text-xs font-sans font-semibold tracking-wider uppercase px-3 py-1 rounded">
                            Featured
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-stone-900 text-2xl md:text-3xl mt-3">
                          {event.title}
                        </h3>
                        <p className="mt-3 text-stone-600 font-sans text-base leading-relaxed max-w-2xl">
                          {event.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm font-sans text-stone-500">
                          <span className="flex items-center gap-1.5">
                            <ClockIcon />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPinIcon />
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={event.id}
                  className="bg-cream-50 border border-stone-200 rounded-lg p-6 md:p-8 shadow-warm"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    {/* Date badge */}
                    <div className="flex sm:flex-col items-center gap-2 sm:gap-1 sm:w-16 flex-shrink-0">
                      <span className="text-earth font-sans font-bold text-xs uppercase tracking-wider">
                        {month}
                      </span>
                      <span className="font-display text-stone-900 text-3xl leading-none">
                        {day}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <h3 className="font-serif font-bold text-stone-900 text-xl">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-stone-600 font-sans text-base leading-relaxed">
                        {event.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm font-sans text-stone-500">
                        <span className="flex items-center gap-1.5">
                          <ClockIcon />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPinIcon />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Fallback: no upcoming events */
          <article className="bg-cream-50 border border-stone-200 rounded-xl p-8 md:p-10 shadow-warm-md max-w-2xl">
            <h3 className="font-serif font-bold text-stone-900 text-2xl">
              Open Every Weekend
            </h3>
            <p className="mt-3 text-stone-600 font-sans text-base leading-relaxed">
              No special events scheduled right now, but our doors are open every weekend.
              Come browse 20+ vendors and discover something unexpected.
            </p>
            <div className="mt-6 space-y-2 text-sm font-sans">
              <div className="flex items-center gap-3 text-stone-700">
                <ClockIcon />
                <span>Saturday &amp; Sunday: {defaultHours.weekend}</span>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}

/* Inline SVG icons -- keeps the component self-contained, no icon library needed */

function ClockIcon() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
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

function MapPinIcon() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  );
}
