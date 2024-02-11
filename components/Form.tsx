"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import InputMask from "react-input-mask";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaTelegram } from "react-icons/fa";

interface FormProps {
}
type Inputs = {
   name: string;
   phone: string;
   additionally: string;
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

   return (
      <div
         onClick={(e) => e.stopPropagation()}
         className="max-w-[660px] w-full mx-auto px-5 py-6 rounded-[20px] max-md:shadow-[0px_4px_20px_0px_#15151526] bg-white"
      >
         <div className="mb-5 p-7 pb-20 max-md:pb-12 rounded-2xl bg-[url('/images/bg-form-black.jpg')] bg-no-repeat bg-cover">
            <h2 className="text-white text-5xl max-xl:text-4xl max-md:text-3xl font-bold">
               Записаться на курс
            </h2>
            <p className="text-white text-[22px] max-2xl:text-xl max-lg:text-lg font-medium">
               Оставьте заявку и получите возможность попасть на открытый урок
               абсолютно бесплатно.
            </p>
         </div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label className="flex flex-col mb-6">
               <span
                  className={`text-[#A3A2AB] text-[15px] mb-[11px] ${
                     errors.name && "text-[red]"
                  }`}
               >
                  Ваши имя и фамилия
               </span>
               <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Имя и фамилия"
                  className={`px-5 py-[18px] rounded-[9px] bg-[#F4F4F4] ${
                     errors.phone &&
                     "border border-[red] outline-[red] text-[red]"
                  }`}
               />
            </label>
            <label className="flex flex-col mb-6">
               <span
                  className={`text-[#A3A2AB] text-[15px] mb-[11px] ${
                     errors.phone && "text-[red]"
                  }`}
               >
                  Номер телефона
               </span>
               <input
                  type="text"
                  {...register("phone", { required: true })}
                  defaultValue={"+998 ("}
                  placeholder="Введите номер"
                  className={`px-5 py-[18px] rounded-[9px] bg-[#F4F4F4] ${
                     errors.phone &&
                     "border border-[red] outline-[red] text-[red]"
                  }`}
               />
               {/* <InputMask
                  placeholder="Введите номер"
                  className="px-5 py-[18px] rounded-[9px] outline-[#151FE1] bg-[#F4F4F4]"
                  mask="+\9\98-(99)-999-99-99"
               /> */}
            </label>
           
            <button
               disabled={disabled}
               className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white w-full text-[18px] font-bold py-[18px] border rounded-[7px] duration-150 ease-in"
            >
               Отправить заявку
            </button>
            <div className="mt-[12px] mb-[30px] py-[10px] rounded-[7px] bg-[#F4F4F4]">
               <p className="max-w-[270px] m-auto text-sm text-[#A3A2AB]">
                  Нажимая на кнопку, вы соглашаетесь на обработку персональных
                  данных
               </p>
            </div>
         </form>
         <div className="flex items-center justify-between pt-[30px] pb-1 border-t border-[#1515151a]">
            <div className="">
               <p className="max-md:text-xs font-bold text-[#A3A2AB]">
                  Или напишите нам в
                  <span className="text-[#000]"> Telegram</span>:
               </p>
            </div>
            <Link
               href={"#"}
               className="flex items-center gap-2 p-2 rounded-lg bg-[#F4F4F4]"
            >
               <span className="bg-white p-2 rounded-lg">
                  <FaTelegram color={"#229ED9"} size={25} />
               </span>
               <span className="text-xl max-sm:text-base font-bold text-[#A3A2AB]">
                  t.me/weprouz
               </span>
            </Link>
         </div>
      </div>
   );
};

export default Form;
