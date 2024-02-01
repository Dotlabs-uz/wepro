"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";

interface ScrollAnimationProps {
   item: {
      id: number;
      title: string;
      dcr: string;
      img: string;
      scale: number;
   };
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ item }) => {
   const { scrollYProgress } = useViewportScroll();
   const scale = useTransform(scrollYProgress, [0, 1], [item.scale, 0.6]);

   return (
      <>
         <motion.div
            style={{
               scale,
            }}
            className="bg-white max-h-[800px] scroll-animated m-auto sticky rounded-[22px] shadow-[0px_4px_70px_0px_#00000033]"
         >
            <div className="text-center mb-9 px-20 max-lg:px-10 pt-7 max-md:mb-5">
               <h3 className="text-[#151FE1] text-4xl max-md:text-3xl font-bold mb-3">
                  События
               </h3>
               <p className="text-[#A3A2AB] text-base font-bold max-md:font-medium">
                  Мы организовываем самые разные мероприятия внутри центров для
                  наших студентов.
               </p>
            </div>   
            <div className="w-full h-full m-auto px-80 max-2xl:px-6 max-md:px-6">
               <Image
                  className="w-full h-full object-cover"
                  src={"/assets/images/party.jpg"}
                  width={1000}
                  height={1000}
                  alt="photo"
               />
            </div>
         </motion.div>
      </>
   );
};

export default ScrollAnimation;
