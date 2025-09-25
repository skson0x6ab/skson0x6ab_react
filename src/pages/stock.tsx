import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Stock379800 } from "@/components/Stock379800";
import { Stock379810 } from "@/components/Stock379810";
import { Stock458730 } from "@/components/Stock458730";

export function Stock() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
        <Stock379800 />
        <Stock379810 />
        <Stock458730 />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}