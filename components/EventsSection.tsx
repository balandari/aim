import Image from "next/image";
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
                    className="relative bg-cream-50 border border-stone-200 rounded-xl overflow-hidden shadow-warm-md"
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Flyer image column */}
                      {event.flyerImage && (
                        <div className="relative lg:w-[340px] xl:w-[380px] flex-shrink-0">
                          <div className="relative w-full aspect-[2/3] lg:aspect-auto lg:h-full">
                            <Image
                              src={event.flyerImage}
                              alt={`${event.title} — ${month} ${day} flyer`}
                              fill
                              className="object-cover object-top"
                              sizes="(max-width: 1024px) 100vw, 380px"
                            />
                          </div>
                        </div>
                      )}

                      {/* Event details column */}
                      <div className="flex-1 p-8 md:p-10 lg:p-12">
                        {/* Featured badge + date */}
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                          <span className="inline-block bg-earth/10 text-earth text-xs font-sans font-semibold tracking-wider uppercase px-3 py-1 rounded">
                            Featured Event
                          </span>
                          {event.weatherNote && (
                            <span className="inline-block bg-amber-50 text-amber-700 text-xs font-sans font-medium tracking-wide px-3 py-1 rounded border border-amber-200">
                              ☀️ {event.weatherNote}
                            </span>
                          )}
                        </div>

                        {/* Date display */}
                        <div className="flex items-baseline gap-3 mb-5">
                          <span className="font-display text-stone-900 text-4xl md:text-5xl leading-none">
                            {month} {day}
                          </span>
                          <span className="text-stone-500 font-sans text-lg">
                            {weekday}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif font-bold text-stone-900 text-2xl md:text-3xl">
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-4 text-stone-600 font-sans text-base md:text-lgleading-relaxed max-w-2xl">
                          {event.description}
                        </p>

                        {/* Highlight tags */}
                        {event.highlights && event.highlights.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-2">
                            {event.highlights.map((h) => (
                              <span
                                key={h}
                                className="inline-flex items-center gap-1.5 bg-stone-100 text-stone-700 text-xs font-sans font-medium tracking-wide px-3 py-1.5 rounded-full"
                              >
                                <StarIcon />
                                {h}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Time + Location */}
                        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-sans text-stone-500">
                          <span className="flex items-center gap-1.5">
                            <ClockIcon />
                            {event.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPinIcon />
                            {event.location}
                          </span>
                        </div>

                        {/* Vendor info callout */}
                        {event.vendorInfo && (
                          <div className="mt-8 bg-stone-50 border border-stone-200 rounded-lg p-5">
                            <h4 className="text-stone-900 font-sans font-semibold text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                              <TentIcon />
                              Want a Booth?
                            </h4>
                            <p className="text-stone-600 font-sans text-sm leading-relaxed">
                              {event.vendorInfo}
                            </p>
                          </div>
                        )}
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

function StarIcon() {
  return (
    <svg
      className="w-3 h-3 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function TentIcon() {
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
        d="M2 20h20M12 4l8 16M12 4L4 20m8-16v16m-4-8l4 8 4-8"
      />
    </svg>
  );
}
