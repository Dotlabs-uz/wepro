"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { BiCloset } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

interface ModalProps {
   isOpened: boolean;
   onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpened, onClose }) => {
   useEffect(() => {
      if (isOpened) {
         document.body.style.overflowY = "hidden";
      } else {
         document.body.style.overflowY = "scroll";
      }
   }, [isOpened]);

   return (
      <AnimatePresence>
         {isOpened && (
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               className={`w-full h-full flex items-center justify-center fixed z-50 top-0 left-0 backdrop-blur-sm bg-black/30`}
               onClick={onClose}
            >
               <button
                  onClick={onClose}
                  className="absolute top-10 right-10 text-5xl"
               >
                  <IoClose color="white" />
               </button>
               <div
                  className="max-w-xl w-full p-10 rounded-lg bg-white"
                  onClick={(e) => e.stopPropagation()}
               >
                  <div className="max-w-[160px] mb-3">
                     <Image
                        src={"/assets/images/logo.svg"}
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </div>
                  <div className="mb-5">
                     <h3 className="text-2xl text-black font-semibold">
                        Заявка на консультацию
                     </h3>
                  </div>

                  <form>
                     <label className="flex flex-col mb-3">
                        <span className="text-[#A3A2AB] text-[15px] mb-1">
                           Ваши имя и фамилия
                        </span>
                        <input
                           type="text"
                           placeholder="Имя и фамилия"
                           className="px-5 py-[18px] rounded-[9px] bg-[#F4F4F4]"
                        />
                     </label>
                     <label className="flex flex-col mb-3">
                        <span className="text-[#A3A2AB] text-[15px] mb-1">
                           Ваши имя и фамилия
                        </span>
                        <input type="text" placeholder="Имя и фамилия" />
                     </label>
                     <button className="w-full py-4 text-xl rounded-lg border-2 duration-150 ease-in text-white hover:text-[#151FE1] bg-[#151FE1] hover:border-[#151FE1] hover:bg-transparent">
                        Отправить заявку
                     </button>
                  </form>
                  <div className="mt-4 py-3 border-t border-gray-400">
                     <p className="text-gray-400 text-sm">
                        Пожалуйста, убедитесь, что правильно ввели данные.
                     </p>
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default Modal;
