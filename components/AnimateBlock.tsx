"use client";
import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";

interface AnimateBlockProps {
   item: {
      id: number;
      title: string;
      dcr: string;
      img: string;
      scale: number;
      scale2: number;
   };
   inView: any;
}

const AnimateBlock: React.FC<AnimateBlockProps> = ({ item, inView }) => {
   const { scrollYProgress } = useScroll();
   const scale = useTransform(
      scrollYProgress,
      [0, 1],
      [item.scale2, item.scale]
   );

   return (
      <motion.div
         style={inView ? { scale } : {}}
         transition={{ duration: 0.5 }}
         className="max-h-[80vh] scroll-animated sticky m-auto overflow-hidden p-0 shadow-[0px_4px_70px_0px_#00000033] rounded-[22px] bg-white"
      >
         <div
            // style={{
            //    scale,
            // }}
            className=""
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
            <div className="w-full h-full mt-auto px-14 max-2xl:px-6 max-md:px-6 ">
               <Image
                  className="w-full h-full object-cover"
                  src={"/images/party.jpg"}
                  width={1000}
                  height={1000}
                  alt="photo"
               />
            </div>
         </div>
      </motion.div>
   );
};

export default AnimateBlock;
