import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";

import { GenshinRedeemCode } from "@/components/GenshinRedeemCode";
import { StarRailRedeemCode } from "@/components/StarRailRedeemCode";

export function Hoyoverse() {
  return (
<>
  <Navbar />

  {/* 1. Hero background full screen */}
 

  {/* 2. 이어지는 콘텐츠 영역 */}
  <div className="bg-furina_extend bg-cover bg-center min-h-screen py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-8">
      <GenshinRedeemCode />
      <StarRailRedeemCode />
    </div>
    <Footer />
    <ScrollToTop />
  </div>
</>
  );
}