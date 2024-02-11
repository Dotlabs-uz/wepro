"use client";
import { useRef } from "react";
import Image from "next/image";
import { useInView, useScroll, useTransform, motion } from "framer-motion";
import Vacancy from "@/components/Vacancy";

interface VacanciesProps {}

const Vacancies: React.FC<VacanciesProps> = () => {
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
      <div
         ref={ref}
         className="custom-container py-14 max-xl:py-10 max-lg:py-7"
      >
         <div className="mb-11 max-lg:mb-8 max-md:mb-6">
            <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold leading-normal mb-8 max-lg:mb-4 text-white">
               Вакансии в Узбекистане
            </h2>
            <div className="flex max-xs:flex-col sm:items-center gap-24 max-xl:gap-14 max-lg:gap-12 max-md:gap-2 mb-11 max-lg:mb-8 max-md:mb-6">
               <div className="">
                  <p className="text-xl max-xl:text-lg max-md:text-base font-medium leading-normal text-nowrap text-white">
                     От 3,000,000 сум
                  </p>
                  <p className="text-lg max-xl:text-base max-md:text-sm font-medium leading-normal text-[#E0E0E0]">
                     доход начинающего Графического дизайнера
                  </p>
               </div>
               <div className="">
                  <p className="text-xl max-xl:text-lg max-md:text-base font-medium leading-normal text-nowrap text-white">
                     Более 3,000 вакансий
                  </p>
                  <p className="text-lg max-xl:text-base max-md:text-sm font-medium leading-normal text-[#E0E0E0]">
                     открыто на данный момент
                  </p>
               </div>
            </div>

            <div className="flex items-center gap-3">
               <Image src={"/icons/hh.svg"} width={48} height={48} alt="hh" />
               <p className="text-xl max-lg:text-lg max-md:text-base font-medium text-white">
                  HeadHunder Uzbekistan
               </p>
            </div>
         </div>

         <div className="md:grid md:grid-cols-3 gap-6 max-xl:gap-3 relative z-10 max-md:hidden">
            <div className="relative md:z-[-2] max-md:sticky">
               <Image
                  src={"/images/vacancies/vacancy-1.svg"}
                  width={1000}
                  height={1000}
                  alt="vacancy"
               />
            </div>
            <div className="max-md:sticky ">
               <Image
                  src={"/images/vacancies/vacancy-2.svg"}
                  width={1000}
                  height={1000}
                  alt="vacancy"
               />
            </div>
            <div className="max-md:sticky top-[60px]">
               <Image
                  src={"/images/vacancies/vacancy-3.svg"}
                  width={1000}
                  height={1000}
                  alt="vacancy"
               />
            </div>
            <div className="md:-translate-y-40 md:translate-x-40 relative md:z-[-1] max-md:sticky">
               <Image
                  src={"/images/vacancies/vacancy-4.svg"}
                  width={1000}
                  height={1000}
                  alt="vacancy"
               />
            </div>
            <div className="md:-translate-y-40 md:translate-x-40 max-md:sticky top-[100px]">
               <Image
                  src={"/images/vacancies/vacancy-5.svg"}
                  width={1000}
                  height={1000}
                  alt="vacancy"
               />
            </div>
         </div>

         <div className="relative z-10 max-md:flex flex-col gap-5 hidden">
            {vacancies.map(
               (item: { scaleMax: number; scaleMin: number }, idx: number) => {
                  return (
                     <Vacancy inView={inView} item={item} idx={idx} key={idx} />
                  );
               }
            )}
         </div>
      </div>
   );
};

export default Vacancies;
