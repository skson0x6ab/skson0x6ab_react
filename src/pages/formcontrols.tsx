import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { ScrollToTop } from "@/components/ScrollToTop";
import { SampleCalendar } from "@/components/SampleCalendar";
import { SampleCheckbox } from "@/components/SampleCheckbox";

export function FormControls() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <SampleCalendar />
        <SampleCheckbox />
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
