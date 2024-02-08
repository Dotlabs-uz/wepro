import Image from "next/image";
import Link from "next/link";

import ScrollAnimation from "@/container/ScrollAnimation";
import Branch from "@/container/Branch";
import StudentWorks from "@/container/StudentWorks";
import Course from "@/components/children/Course";

import { FaPlay } from "react-icons/fa";
import Hero from "@/container/Hero";
import Modal from "@/components/Modal";
import Reviews from "@/container/Reviews";
import Courses from "@/components/CoursesCom";

export default function Home() {
   return (
      <>
         <section>
            <Hero />
         </section>

         <section className="xl:bg-[#F5F5F5] my-24 max-md:my-20">
            <div className="max-xl:block hidden mb-4 max-3xl:px-16 max-lg:px-4">
               <h2 className="max-w-[470px] text-5xl max-sm:text-4xl font-bold">
                  Почему выбирают именно Wepro
               </h2>
            </div>
            <div className="custom-container min-h-[541px] max-lg:min-h-[400px] grid gap-5 max-2xl:gap-3 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 py-14 max-xl:py-6  max-xl:rounded-3xl max-xl:bg-[#F5F5F5]">
               <div className="col-span-2 flex max-xl:hidden">
                  <h2 className="max-w-[470px] m-auto text-5xl font-bold">
                     Почему выбирают именно Wepro
                  </h2>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     11
                  </p>
                  <p className="max-sm:text-sm">программ обучения</p>
               </div>
               <div className="max-lg:hidden row-span-2 flex p-5 max-xl:p-3 bg-[url('/assets/images/man.jpg')] bg-cover bg-no-repeat bg-center rounded-[22px] overflow-hidden">
                  <div className="mt-auto flex gap-2">
                     <button className="bg-white px-6 rounded-xl">
                        <FaPlay size={20} color="black" />
                     </button>
                     <div className="backdrop-blur-[7px] rounded-xl p-3 max-xl:p-2 bg-[#ffffff99]">
                        <p className="text-sm font-bold">Посмотрите отзывы</p>
                        <p>Юсупов Мансур</p>
                     </div>
                  </div>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     2200+
                  </p>
                  <p className="max-sm:text-sm">выпускников за 3 года работы</p>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     24/7
                  </p>
                  <p className="max-sm:text-sm">доступ к учебному материалу</p>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     70%
                  </p>
                  <p className="max-sm:text-sm">
                     студентов находят работу после обучения
                  </p>
               </div>
            </div>
         </section>

         <section>
            <div className="custom-container">
               <div className="mb-10 max-lg:mb-3">
                  <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl leading-normal font-bold">
                     Авторские курсы
                  </h2>
               </div>
               <Courses />
            </div>
         </section>

         <section>
            <Reviews />
         </section>

         <section>
            <ScrollAnimation />
         </section>

         <section>
            <Branch />
         </section>

         <section className="bg-[#010018] relative z-10 mx-10 max-2xl:mx-5 max-xl:mx-0 rounded-[20px] overflow-hidden">
            <div className="gradient"></div>
            <StudentWorks />
         </section>
      </>
   );
}
