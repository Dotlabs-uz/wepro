"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

interface BranchProps { }

const Branch: React.FC<BranchProps> = () => {
   const tabs = [
      {
         id: 0,
         title: "Первый филиал",
      },
      {
         id: 1,
         title: "Второй филиал",
      },
   ];
   let [active, setActive] = useState(tabs[0].id);

   return (
      <>
         <div className="custom-container my-28 max-lg:my-24 max-sm:my-20">
            <div className="flex max-lg:flex-col items-center gap-20 max-2xl:gap-10 max-lg:gap-7 max-sm:gap-4 mb-11 max-lg:mb-7 max-sm:mb-4 mx-28 max-2xl:mx-0 max-xl:mx-0">
               <div className="w-1/2 max-lg:w-full">
                  <h2 className="text-5xl max-2xl:text-4xl leading-normal font-bold mb-4">
                     Выберите филиал
                  </h2>
                  <p className="mb-8 max-lg:mb-4 text-xl max-md:text-lg font-medium max-xs:leading-snug text-[#A3A2AB]">
                     На данный момент оперируют 2 филиала в самых удобных
                     локациях Самарканде. Все филиалы оборудованы передовыми
                     технологиями, созданы лучшие условия для обучения на
                     высоком уровне.
                  </p>

                  <div className="bg-[#F4F4F4] w-full flex space-x-1 justify-between items-center gap-1 mb-5 p-1 rounded-lg overflow-auto no-scroll">
                     {tabs.map((tab: { id: number; title: string }) => (
                        <button
                           key={tab.id}
                           onClick={() => setActive(tab.id)}
                           className={`${active === tab.id
                              ? "text-white"
                              : "hover:text-black/60"
                              } relative w-full z-10 rounded-lg py-4 max-lg:py-3 px-8 max-3xl:px-5 max-lg:px-4 text-sm font-bold text-center text-nowrap text-black outline-sky-400 transition focus-visible:outline-2`}
                           style={{
                              WebkitTapHighlightColor: "transparent",
                           }}
                        >
                           {active === tab.id ? (
                              <motion.div
                                 layoutId="bubble2"
                                 className="absolute inset-0 z-[-1] mix-blend-difference bg-[#151FE1]"
                                 style={{ borderRadius: 8 }}
                                 transition={{
                                    type: "spring",
                                    bounce: 0.2,
                                    duration: 0.6,
                                 }}
                              />
                           ) : null}
                           {tab.title}
                        </button>
                     ))}
                  </div>

                  <div className="flex items-center gap-4">
                     <div className="">
                        <FaLocationDot color="#151FE1" size={73} className="" />
                     </div>
                     <div className="">
                        <p className="text-[28px] max-sm:text-2xl font-bold">
                           Мирзо Улугбека, 12
                        </p>
                        <p>Ориентир: Trump Tower</p>
                     </div>
                  </div>
               </div>
               <div className="w-1/2 max-lg:w-full min-h-[400px] max-xl:min-h-[300px] h-full flex p-5 max-lg:p-3 rounded-2xl bg-[url('/images/company.jpg')] bg-cover bg-left bg-no-repeat">
                  <button className="bg-white h-fit mt-auto p-3 rounded-[13px]">
                     Смотреть в галерее
                  </button>
               </div>
            </div>
            <div className="w-fit m-auto max-sm:w-full">
               <button className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white max-sm:w-full py-4 px-[94px] text-[20px] max-sm:text-base font-bold rounded-[7px] border duration-150 ease-in">
                  Оставить заявку
               </button>
            </div>
         </div>
      </>
   );
};

export default Branch;
