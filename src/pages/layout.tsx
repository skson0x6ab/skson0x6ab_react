import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { ScrollToTop } from "@/components/ScrollToTop";

import { SampleAspectRatio } from "@/components/SampleAspectRatio";

import { SampleCard } from "@/components/SampleCard";

export function Layout() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-items-center">
        <SampleAspectRatio />
        <SampleCard />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
{/*
  Accordion
AspectRatio
Card
Collapsible
Dialog
DropdownMenu
Popover
ScrollArea
Separator
Sheet
Skeleton
Tabs
*/}
