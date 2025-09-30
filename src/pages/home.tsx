import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";


export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">

      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}