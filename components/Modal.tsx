"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

import { BiCloset } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import ReactInputMask from "react-input-mask";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";

interface ModalProps {
   isOpened: boolean;
   onClose: () => void;
   select: boolean;
   title: string;
   dcr: string;
}
type Inputs = {
   name: string;
   phone: string;
   additionally: string;
};

const Modal: React.FC<ModalProps> = ({
   isOpened,
   onClose,
   select,
   title,
   dcr,
}) => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
      reset,
   } = useForm<Inputs>();
   const [disabled, setDisabled] = useState(false);

   const onSubmit: SubmitHandler<Inputs> = (data) => {
      setDisabled(true);
      axios
         .post("https://wepro.uz/api/leads", data)
         .then((res) => {
            if (res.status == 200 || res.status == 201) {
               console.log(res);
               reset({
                  name: "",
                  phone: "",
               });
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };

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
               className={`w-full h-full flex items-center justify-center fixed z-[100] top-0 left-0 backdrop-blur-sm bg-[#010018E5]`}
               onClick={onClose}
            >
               {/* <button
                  onClick={onClose}
                  className="absolute top-10 right-10 text-5xl"
               >
                  <IoClose color="white" />
               </button> */}
               <div
                  onClick={(e) => e.stopPropagation()}
                  className="max-w-[660px] w-full mx-auto max-md:mx-3 px-4 py-6 max-sm:py-3 rounded-3xl max-md:rounded-2xl max-sm:rounded-xl max-md:shadow-[0px_4px_20px_0px_#15151526] bg-white"
               >
                  <div className="mb-5 lg:p-7 lg:pb-20 rounded-2xl bg-[url('/images/bg-form-black.jpg')] bg-no-repeat bg-cover max-lg:bg-none">
                     <h2 className="text-white max-lg:text-black text-5xl max-xl:text-4xl max-md:text-3xl font-bold">
                        {title}
                     </h2>
                     <p className="text-white max-lg:text-[#A3A2AB] text-[22px] max-2xl:text-xl max-lg:text-lg font-medium">
                        {dcr}
                     </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <label className="flex flex-col mb-6 max-sm:mb-4">
                        <span
                           className={`text-[#A3A2AB] text-sm mb-2 max-sm:mb-1 ${errors.name && "text-[red]"
                              }`}
                        >
                           Ваши имя и фамилия
                        </span>
                        <input
                           type="text"
                           {...register("name", { required: true })}
                           placeholder="Имя и фамилия"
                           className={`max-sm:text-sm px-5 max-sm:px-3 py-4 max-sm:py-3 rounded-lg bg-[#F4F4F4] ${errors.phone &&
                              "border border-[red] outline-[red] text-[red]"
                              }`}
                        />
                     </label>
                     <label className="flex flex-col mb-6 max-sm:mb-4">
                        <span
                           className={`text-[#A3A2AB] text-sm mb-2 max-sm:mb-1 ${errors.phone && "text-[red]"
                              }`}
                        >
                           Номер телефона
                        </span>
                        <input
                           type="text"
                           {...register("phone", { required: true })}
                           defaultValue={"+998 ("}
                           placeholder="Введите номер"
                           className={`max-sm:text-sm px-5 max-sm:px-3 py-4 max-sm:py-3 rounded-lg bg-[#F4F4F4] ${errors.phone &&
                              "border border-[red] outline-[red] text-[red]"
                              }`}
                        />
                        {/* <InputMask
                  placeholder="Введите номер"
                  className="px-5 py-[18px] rounded-[9px] outline-[#151FE1] bg-[#F4F4F4]"
                  mask="+\9\98-(99)-999-99-99"
               /> */}
                     </label>
                     {select && (
                        <label className="flex flex-col mb-6">
                           <span className={`text-[#A3A2AB] text-sm mb-2 `}>
                              Выберите курс
                           </span>
                           <select
                              {...register("additionally", { required: true })}
                              className={`px-5 py-[18px] rounded-[9px] bg-[#F4F4F4]`}
                           >
                              <option value="Frontend-разработка">
                                 Frontend-программирование
                              </option>
                              <option value="Веб-дизайн">Веб-дизайн</option>
                              <option value="Мобильная разработка">
                                 Мобильная разработка
                              </option>
                              <option value="Мобилография">Мобилография</option>
                              <option value="Графический дизайн">
                                 Графический дизайн
                              </option>
                           </select>
                        </label>
                     )}
                     <button
                        disabled={disabled}
                        className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white w-full text-lg max-sm:text-base font-bold py-4 max-sm:py-3 border rounded-[7px] duration-150 ease-in"
                     >
                        Отправить заявку
                     </button>
                     <div className="mt-3 mb-7 max-lg:mb-6 py-2 rounded-[7px] bg-[#F4F4F4]">
                        <p className="max-w-[270px] m-auto text-sm text-center text-[#A3A2AB]">
                           Нажимая на кнопку, вы соглашаетесь на обработку
                           персональных данных
                        </p>
                     </div>
                  </form>
                  <div className="flex gap-2 items-center justify-between pt-7 max-sm:pt-4 pb-1 border-t border-[#1515151a]">
                     <div className="">
                        <p className="max-md:text-xs font-bold text-[#A3A2AB]">
                           Или напишите нам в
                           <span className="text-[#000]"> Telegram</span>:
                        </p>
                     </div>
                     <Link
                        href={"#"}
                        className="flex items-center p-2 max-sm:p-1 rounded-lg bg-[#F4F4F4]"
                     >
                        <span className="bg-white p-2 max-sm:p-1 rounded-lg">
                           <FaTelegram color={"#229ED9"} size={25} />
                        </span>
                        <span className="text-xl max-sm:text-sm font-bold mx-2 text-[#A3A2AB]">
                           t.me/weprouz
                        </span>
                     </Link>
                  </div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
};

export default Modal;
