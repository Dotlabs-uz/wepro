import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   return (
      <header className="border-b border-[#EEEBE0]">
         <div className="custom-container py-4 flex gap-5 items-center justify-between">
            <div className="flex items-center gap-11 max-3xl:gap-8 max-xl:gap-5">
               <div className="max-w-[120px] max-xl:max-w-[100px] w-full">
                  <Link href={"/"}>
                     <Image
                        src={"/assets/images/logo.svg"}
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </Link>
               </div>
               <nav className="max-lg:hidden block">
                  <ul className="flex items-center gap-6 max-3xl:gap-4 max-xl:gap-3">
                     <li>
                        <Link
                           href={"#"}
                           className="max-2xl:text-sm py-2 px-5 max-xl:px-3 rounded-full duration-150 ease-in bg-black hover:bg-black text-white hover:text-white"
                        >
                           Главная
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={"#"}
                           className="max-2xl:text-sm py-2 px-5 max-xl:px-3 rounded-full duration-150 ease-in hover:bg-black hover:text-white"
                        >
                           Курсы и цены
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={"#"}
                           className="max-2xl:text-sm py-2 px-5 max-xl:px-3 rounded-full duration-150 ease-in hover:bg-black hover:text-white"
                        >
                           Отзывы
                        </Link>
                     </li>
                     <li>
                        <Link
                           href={"#"}
                           className="max-2xl:text-sm py-2 px-5 max-xl:px-3 rounded-full duration-150 ease-in hover:bg-black hover:text-white"
                        >
                           Запись в группу
                        </Link>
                     </li>
                  </ul>
               </nav>
            </div>

            <div className="flex items-center gap-7 max-2xl:gap-5 max-sm:gap-3">
               <p className="font-bold underline underline-offset-2 cursor-pointer">
                  Рус
               </p>
               <Link
                  href={"tel:+998 95 500-50-05"}
                  className="font-bold underline underline-offset-2"
               >
                  <span className="max-3xl:hidden block">
                     +998 95 500-50-05
                  </span>
                  <FaPhoneAlt
                     className="max-3xl:block hidden"
                     size={20}
                     color="black"
                  />
               </Link>
               <button className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white max-2xl:text-sm font-bold py-3 px-7 rounded-md border duration-150 ease-in max-lg:hidden block">
                  Бесплатная консультация
               </button>
               <button className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white items-center gap-2 font-bold py-2 max-sm:py-1 px-4 max-sm:px-2 rounded-md border duration-150 ease-in max-lg:flex hidden">
                  <IoIosMenu />
                  Меню
               </button>
            </div>
         </div>
      </header>
   );
};

export default Header;
