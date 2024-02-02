import Image from "next/image";
import Link from "next/link";

import ScrollAnimation from "@/container/ScrollAnimation";
import Branch from "@/container/Branch";
import StudentWorks from "@/container/StudentWorks";
import Course from "@/components/children/Course";

import { FaPlay } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Hero from "@/container/Hero";
import Modal from "@/components/Modal";

export default function Home() {
   const party = [
      {
         id: 0,
         title: "События",
         dcr: "Мы организовываем самые разные мероприятия внутри центров для наших студентов.",
         img: "party.jpg",
         scale: 1,
      },
      {
         id: 1.5,
         title: "События",
         dcr: "Мы организовываем самые разные мероприятия внутри центров для наших студентов.",
         img: "party.jpg",
         scale: 1.1,
      },
      {
         id: 2,
         title: "События",
         dcr: "Мы организовываем самые разные мероприятия внутри центров для наших студентов.",
         img: "party.jpg",
         scale: 1.2,
      },
      {
         id: 3,
         title: "События",
         dcr: "Мы организовываем самые разные мероприятия внутри центров для наших студентов.",
         img: "party.jpg",
         scale: 1.3,
      },
   ];

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
            <div className="">
               <div className="custom-container mb-10 max-lg:mb-3">
                  <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl leading-normal font-bold">
                     Авторские курсы
                  </h2>
               </div>
               <div className="custom-container py-3 max-sm:py-2 overflow-scroll no-scroll">
                  <div className="max-lg:min-w-[950px] flex items-center gap-7 max-2xl:gap-5 mb-7 max-2xl:mb-5">
                     {[0, 1, 2].map((item: number) => (
                        <Course key={item} />
                     ))}
                  </div>
                  <div className="max-lg:min-w-[950px] flex items-center gap-7 max-2xl:gap-5">
                     {[0, 1, 2].map((item: number) => (
                        <Course key={item} />
                     ))}
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="relative my-28 max-lg:my-20 mx-10 max-2xl:mx-5 max-xl:mx-0 rounded-[20px] max-sm:rounded-[30px] overflow-hidden bg-[#010018] z-10">
               <div className="gradient"></div>
               <div className="custom-container py-14">
                  <div className="md:text-center">
                     <h2 className="text-5xl max-xl:text-4xl leading-normal font-bold mb-4 max-xl:mb-2 text-white">
                        Отзывы выпускников
                     </h2>
                     <div className="max-w-[400px] max-md:max-w-[300px] md:m-auto">
                        <p className="text-[22px] max-lg:text-xl max-md:text-lg leading-normal font-medium text-[#A3A2AB]">
                           Посмотрите что говорят о нас выпускники курсов
                        </p>
                     </div>
                  </div>

                  <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 my-12 max-xl:my-6 mx-28 max-2xl:mx-10 max-xl:mx-0 py-12 max-xl:py-6 border-t border-[#ffffff66]">
                     {[0, 1, 2, 3].map((item: number) => {
                        return (
                           <div
                              key={item}
                              className="min-h-[420px] max-xl:min-h-[370px] max-lg:min-h-[300px] max-md:min-h-[260px] w-full flex rounded-xl p-5 max-lg:p-2 bg-[url('/assets/images/student.jpg')] bg-no-repeat bg-cover bg-center"
                           >
                              <div className="mt-auto px-5 max-lg:px-2 py-2 rounded-[4px] bg-white">
                                 <p className="text-sm font-medium">
                                    Алекс Маметов
                                 </p>
                              </div>
                           </div>
                        );
                     })}
                  </div>

                  <div className="w-fit m-auto">
                     <button className="bg-white flex items-center gap-2 p-2 rounded-lg">
                        <span className="p-2 rounded-lg bg-[#000]">
                           <MdArrowOutward
                              size={20}
                              color="white"
                              className=""
                           />
                        </span>
                        <span className="text-xl max-xl:text-lg font-bold">
                           Посмотреть все отзывы
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="">
               <div className="max-w-[720px] m-auto mb-28 max-xl:mb-16 max-md:mb-5 px-4">
                  <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold leading-normal md:text-center">
                     Что еще входит в стоимость обучения
                  </h2>
               </div>

               <div className="relative flex flex-col gap-11 max-md:gap-0 px-4">
                  {party.map(
                     (item: {
                        id: number;
                        title: string;
                        dcr: string;
                        img: string;
                        scale: number;
                     }) => {
                        return <ScrollAnimation key={item.id} item={item} />;
                     }
                  )}
               </div>
            </div>
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
