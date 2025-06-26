import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { ScrollToTop } from "@/components/ScrollToTop";
import { SampleAlert } from "@/components/SampleAlert";
import { SampleAlertDialog } from "@/components/SampleAlertDialog";
import { SampleAvatar } from "@/components/SampleAvatar";
import { SampleBadge } from "@/components/SampleBadge";
import { SampleCarousel } from "@/components/SampleCarousel";

export function FeedbackDisplay() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <SampleAlert />
        <SampleAlertDialog />
        <SampleAvatar />
        <SampleBadge />
        <SampleCarousel />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
{/*
AlertDialog

Avatar

Badge

Progress

Spinner

Table

Toast

Tooltip
*/}
