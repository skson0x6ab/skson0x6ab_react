import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { ScrollToTop } from "@/components/ScrollToTop";

import { FAQ } from "@/components/FAQ";
import { SampleAspectRatio } from "@/components/SampleAspectRatio";
import { SampleAlert } from "@/components/SampleAlert";
import { SampleAlertDialog } from "@/components/SampleAlertDialog";
import { SampleAvatar } from "@/components/SampleAvatar";
import { SampleBadge } from "@/components/SampleBadge";
import { SampleCarousel } from "@/components/SampleCarousel";
import { SampleBreadcrumb } from "@/components/SampleBreadcrumb";
import { SampleCalendar } from "@/components/SampleCalendar";
import { SampleCheckbox } from "@/components/SampleCheckbox";
import { SampleCard } from "@/components/SampleCard";

export function ShadcnComponents() {
  return (
    <>
      <Navbar />
      <FAQ />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
        <SampleAlert />
        <SampleAlertDialog />
        <SampleAspectRatio />
        <SampleAvatar />
        <SampleBadge />
        <SampleBreadcrumb />
        <SampleCalendar />
        <SampleCard />
        <SampleCarousel />
        <SampleCheckbox />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

