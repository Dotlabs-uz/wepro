"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useInView, motion, useScroll } from "framer-motion";
import Vacancy from "@/components/Vacancy";
import Lenis from '@studio-freight/lenis'

interface VacanciesProps {
   data: any
   course: any
}

const Vacancies: React.FC<VacanciesProps> = ({ data, course }) => {
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
   })

   useEffect(() => {
      const lenis = new Lenis()

      function raf(time: any) {
         lenis.raf(time)
         requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
   })

   return (
      <motion.div
         className="bg-[#D6001C] mx-auto rounded-3xl"
      >
         <div className="custom-container py-14 max-xl:py-10 max-lg:py-7">
            <div className="mb-11 max-lg:mb-8 max-md:mb-6">
               <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold leading-normal mb-8 max-lg:mb-4 text-white">
                  {course.vacancies.title}
               </h2>
               <div className="flex max-xs:flex-col sm:items-center gap-24 max-xl:gap-14 max-lg:gap-12 max-md:gap-2 mb-11 max-lg:mb-8 max-md:mb-6">
                  <div className="">
                     <p className="text-xl max-xl:text-lg max-md:text-base font-medium leading-normal text-nowrap text-white">
                        {course.vacancies.salary}
                     </p>
                     <p className="text-lg max-xl:text-base max-md:text-sm font-medium leading-normal text-[#E0E0E0]">
                        {course.vacancies.text}
                     </p>
                  </div>
                  <div className="">
                     <p className="text-xl max-xl:text-lg max-md:text-base font-medium leading-normal text-nowrap text-white">
                        {course.vacancies.vacancies}
                     </p>
                     <p className="text-lg max-xl:text-base max-md:text-sm font-medium leading-normal text-[#E0E0E0]">
                        {course.vacancies.text2}
                     </p>
                  </div>
               </div>

               <div className="flex items-center gap-3">
                  <Image src={"/icons/hh.svg"} width={48} height={48} alt="hh" />
                  <p className="text-xl max-lg:text-lg max-md:text-base font-medium text-white">
                     {course.vacancies.hh}
                  </p>
               </div>
            </div>

            <div className="w-fit m-auto grid grid-cols-3 gap-6 max-md:hidden">
               {
                  data.map((item: string, idx: number) => (
                     <div key={idx} className="vacacy-grid">
                        <img
                           className="object-cover w-auto h-auto rounded-xl"
                           src={`https://wepro.uz/api/uploads/${item}`}
                           width={1000}
                           height={1000}
                           alt="vacacy"
                        />
                     </div>
                  ))
               }
            </div>

            <div
               ref={container}
               className="w-fit max-md:w-full relative max-md:flex flex-col m-auto gap-10 mt-[10vh] hidden"
            >
               {data.map((item: string, idx: number) => {
                  const targetScale = 1 - ((data.length - idx) * 0.05);
                  return (
                     <Vacancy
                        key={`p_${idx}`}
                        idx={idx}
                        item={item}
                        progress={scrollYProgress}
                        range={[idx * .25, 1]}
                        targetScale={targetScale}
                     />
                  );
               })}
            </div>
         </div>
      </motion.div>
   );
};

export default Vacancies;
