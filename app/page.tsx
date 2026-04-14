import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrendingDestinations from '@/components/TrendingDestinations';
import PopularPackages from '@/components/PopularPackages';
import CategoryPackages from '@/components/CategoryPackages';
import SeasonGuide from '@/components/SeasonGuide';
import WhyChooseUs from '@/components/WhyChooseUs';
import TrendingEscapes from '@/components/TrendingEscapes';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrendingDestinations />
      <PopularPackages />
      <CategoryPackages />
      <TrendingEscapes />
      <SeasonGuide />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </main>
  );
}
