import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import EventsSection from "@/components/EventsSection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <EventsSection />
        <CommunitySection />
      </main>
      <Footer />
    </>
  );
}
