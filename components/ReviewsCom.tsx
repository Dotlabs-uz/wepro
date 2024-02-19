"use client";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface ReviewsProps { }

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
      <>
         <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((item: number) => {
               return (
                  <motion.div
                     key={item}
                     layoutId={`card-container-${item}`}
                     onClick={() => setSelectedId(item)}
                     className="min-h-[400px] max-2xl:min-h-[370px] max-lg:min-h-[300px] max-md:min-h-[260px] w-full flex rounded-xl p-5 max-lg:p-2 cursor-pointer bg-[url('/images/student.jpg')] bg-no-repeat bg-cover bg-center"
                  >
                     <motion.div className="mt-auto px-5 max-lg:px-2 py-2 max-sm:py-1.5 rounded-[4px] bg-white">
                        <motion.p className="text-sm max-sm:text-xs font-medium">
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
                  className="fixed z-[100] inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex items-center justify-center px-10"
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
                              initial={{ scale: 1, opacity: 1 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 1, opacity: 1 }}
                              onClick={(e) => e.stopPropagation()}
                              className="max-w-xs w-full min-h-[420px] flex rounded-xl p-5 max-lg:p-2 bg-[url('/images/student.jpg')]  bg-no-repeat bg-cover bg-center"
                           >
                              <motion.div className="mt-auto px-5 max-lg:px-2 py-2 rounded-[4px] bg-white">
                                 <motion.p className="text-sm font-medium">
                                    Алекс Маметов
                                 </motion.p>
                              </motion.div>
                           </motion.div>
                        )
                     );
                  })}
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};

export default Reviews;
