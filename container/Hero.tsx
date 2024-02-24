import Image from "next/image";
import { FaFigma } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import HeroTabs from "@/components/HeroTabs";

interface HeroProps {
   courses: any
}

const Hero: React.FC<HeroProps> = ({ courses }) => {
   return (
      <div className="custom-container mt-10">
         <div className="max-sm:block hidden mb-8">
            <h1 className="text-4xl font-bold text-center mb-3">
               С нуля до PRO за 5 месяца
            </h1>
            <p className="text-[#00000099] text-sm font-bold text-center mb-7">
               Wepro - это сеть IT-школ в Самарканде
            </p>

            <div className="flex flex-col gap-2">
               <button className="bg-[#151FE1] text-[#ffffff] w-full font-bold py-3 rounded-lg border-2 border-[#151FE1]">
                  Начать обучение
               </button>
               <button className="bg-[#ffffff] text-[#151FE1] w-full font-bold py-3 rounded-lg border-2 border-[#151FE1]">
                  Посмотреть все курсы
               </button>
            </div>
         </div>
         <HeroTabs courses={courses} />
      </div>
   );
};

export default Hero;
