import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Stock458760 } from "@/components/Stock458760";
import { Stock483290 } from "@/components/Stock483290";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
        <Stock458760 />
        <Stock483290 />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}