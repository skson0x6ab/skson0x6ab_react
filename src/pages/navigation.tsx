import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { ScrollToTop } from "@/components/ScrollToTop";


export function Layout() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
{/*
Breadcrumb

Menubar

NavigationMenu
*/}
