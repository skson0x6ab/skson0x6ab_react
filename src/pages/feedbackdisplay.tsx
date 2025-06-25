import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { ScrollToTop } from "@/components/ScrollToTop";

import { SampleAspectRatio } from "@/components/SampleAspectRatio";

import { SampleCard } from "@/components/SampleCard";

export function FeedbackDisplay() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <SampleAspectRatio />
        <SampleCard />
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
