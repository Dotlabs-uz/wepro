"use client";
import { useRef } from "react";
import Image from "next/image";
import { useInView, motion } from "framer-motion";
import Vacancy from "@/components/Vacancy";

interface VacanciesProps {
   data: {
      hhImage: string
   }
   course: any
}

const Vacancies: React.FC<VacanciesProps> = ({ data, course }) => {
   const ref = useRef(null);
   const inView = useInView(ref);

   const vacancies = [
      {
         scaleMax: 1.1,
         scaleMin: 0.2,
      },
      {
         scaleMax: 1.1,
         scaleMin: 0.4,
      },
      {
         scaleMax: 1.1,
         scaleMin: 0.6,
      },
      {
         scaleMax: 1.1,
         scaleMin: 0.8,
      },
      {
         scaleMax: 1.1,
         scaleMin: 0.9,
      },
   ];

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

            <div className="relative z-10 max-md:hidden">
               <img
                  src={data?.hhImage}
                  alt="vacacies"
               />
            </div>

            <div
               ref={ref}
               className="relative z-10 max-md:flex flex-col gap-5 hidden">
               {vacancies.map(
                  (item: { scaleMax: number; scaleMin: number }, idx: number) => {
                     return (
                        <Vacancy inView={inView} item={item} idx={idx} key={idx} />
                     );
                  }
               )}
            </div>
         </div>
      </motion.div>
   );
};

export default Vacancies;
