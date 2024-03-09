import axios from "axios";
import { motion } from 'framer-motion';

import { Locale } from "@/i18n.config";

import {
   Carousel,
   CarouselContent,
} from "@/components/ui/carousel"

import Course from "./children/Course";
// import { useEffect, useRef, useState } from "react";


interface CoursesProps {
   category: string;
   lang: string
}

type CoursesTyps = {
   _id: string;
   apps: string[];
   category: string;
   discount: number;
   isAI: boolean;
   isVisible: boolean;
   language: string;
   month: number;
   price: number;
   project: string;
   textAboutCourse: string;
   title: string;
   url: string;
   preview: string
};

const Courses: React.FC<CoursesProps> = async ({ category, lang }) => {
   const { data } = await axios.get(
      process.env.NEXT_PUBLIC_BASE + "/courses?project=wepro"
   );
   // const containerRef = useRef<HTMLDivElement>(null);
   // const [constraints, setConstraints] = useState({ left: 0, right: 0 });

   // useEffect(() => {
   //    if (containerRef.current) {
   //       const containerWidth = containerRef.current.offsetWidth;
   //       const contentWidth = containerRef.current.scrollWidth;
   //       const newConstraints = {
   //          left: -Math.max(0, contentWidth - containerWidth),
   //          right: 0,
   //       };
   //       setConstraints(newConstraints);
   //    }
   // }, [containerRef]);

   return (
      <>
         {/* <motion.div
            className="bg-red-500 px-36 w-fit  m-auto"
            ref={containerRef}
            drag="x"
            dragConstraints={constraints}
         >
            <motion.div className="grid grid-flow-col grid-rows-2 gap-5 w-fit">
               <div className="bg-gray-200 p-4 w-60">Item 1</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-400 p-4 w-60">Item 3</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-400 p-4 w-60">Item 3</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-400 p-4 w-60">Item 3</div>
               <div className="bg-gray-300 p-4 w-60">Item 2</div>
               <div className="bg-gray-400 p-4 w-60">Item 5</div>
            </motion.div>
         </motion.div> */}

         <Carousel
            className="w-full m-auto"
            opts={{
               align: "start",
               dragFree: true
            }}
         >
            <CarouselContent className="3xl:mx-auto grid grid-flow-col grid-rows-2 gap-5 px-36 max-3xl:px-16 max-lg:px-5 max-sm:px-4 py-3 max-md:py-2">
               {
                  data.map((item: CoursesTyps) => {
                     if (category === item.category && lang === item.language) {
                        return <Course key={item._id} item={item} />;
                     } else if (category === "all" && lang === item.language) {
                        return <Course key={item._id} item={item} />;
                     }
                  })
               }
            </CarouselContent>
         </Carousel>
      </>
   );
};

export default Courses;
