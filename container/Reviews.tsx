"use client";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface ReviewsProps {}

const Reviews: React.FC<ReviewsProps> = () => {
   const [selectedId, setSelectedId] = useState<any>(null);

   useEffect(() => {
      if (selectedId) {
         document.body.style.overflowY = "hidden";
      } else {
         document.body.style.overflowY = "scroll";
      }
   }, [selectedId]);

   return (
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
               {[1, 2, 3, 4].map((item: number) => {
                  return (
                     <motion.div
                        key={item}
                        layoutId={`card-container-${item}`}
                        initial={{ scale: 1 }}
                        onClick={() => setSelectedId(item)}
                        className="min-h-[420px] max-xl:min-h-[370px] max-lg:min-h-[300px] max-md:min-h-[260px] w-full flex rounded-xl p-5 max-lg:p-2 bg-[url('/assets/images/student.jpg')] bg-no-repeat bg-cover bg-center"
                        // style={
                        //    selectedId === item ? { overflow: "hidden" } : {}
                        // }
                     >
                        <motion.div className="mt-auto px-5 max-lg:px-2 py-2 rounded-[4px] bg-white">
                           <motion.p className="text-sm font-medium">
                              Алекс Маметов
                           </motion.p>
                        </motion.div>
                     </motion.div>
                  );
               })}
            </div>

            <AnimatePresence>
               {selectedId && (
                  <motion.div
                     className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-10"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     onClick={() => setSelectedId("")}
                  >
                     {[1, 2, 3, 4].map((item: number) => {
                        return (
                           item === selectedId && (
                              <motion.div
                                 key={item}
                                 layoutId={`card-container-${item}`}
                                 initial={{ scale: 1 }}
                                 animate={{ scale: 1 }}
                                 exit={{ scale: 1 }}
                                 onClick={(e) => e.stopPropagation()}
                                 className="max-w-xs w-full min-h-[420px] flex rounded-xl p-5 max-lg:p-2 bg-[url('/assets/images/student.jpg')] bg-no-repeat bg-cover bg-center"
                              >
                                 <motion.button
                                    onClick={() => setSelectedId("")}
                                    className="mt-auto px-5 max-lg:px-2 py-2 rounded-[4px] bg-white"
                                 >
                                    <motion.p
                                       initial={{ opacity: 0 }}
                                       animate={{ opacity: 1 }}
                                       exit={{ opacity: 0 }}
                                       className="text-sm font-medium"
                                    >
                                       Алекс Маметов
                                    </motion.p>
                                 </motion.button>
                              </motion.div>
                           )
                        );
                     })}
                  </motion.div>
               )}
            </AnimatePresence>

            <div className="w-fit m-auto">
               <button className="bg-white flex items-center gap-2 p-2 rounded-lg">
                  <span className="p-2 rounded-lg bg-[#000]">
                     <MdArrowOutward size={20} color="white" className="" />
                  </span>
                  <span className="text-xl max-xl:text-lg font-bold">
                     Посмотреть все отзывы
                  </span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Reviews;
