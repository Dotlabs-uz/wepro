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
import { usePathname, useRouter } from 'next/navigation';

interface ModalProps {
   isOpened: boolean;
   onClose: () => void;
   select: boolean;
   title: string;
   dcr: string;
   type: string;
   admissionId: string;
   courseId: string
}
type Inputs = {
   name: string;
   phone: string;
   courseId: string;
};

const Modal: React.FC<ModalProps> = ({
   isOpened,
   onClose,
   select,
   title,
   admissionId,
   dcr,
   type,
   courseId
}) => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
      reset,
   } = useForm<Inputs>();

   const [disabled, setDisabled] = useState(false);
   const pathName = usePathname()
   const { push } = useRouter()

   const onSubmit: SubmitHandler<Inputs> = (data) => {
      // setDisabled(true);

      console.log(
         {
            ...data,
            type: type,
            origin: pathName,
            project: "wepro",
            language: "",
            courseId: courseId,
            admissionId: admissionId,
         }
      );

      axios
         .post("https://wepro.uz/api/leads",
            {
               ...data,
               type: type,
               origin: pathName,
               project: "wepro",
               language: "",
               courseId: courseId,
               admissionId: "",
            }
         )
         .then((res) => {
            if (res.status == 200 || res.status == 201) {
               console.log(res.data);
               // push("/thanks")
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
                  className="max-w-[550px] w-full mx-auto max-md:mx-3 px-4 py-6 max-sm:py-3 rounded-3xl max-md:rounded-2xl max-sm:rounded-xl max-md:shadow-[0px_4px_20px_0px_#15151526] bg-white"
               >
                  <div className="mb-4 lg:p-7 lg:pb-14 rounded-2xl bg-[url('/images/bg-form-black.jpg')] bg-no-repeat bg-cover max-lg:bg-none">
                     <h2 className="text-white max-lg:text-black text-4xl max-md:text-3xl font-bold">
                        {title}
                     </h2>
                     <p className="text-white max-lg:text-[#A3A2AB] text-[22px] max-2xl:text-xl max-lg:text-lg font-medium">
                        {dcr}
                     </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                     <label className="flex flex-col mb-4">
                        <span
                           className={`text-[#A3A2AB] text-sm mb-2 max-sm:mb-1 ${errors.name && "text-[red]"}`}
                        >
                           Ваши имя и фамилия
                        </span>
                        <input
                           type="text"
                           {...register("name", { required: true })}
                           placeholder="Имя и фамилия"
                           className={`max-sm:text-sm px-5 max-sm:px-3 py-3 rounded-lg bg-[#F4F4F4] ${errors.phone &&
                              "border border-[red] outline-[red] text-[red]"}`}
                        />
                     </label>
                     <label className="flex flex-col mb-4">
                        <span
                           className={`text-[#A3A2AB] text-sm mb-2 max-sm:mb-1 ${errors.phone && "text-[red]"}`}
                        >
                           Номер телефона
                        </span>
                        <input
                           type="text"
                           {...register("phone", { required: true })}
                           defaultValue={"+998 ("}
                           placeholder="Введите номер"
                           className={`max-sm:text-sm px-5 max-sm:px-3 py-3 rounded-lg bg-[#F4F4F4] ${errors.phone &&
                              "border border-[red] outline-[red] text-[red]"}`}
                        />
                        {/* <InputMask
                           placeholder="Введите номер"
                           className="px-5 py-[18px] rounded-[9px] outline-[#151FE1] bg-[#F4F4F4]"
                           mask="+\9\98-(99)-999-99-99"
                         /> */}
                     </label>
                     {select && (
                        <label className="flex flex-col mb-4">
                           <span className={`text-[#A3A2AB] text-sm mb-2 `}>
                              Выберите курс
                           </span>
                           <select
                              {...register("courseId", { required: true })}
                              className={`px-5 py-3 rounded-lg bg-[#F4F4F4]`}
                           >
                              <option value="64b7d1e60c881a3375f9a3fd">
                                 Frontend-программирование
                              </option>
                              <option value="659cdaaaf12fcb2da5b0c62a">Веб-дизайн</option>
                              <option value="64c78eb4a73f738c33b0786a">
                                 Мобильная разработка
                              </option>
                              <option value="6471a7bf0d3305648839d9df">Мобилография</option>
                              <option value="63d1051c1dac7333cb7ddc5c">
                                 Графический дизайн
                              </option>
                              <option value="63c68f42212cd8a88011f2c0">
                                 Интернет-маркетинг
                              </option>
                              <option value="63dcac99d0ffb1abcd58cc61">
                                 Интерьер-дизайн
                              </option>
                              <option value="63be6a91f2f0644aac48b9b2">
                                 Kompyuter savodxonligi
                              </option>
                              <option value="63b937aa6a1ff7eb1a5ba494">
                                 JavaScript
                              </option>
                              <option value="63b7fa7a3daae359bc9656ae">
                                 HTML & CSS
                              </option>
                              <option value="63b5c0807a68ac3685934af9">
                                 Компьютерная грамотность
                              </option>
                           </select>
                        </label>
                     )}
                     <button
                        onClick={errors.name && errors.phone ? onClose : undefined}
                        disabled={disabled}
                        className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white w-full text-lg max-sm:text-base font-bold py-3 border rounded-[7px] duration-150 ease-in"
                     >
                        Отправить заявку
                     </button>
                     <div className="mt-3 mb-4 max-lg:mb-6 py-2 rounded-[7px] bg-[#F4F4F4]">
                        <p className="max-w-[270px] m-auto text-sm text-center text-[#A3A2AB]">
                           Нажимая на кнопку, вы соглашаетесь на обработку
                           персональных данных
                        </p>
                     </div>
                  </form>
                  <div className="flex gap-2 items-center justify-between pt-4 max-sm:pt-4 pb-0 border-t border-[#1515151a]">
                     <div className="">
                        <p className="text-sm max-md:text-xs font-bold text-[#A3A2AB]">
                           Или напишите нам в
                           <span className="text-[#000]"> Telegram</span>:
                        </p>
                     </div>
                     <Link
                        href={"#"}
                        className="flex items-center p-1 rounded-lg bg-[#F4F4F4]"
                     >
                        <span className="bg-white p-2 max-sm:p-1 rounded-lg">
                           <FaTelegram color={"#229ED9"} size={25} />
                        </span>
                        <span className="max-sm:text-sm font-bold mx-2 text-[#A3A2AB]">
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
