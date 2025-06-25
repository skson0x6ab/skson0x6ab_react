import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";

import { SampleAlert } from "@/components/SampleAlert";
import { SampleAlertDialog } from "@/components/SampleAlertDialog";
import { SampleAvatar } from "@/components/SampleAvatar";
import { SampleBadge } from "@/components/SampleBadge";
import { SampleBreadcrumb } from "@/components/SampleBreadcrumb";
import { SampleCalendar } from "@/components/SampleCalendar";
import { SampleCarousel } from "@/components/SampleCarousel";
import { SampleCheckbox } from "@/components/SampleCheckbox";

export function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FAQ />
      <SampleAlert />
      <SampleAlertDialog />
      <SampleAvatar />
      <SampleBadge />
      <SampleBreadcrumb />
      <SampleCalendar />
      <SampleCarousel />
      <SampleCheckbox />
      <Footer />
      <ScrollToTop />
    </>
  );
}