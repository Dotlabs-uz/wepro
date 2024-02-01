"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Modal from "./Modal";
import { useState } from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
   const pathName = usePathname();
   const [isOpened, setIsOpened] = useState(false);

   const onOpen = () => {
      setIsOpened(true);
   };
   const onClose = () => {
      setIsOpened(false);
   };

   const links = [
      {
         title: "Главная",
         link: "#",
      },
      {
         title: "Курсы и цены",
         link: "#",
      },
      {
         title: "Отзывы",
         link: "#",
      },
      {
         title: "Запись в группу",
         link: "#",
      },
   ];

   return (
      <>
         <Modal isOpened={isOpened} onClose={onClose} />
         <header
            className={`${
               pathName === "/course"
                  ? "bg-[#020119]"
                  : "border-b border-[#EEEBE0] bg-white"
            }`}
         >
            <div className="custom-container py-4 flex gap-5 items-center justify-between">
               <div className="flex items-center gap-11 max-3xl:gap-8 max-xl:gap-5">
                  <div className="max-w-[120px] max-xl:max-w-[100px] w-full">
                     <Link href={"/"}>
                        {pathName === "/course" ? (
                           <Image
                              src={"/assets/images/logo-white.svg"}
                              width={1000}
                              height={1000}
                              alt="logo"
                           />
                        ) : (
                           <Image
                              src={"/assets/images/logo.svg"}
                              width={1000}
                              height={1000}
                              alt="logo"
                           />
                        )}
                     </Link>
                  </div>
                  <nav className="max-lg:hidden block">
                     <ul className="flex items-center gap-6 max-3xl:gap-4 max-xl:gap-3">
                        {links.map(
                           (
                              item: { title: string; link: string },
                              idx: number
                           ) => {
                              return (
                                 <li key={idx}>
                                    <Link
                                       href={item.link}
                                       className={`max-2xl:text-sm py-2 px-5 max-xl:px-3 rounded-full duration-150 ease-in hover:bg-black ${
                                          pathName === "/course"
                                             ? "text-white"
                                             : "hover:text-white"
                                       }`}
                                    >
                                       {item.title}
                                    </Link>
                                 </li>
                              );
                           }
                        )}
                     </ul>
                  </nav>
               </div>

               <div className="flex items-center gap-7 max-2xl:gap-5 max-sm:gap-3">
                  <p
                     className={`font-bold underline underline-offset-2 cursor-pointer ${
                        pathName === "/course" ? "text-white" : "text-black"
                     }`}
                  >
                     Рус
                  </p>
                  <Link
                     href={"tel:+998 95 500-50-05"}
                     className={`font-bold underline underline-offset-2 ${
                        pathName === "/course" ? "text-white" : "text-black"
                     }`}
                  >
                     <span className={`max-3xl:hidden block`}>
                        +998 95 500-50-05
                     </span>
                     <FaPhoneAlt
                        className="max-3xl:block hidden"
                        size={20}
                        color="black"
                     />
                  </Link>
                  <button
                     onClick={onOpen}
                     className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white max-2xl:text-sm font-bold py-3 px-7 rounded-md border duration-150 ease-in max-lg:hidden block"
                  >
                     Бесплатная консультация
                  </button>
                  <button
                     onClick={onOpen}
                     className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white items-center gap-2 font-bold py-2 max-sm:py-1 px-4 max-sm:px-2 rounded-md border duration-150 ease-in max-lg:flex hidden"
                  >
                     <IoIosMenu />
                     Меню
                  </button>
               </div>
            </div>
         </header>
      </>
   );
};

export default Header;
