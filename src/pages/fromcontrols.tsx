import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { ScrollToTop } from "@/components/ScrollToTop";

import { SampleAspectRatio } from "@/components/SampleAspectRatio";

import { SampleCard } from "@/components/SampleCard";

export function Layout() {
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
Button

Checkbox

Combobox

Command

ContextMenu

Form

Input

Label

RadioGroup

Select

Slider

Switch

Textarea

Toggle
*/}
