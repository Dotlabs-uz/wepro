"use client";
import Image from "next/image";
import Link from "next/link";
import ReactInputMask from "react-input-mask";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
   return (
      <footer className="custom-container max-sm:px-0">
         <div className="md:mb-12 pt-16 max-lg:pt-10 max-md:pt-7 px-28 max-3xl:px-20 max-2xl:px-10 max-lg:px-4 rounded-2xl shadow-[0px_5px_20px_0px_#15151526] bg-[#F5F5F5]">
            <div className="flex md:gap-5 items-center justify-between pb-16 max-lg:pb-10 max-md:pb-7">
               <div className="w-full">
                  <h2 className="text-5xl max-xl:text-4xl max-md:text-2xl font-bold mb-4">
                     Бесплатная консультация
                  </h2>
                  <p className="text-[#A3A2AB] max-w-xl text-[22px] max-2xl:text-xl max-lg:text-lg font-medium mb-5 xl:mr-20">
                     Оставьте свои контакты и получите бесплатную консультацию
                     по курсу, программе и спикерам.
                  </p>
                  <form className="max-w-[515px] max-md:max-w-full grid grid-cols-2 gap-3">
                     <input
                        type="text"
                        placeholder="Ваше имя"
                        className="bg-white p-4 max-md:p-3 rounded-lg border border-[#E0E0E0] outline-[#151FE1] col-span-2"
                     />
                     <ReactInputMask
                        placeholder="Введите номер"
                        className="bg-white p-4 max-md:p-3 rounded-lg border border-[#E0E0E0] outline-[#151FE1] max-sm:col-span-2"
                        mask="+\9\98-(99)-999-99-99"
                     />
                     <input
                        type="text"
                        placeholder="Откуда о нас узнали?"
                        className="bg-white p-4 max-md:p-3 rounded-lg border border-[#E0E0E0] outline-[#151FE1] max-sm:col-span-2"
                     />
                     <button className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white text-lg font-bold py-4 border rounded-[7px] col-span-2 duration-150 ease-in">
                        Отправить заявку
                     </button>
                  </form>
               </div>
               <div className="max-w-md max-2xl:max-w-xs max-lg:max-w-60 max-md:hidden">
                  <Image
                     src={"/assets/images/tick.svg"}
                     width={1000}
                     height={1000}
                     alt="tick"
                  />
               </div>
            </div>
            <div className="grid grid-cols-4 max-3xl:grid-cols-3 max-lg:grid-cols-2 gap-5 py-16 max-lg:py-10 max-md:py-7 border-t border-[#1515151a]">
               <div className="max-3xl:col-span-3 max-lg:col-span-2 max-3xl:mb-10 max-sm:m-0">
                  <div className="max-w-[160px] mb-4">
                     <Image
                        src={"/assets/images/logo.svg"}
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </div>
                  <div className="max-w-xs">
                     <p className="font-bold text-[#A3A2AB]">
                        Профессиональное обучение профессиям будущего
                     </p>
                  </div>
               </div>
               <div className="">
                  <h3 className="text-lg font-bold mb-5 max-md:mb-2">Курсы:</h3>
                  <ul className="text-[#A3A2AB] font-bold">
                     <li className="mb-1">
                        <Link href={"#"}>Frontend-программирование</Link>
                     </li>
                     <li className="mb-1">
                        <Link href={"#"}>Мобильная разработка</Link>
                     </li>
                     <li className="mb-1">
                        <Link href={"#"}>SMM</Link>
                     </li>
                     <li>
                        <Link href={"#"}>Графический дизайн</Link>
                     </li>
                  </ul>
               </div>
               <div className="">
                  <h3 className="text-lg font-bold mb-5 max-md:mb-2">
                     Социальные сети:
                  </h3>
                  <ul className="text-[#A3A2AB] font-bold">
                     <li className="mb-1">
                        <Link href={"#"}>Instagram</Link>
                     </li>
                     <li>
                        <Link href={"#"}>Telegram</Link>
                     </li>
                     <li>
                        <Link href={"#"}>YouTube</Link>
                     </li>
                     <li>
                        <Link href={"#"}>LinkedIn</Link>
                     </li>
                  </ul>
               </div>
               <div className="max-lg:col-span-2">
                  <h3 className="text-lg font-bold mb-5 max-md:mb-2">
                     Контакты:
                  </h3>
                  <ul className="text-[#A3A2AB] font-bold">
                     <li className="text-black text-2xl max-md:text-xl font-bold mb-5 max-md:mb-2">
                        <a href={"tel:+998 (90) 197-71-00"}>
                           +998 (90) 197-71-00
                        </a>
                     </li>
                     <li className="mb-1">
                        <Link href={"#"}>ул. Буюк Ипак Йули 52, Самарканд</Link>
                     </li>
                     <li>
                        <Link href={"#"}>ул. Мирзо Улугбека, 35</Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="py-8 max-md:py-6 border-t border-[#1515151a]">
               <p className="font-bold">MChJ “Wepro” © 2023</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
