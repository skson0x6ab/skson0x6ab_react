import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";



export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}