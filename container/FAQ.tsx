"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";

interface FAQProps { }

const Accordion = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleAccordion = () => {
      setIsOpen(!isOpen);
   };

   return (
      <div className="bg-[#F4F4F4] h-fit rounded-xl py-6 max-sm:py-3 px-4 max-sm:px-3 overflow-hidden">
         <div className="">
            <div className="flex items-center max-sm:justify-between mb-2 max-md:mb-1">
               <p className="bg-[#E0E0E0] text-[#A3A2AB] text-lg font-bold py-1 px-2 rounded-md">
                  01
               </p>
               <p className="font-bold sm:ml-4 flex-1 max-sm:hidden">
                  Если я совсем ничего не знаю о дизайне, мне подойдет курс?
               </p>
               <button
                  onClick={toggleAccordion}
                  className="bg-white ml-5 p-2 rounded-md"
               >
                  <AiOutlinePlus
                     size={26}
                     color="#6734EE"
                     className={`duration-150 ease-in ${isOpen ? "-rotate-45" : "rotate-0"
                        }`}
                  />
               </button>
            </div>
            <div className="sm:hidden">
               <p className="font-bold sm:ml-4 flex-1">
                  Если я совсем ничего не знаю о дизайне, мне подойдет курс?
               </p>
            </div>
         </div>
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[#A3A2AB] max-sm:text-sm font-bold sm:px-14 overflow-hidden "
               >
                  <p>
                     Конечно. Чтобы начать, достаточно просто владеть
                     компьютером. Мы обучаем с нуля теории и основным
                     дизайнерским программам, чтобы в конце курса вы стали
                     профессионалом.
                  </p>
               </motion.div>
            )}
         </AnimatePresence>
      </div>
   );
};

const FAQ: React.FC<FAQProps> = () => {
   return (
      <section>
         <div className="custom-container my-28 max-lg:my-24 max-sm:my-20">
            <div className="mb-12 max-sm:mb-8">
               <h2 className="md:text-center">
                  Ответы на вопросы
               </h2>
            </div>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-xl:gap-4">
               {[0, 1, 2, 3, 4, 5].map((item: number) => (
                  <Accordion key={item} />
               ))}
            </div>
         </div>
      </section>
   );
};

export default FAQ;
