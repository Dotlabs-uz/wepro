"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import "swiper/css/grid";
import "swiper/css";

interface CoursesProps {
   arr: {
      id: number;
      title: string;
   }[];
}
const Courses: React.FC<CoursesProps> = ({ arr }) => {
   return (
      <section>
         <div className="custom-container">
            <div className="mb-10">
               <h2 className="text-[50px] leading-normal font-bold">
                  Авторские курсы
               </h2>
            </div>
            <Swiper
               spaceBetween={50}
               slidesPerView={3}
               // grid={{
               //    rows: 2,
               // }}
               // modules={[Grid]}
            >
               {[0, 1, 2, 3, 4, 5].map((item: number) => {
                  return (
                     <SwiperSlide
                        key={item}
                        className=" rounded-[20px] shadow-[0px_4px_5px_0px_#00000026]"
                     >
                        <div className="p-2 max-lg:hidden">
                           <Image
                              src={"/assets/images/course-img.jpg"}
                              width={1000}
                              height={1000}
                              alt="course"
                           />
                        </div>
                        <div className="px-7 max-2xl:px-4 pb-6 pt-3">
                           <h3 className="text-[28px] max-2xl:text-2xl leading-normal font-bold mb-6 max-2xl:mb-4">
                              Frontend-разработка
                           </h3>
                           <ul className="flex flex-wrap gap-[6px] mb-5 max-xl:mb-3">
                              {arr.map(
                                 (item: { id: number; title: string }) => {
                                    return (
                                       <li
                                          key={item.id}
                                          className="px-4 py-1 rounded-full border sm:border-[#00000015] max-sm:border-black"
                                       >
                                          <p className="text-sm max-xl:text-xs leading-normal">
                                             {item.title}
                                          </p>
                                       </li>
                                    );
                                 }
                              )}
                           </ul>
                           <p className="max-xl:text-sm mb-1">
                              Срок обучения: 6 месяцев
                           </p>
                           <p className="max-xl:text-sm mb-7 max-xl:mb-4">
                              Цена: 660,000 сум/месяц
                           </p>
                           <div className="mt-auto">
                              <button className="px-7 max-xl:px-5 py-3 max-xl:py-2 font-bold rounded-lg duration-100 ease-in border-2 border-black hover:bg-[#151FE1] hover:border-[#151FE1] hover:text-white">
                                 Записаться на курс
                              </button>
                           </div>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </section>
   );
};

export default Courses;
