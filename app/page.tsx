import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const serviceWords = [
  "Web Development",
  "UI/UX Design",
  "Modernization",
  "Landing Pages",
  "E-Commerce",
  "Performance",
  "Strategy",
  "Branding",
];

const clientWords = [
  "APEC Group",
  "GeoPetroleum",
  "Candonkeys",
  "Metal Products USA",
  "5M Wellness",
  "My Petro Parts",
  "Grit Digital",
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
