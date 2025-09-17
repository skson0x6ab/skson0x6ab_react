import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Stock } from "@/components/Stock";


export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stock />
      <Footer />
      <ScrollToTop />
    </>
  );
}