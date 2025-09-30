import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Stock379800 } from "@/components/Stock379800";
import { Stock379810 } from "@/components/Stock379810";
import { Stock458730 } from "@/components/Stock458730";
import { Stock458760 } from "@/components/Stock458760";
import { Stock483290 } from "@/components/Stock483290";

export function Stock() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
        <Stock458760 />
        <Stock483290 />
 
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 justify-items-center">
        <Stock379800 />
        <Stock379810 />
        <Stock458730 />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}