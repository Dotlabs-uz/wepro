"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

interface StudentWorksProps {}

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

   return (
      <>
         <div className="custom-container pt-14 max-md:py-8 pb-20">
            <div className="max-w-4xl w-full mx-auto md:text-center">
               <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl mb-4 max-xl:mb-2 font-bold text-white">
                  Работы студентов
               </h2>
               <p className="text-[22px] max-2xl:text-xl max-lg:text-lg font-medium text-[#A3A2AB]">
                  Выпускники курса — настоящие профи. Мы упаковали некоторые из
                  кейсов, чтобы показать их вам: вы сможете так же. И даже еще
                  лучше.
               </p>
            </div>

            <div className="mx-28 max-2xl:mx-10 max-xl:mx-0 my-12 max-xl:my-6 py-12 max-xl:py-6 px-11 max-2xl:px-0 border-t border-[#ffffff66]">
               <div className="bg-[#F4F4F4] w-full flex space-x-1 justify-between items-center gap-1 mb-5 p-1 rounded-lg overflow-auto no-scroll">
                  {tabs.map((item: { id: number; title: string }) => (
                     <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className={`${
                           activeTab === item.id
                              ? "text-white"
                              : "hover:text-black/60"
                        } relative w-full z-10 rounded-lg py-4 max-lg:py-3 px-8 max-3xl:px-5 max-lg:px-4 text-sm font-bold text-center text-nowrap text-black outline-sky-400 transition focus-visible:outline-2`}
                        style={{
                           WebkitTapHighlightColor: "transparent",
                        }}
                     >
                        {activeTab === item.id && (
                           <motion.span
                              layoutId="bubble"
                              className="absolute inset-0 z-[-1] mix-blend-difference bg-[#151FE1]"
                              style={{ borderRadius: 8 }}
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

            <button className="bg-white m-auto flex items-center gap-[10px] p-[10px] rounded-[7px]">
               <span className="p-2 rounded-[7px] bg-[#000]">
                  <MdArrowOutward size={20} color="white" className="" />
               </span>
               <span className="text-[20px] font-bold">
                  Посмотреть все отзывы
               </span>
            </button>
         </div>
      </>
   );
};

export default StudentWorks;
