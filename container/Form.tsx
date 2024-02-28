"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import InputMask from "react-input-mask";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation";
import moment from "moment";

interface FormProps {
   courseId: string
}
type Inputs = {
   name: string;
   phone: string;
   type: string
   origin: string
   project: string
   language: string
   time: string
   courseId: string | undefined
   admissionId: string | undefined
};

const Form: React.FC<FormProps> = () => {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
      reset,
   } = useForm<Inputs>();
   const [disabled, setDisabled] = useState(false);
   const pathname = usePathname()
   const { push } = useRouter()

   const onSubmit: SubmitHandler<Inputs> = (data) => {
      setDisabled(true);
      let formData = {
         ...data,
         type: "classic",
         origin: pathname,
         project: "wepro",
         language: pathname.split("/")[1],
         time: moment().format()
      }

      axios.post("https://wepro.uz/api/leads", formData)
         .then((res) => {
            if (res.status == 200 || res.status == 201) {
               console.log(res);
               push("/thanks")
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

   return (
      <section>
         <motion.div className="mx-auto py-28 max-lg:py-14 max-sm:py-0 rounded-[20px] md:bg-[url('/images/bg-form.jpg')] bg-no-repeat bg-cover">
            <div
               onClick={(e) => e.stopPropagation()}
               className="max-w-[660px] w-full mx-auto px-4 py-6 max-sm:py-3 rounded-3xl max-lg:rounded-2xl max-md:shadow-[0px_4px_20px_0px_#15151526] bg-white"
            >
               <div className="mb-5 p-7 pb-20 max-md:pb-12 max-sm:p-4 rounded-2xl bg-[url('/images/bg-form-black.jpg')] bg-no-repeat bg-cover">
                  <h2 className="text-white text-5xl max-xl:text-4xl max-md:text-3xl max-sm:text-2xl font-bold">
                     Записаться на курс
                  </h2>
                  <p className="text-white text-xl max-2xl:text-xl max-lg:text-lg max-sm:text-base max-sm:leading-6 font-medium">
                     Оставьте заявку и получите возможность попасть на открытый урок
                     абсолютно бесплатно.
                  </p>
               </div>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="flex flex-col mb-6 max-sm:mb-4">
                     <span
                        className={`text-[#A3A2AB] text-sm mb-2 max-sm:mb-1 ${errors.name && "text-[red]"}`}
                     >
                        Ваши имя и фамилия
                     </span>
                     <input
                        type="text"
                        {...register("name", { required: true, pattern: /^[а-яА-ЯёЁa-zA-Z]+$/ })}
                        placeholder="Имя и фамилия"
                        className={`max-sm:text-sm px-5 max-sm:px-3 py-3 rounded-lg outline-[#F4F4F4] border border-[#F4F4F4] bg-[#F4F4F4] ${errors.phone && "border-[red] outline-[red]"}`}
                     />
                  </label>
                  <label className="flex flex-col mb-6 max-sm:mb-4">
                     <span
                        className={`text-[#A3A2AB] text-sm mb-2 max-sm:mb-1 ${errors.phone && "text-[red]"}`}
                     >
                        Номер телефона
                     </span>
                     <InputMask
                        type="text"
                        placeholder="+998-(__)-___-__-__"
                        {...register("phone", {
                           pattern: /^\+\d{3}-\(\d{2}\)-\d{3}-\d{2}-\d{2}$/,
                           required: true
                        })}
                        className={`max-sm:text-sm px-5 max-sm:px-3 py-3 rounded-lg outline-[#F4F4F4] border border-[#F4F4F4] bg-[#F4F4F4] ${errors.phone && "border-[red] outline-[red]"}`}
                        mask="+\9\98-(99)-999-99-99"
                     />
                  </label>

                  <button
                     disabled={disabled}
                     className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white w-full text-lg max-sm:text-base font-bold py-4 max-sm:py-3 border rounded-[7px] duration-150 ease-in"
                  >
                     Отправить заявку
                  </button>
                  <div className="mt-3 mb-7 max-sm:mb-4 py-2 rounded-lg text-center bg-[#F4F4F4]">
                     <p className="max-w-[270px] m-auto text-sm text-[#A3A2AB]">
                        Нажимая на кнопку, вы соглашаетесь на обработку персональных
                        данных
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
      </section>
   );
};

export default Form;
