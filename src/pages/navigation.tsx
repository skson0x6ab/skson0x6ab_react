import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { ScrollToTop } from "@/components/ScrollToTop";
import { SampleBreadcrumb } from "@/components/SampleBreadcrumb";

export function Navigation() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <SampleBreadcrumb />
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
