import Image from "next/image";
import { FaFigma } from "react-icons/fa";
import { Suspense, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import HeroTabs from "@/components/HeroTabs";
import HeroLoading from "@/components/HeroLoading";
import { getDictionary } from "@/lib/dictionary";

interface HeroProps {
   lang: any
}

const Hero: React.FC<HeroProps> = async ({ lang }) => {
   const { data } = await axios.get(
      process.env.NEXT_PUBLIC_BASE + "/courses?project=wepro"
   );
   const { homePage } = await getDictionary(lang);

   return (
      <div className="custom-container mt-10">
         <div className="max-sm:block hidden mb-8">
            <h1 className="text-4xl font-bold text-center mb-3">
               {homePage.Hero.title}
            </h1>
            <p className="text-[#00000099] text-sm font-bold text-center mb-7">
               {homePage.Hero.dcr}
            </p>

            <div className="flex flex-col gap-2">
               <button className="bg-[#151FE1] text-[#ffffff] w-full font-bold py-3 rounded-lg border-2 border-[#151FE1]">
                  {homePage.Hero.buttton}
               </button>
               <button className="bg-[#ffffff] text-[#151FE1] w-full font-bold py-3 rounded-lg border-2 border-[#151FE1]">
                  {homePage.Hero.buttton2}
               </button>
            </div>
         </div>
         <Suspense fallback={<HeroLoading />}>
            <HeroTabs courses={data} homePage={homePage} />
         </Suspense>
      </div>
   );
};

export default Hero;
