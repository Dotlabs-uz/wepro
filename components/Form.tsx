"use client";
import Link from "next/link";
import { FaTelegram } from "react-icons/fa";
import InputMask from "react-input-mask";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
   return (
      <div className="max-w-[660px] w-full mx-auto px-5 py-6 rounded-[20px] max-md:shadow-[0px_4px_20px_0px_#15151526] bg-white">
         <div className="mb-5 p-7 pb-20 max-md:pb-12 rounded-2xl bg-[url('/assets/images/bg-form-black.jpg')] bg-no-repeat bg-cover">
            <h2 className="text-white text-5xl max-xl:text-4xl max-md:text-3xl font-bold">
               Записаться на курс
            </h2>
            <p className="text-white text-[22px] max-2xl:text-xl max-lg:text-lg font-medium">
               Оставьте заявку и получите возможность попасть на открытый урок
               абсолютно бесплатно.
            </p>
         </div>
         <form>
            <label className="flex flex-col mb-6">
               <span className="text-[#A3A2AB] text-[15px] mb-[11px]">
                  Ваши имя и фамилия
               </span>
               <input
                  type="text"
                  placeholder="Имя и фамилия"
                  className="px-5 py-[18px] rounded-[9px] outline-[#151FE1] bg-[#F4F4F4]"
               />
            </label>
            <label className="flex flex-col mb-6">
               <span className="text-[#A3A2AB] text-[15px] mb-[11px]">
                  Номер телефона
               </span>
               <input
                  type="text"
                  defaultValue={"+998 ("}
                  placeholder="Введите номер"
                  className="px-5 py-[18px] rounded-[9px] outline-[#151FE1] bg-[#F4F4F4]"
               />
               {/* <InputMask
                  placeholder="Введите номер"
                  className="px-5 py-[18px] rounded-[9px] outline-[#151FE1] bg-[#F4F4F4]"
                  mask="+\9\98-(99)-999-99-99"
               /> */}
            </label>
            <button className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white w-full text-[18px] font-bold py-[18px] border rounded-[7px] duration-150 ease-in">
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
