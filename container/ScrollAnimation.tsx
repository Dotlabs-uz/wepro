"use client";
import { useRef } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";

import AnimateBlock from "@/components/AnimateBlock";

interface ScrollAnimationProps {
   lang: any
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ lang }) => {
   const party = [
      {
         id: 0,
         title: lang.included.itemTitile,
         dcr: lang.included.itemDcr,
         img: "party.svg",
         scale: 0.2,
         scale2: 1.1,
      },
      {
         id: 1.5,
         title: lang.included.itemTitile2,
         dcr: lang.included.itemDcr2,
         img: "coworking.svg",
         scale: 0.3,
         scale2: 1.1,
      },
      {
         id: 2,
         title: lang.included.itemTitile3,
         dcr: lang.included.itemDcr3,
         img: "locale.svg",
         scale: 0.5,
         scale2: 1,
      },
      {
         id: 3,
         title: lang.included.itemTitile4,
         dcr: lang.included.itemDcr4,
         img: "englishBonus.svg",
         scale: 0.5,
         scale2: 1.1,
      },
   ];
   const ref = useRef(null);
   const inView = useInView(ref);

   return (
      <>
         <div ref={ref}
            className="">
            <div className="max-w-[720px] m-auto mb-28 max-xl:mb-16 max-md:mb-5 px-4">
               <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold leading-normal md:text-center">
                  {lang.included.party}
               </h2>
            </div>

            <div className="relative flex flex-col gap-11 max-md:gap-0 px-10 max-sm:px-0">
               {party.map(
                  (item: {
                     id: number;
                     title: string;
                     dcr: string;
                     img: string;
                     scale: number;
                     scale2: number;
                  }) => (
                     <AnimateBlock item={item} key={item.id} inView={inView} />
                  )
               )}
            </div>
         </div>
      </>
   );
};

export default ScrollAnimation;
