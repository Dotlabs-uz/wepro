"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

interface StudentWorksProps { }

const StudentWorks: React.FC<StudentWorksProps> = () => {
   const tabs = [
      {
         id: 0,
         title: "Frontend-разработка",
      },
      {
         id: 1,
         title: "Разработка под iOS/Android",
      },
      {
         id: 2,
         title: "Графический дизайн",
      },
      {
         id: 3,
         title: "Веб-дизайн",
      },
      {
         id: 4,
         title: "SMM",
      },
      {
         id: 5,
         title: "Мобилография",
      },
   ];
   let [activeTab, setActiveTab] = useState(tabs[0].id);
   const sliderRef = useRef(null);

   const scrollToElement = (index: number) => {
      const container = sliderRef.current as unknown as HTMLDivElement;
      const element = document.getElementById(`item-${index}`);
      if (container && element) {
         const scrollOffset = element.offsetLeft - (container.clientWidth - element.clientWidth) / 2;
         container.scrollTo({
            left: scrollOffset,
            behavior: 'smooth'
         });
      }
   };

   return (
      <>
         <div className="custom-container pt-14 pb-20 max-lg:py-8">
            <div className="max-w-4xl w-full mx-auto md:text-center">
               <h2 className="font-bold text-white">
                  Работы студентов
               </h2>
               <p className="text-xl max-2xl:text-lg font-medium text-[#A3A2AB]">
                  Выпускники курса — настоящие профи. Мы упаковали некоторые из
                  кейсов, чтобы показать их вам: вы сможете так же. И даже еще
                  лучше.
               </p>
            </div>

            <div className="mx-20 max-3xl:mx-10 max-2xl:mx-0 mt-6 pt-6 max-lg:pt-3 px-11 max-3xl:px-0 border-t border-[#ffffff66]">
               <div ref={sliderRef} className="bg-[#F4F4F4] w-full flex space-x-1 justify-between items-center gap-1 mb-5 max-lg:mb-3 p-1 max-sm:p-[2px] rounded-lg overflow-auto no-scroll">
                  {tabs.map((item: { id: number; title: string }) => (
                     <button
                        key={item.id}
                        onClick={() => { setActiveTab(item.id), scrollToElement(item.id) }}
                        id={`item-${item.id}`}
                        className={`${activeTab === item.id
                           ? "text-white"
                           : "hover:text-black/60"
                           } relative w-full z-10 rounded-lg py-4 max-xl:py-3 px-6 max-3xl:px-5 max-xl:px-3 text-xs max-3xl:text-xs font-bold text-center text-nowrap space-nowrap text-black outline-sky-400 transition `}
                        style={{
                           WebkitTapHighlightColor: "transparent",
                        }}
                     >
                        {activeTab === item.id && (
                           <motion.span
                              layoutId="bubble"
                              className="absolute inset-0 z-[-1] mix-blend-difference rounded-lg bg-[#151FE1]"
                              transition={{
                                 type: "spring",
                                 bounce: 0.2,
                                 duration: 1,
                              }}
                           />
                        )}
                        {item.title}
                     </button>
                  ))}
               </div>

               <div className="rounded-xl overflow-hidden">
                  <Image
                     className="w-full h-full object-cover"
                     src={"/images/students-project.jpg"}
                     width={1000}
                     height={1000}
                     alt="students-project"
                  />
               </div>
            </div>

            <button className="bg-white m-auto flex items-center gap-2 p-2 rounded-lg mt-8">
               <span className="p-2 maxsm rounded-lg bg-[#000]">
                  <MdArrowOutward size={20} color="white" className="" />
               </span>
               <span className="text-xl max-lg:text-lg max-sm:text-base font-bold">
                  Посмотреть все отзывы
               </span>
            </button>
         </div>
      </>
   );
};

export default StudentWorks;
