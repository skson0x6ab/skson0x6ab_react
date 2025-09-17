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
  <div className="bg-furina bg-cover bg-center h-screen relative">
    <div className="absolute inset-0 flex items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
        Welcome to Hoyoverse
      </h1>
    </div>
  </div>

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