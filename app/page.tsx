import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Placeholder for Email Collection Section - Task 3 */}
      <div id="email-collection" className="min-h-screen flex items-center justify-center bg-neutral-100 px-4 py-section">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Email Collection Section
          </h2>
          <p className="text-lg text-neutral-700">
            Typeform integration will be added in Task 3
          </p>
        </div>
      </div>
    </main>
  );
}
