"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

// import { Locale } from "@/i18n.config";
// import { getDictionary } from "@/lib/dictionary";
// import localeSwitcher from "/locale-switcher";

interface HeaderProps { }

const Header = () => {
   // const { navigation } = await getDictionary(lang);
   const pathName = usePathname();
   const [isOpened, setIsOpened] = useState(false);
   const [menu, setMenu] = useState(false);

   const onOpen = () => {
      setIsOpened(true);
   };
   const onClose = () => {
      setIsOpened(false);
   };
   const HandelMenu = () => {
      setMenu(!menu);
   };
   console.log(pathName);

   const links = [
      {
         title: "Главная",
         link: `${pathName.slice(0, 3)}`,
      },
      {
         title: "Курсы и цены",
         link: `${pathName.slice(0, 3)}/courses`,
      },
      {
         title: "Отзывы",
         link: `${pathName.slice(0, 3)}/reviews`,
      },
      {
         title: "Запись в группу",
         link: `${pathName.slice(0, 3)}/groups`,
      },
   ];

   useEffect(() => {
      if (menu) {
         document.body.style.overflowY = "hidden";
      } else {
         document.body.style.overflowY = "scroll";
      }
   }, [menu]);

   return (
      <>
         <Modal
            isOpened={isOpened}
            onClose={onClose}
            select={false}
            title={"Заявка на консультацию"}
            dcr={""}
         />
         <header
            className={`relative z-50 ${pathName.includes("/ru/course/") || pathName.includes("/uz/course/")
               ? "bg-[#020119]"
               : "border-b border-[#EEEBE0] bg-white"
               }`}
         >
            <div className="custom-container py-4 flex gap-4 items-center justify-between">
               <div className="flex items-center gap-11 max-3xl:gap-8 max-xl:gap-1">
                  <div className="max-w-[120px] max-xl:max-w-[100px] w-full">
                     <Link href={"/"}>
                        {pathName.includes("/ru/course/") || pathName.includes("/uz/course/") ? (
                           <Image
                              src={"/images/logo-white.svg"}
                              width={1000}
                              height={1000}
                              alt="logo"
                           />
                        ) : (
                           <Image
                              src={"/images/logo.svg"}
                              width={1000}
                              height={1000}
                              alt="logo"
                           />
                        )}
                     </Link>
                  </div>
                  <nav className="max-lg:hidden block">
                     <ul className="flex items-center gap-5 max-3xl:gap-3 max-xl:gap-1">
                        {links.map(
                           (
                              item: { title: string; link: string },
                              idx: number
                           ) => {
                              return (
                                 <li key={idx}>
                                    <Link
                                       href={item.link}
                                       className={`max-2xl:text-sm text-nowrap py-2 px-4 max-xl:px-3 rounded-full duration-150 ease-in hover:bg-black ${pathName.includes("/ru/course/") || pathName.includes("/uz/course/")
                                          ? "text-white"
                                          : "hover:text-white"
                                          } ${pathName === item.link
                                             ? "bg-black text-white"
                                             : ""
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

               <div className="flex items-center gap-7 max-2xl:gap-5 max-xl:gap-3">
                  <p
                     className={`font-bold underline underline-offset-2 cursor-pointer ${pathName.includes("/ru/course/") || pathName.includes("/uz/course/") ? "text-white" : "text-black"
                        }`}
                  >
                     Рус
                  </p>
                  <Link
                     href={"tel:+998 95 500-50-05"}
                     className={`font-bold underline underline-offset-2 ${pathName.includes("/ru/course/") || pathName.includes("/uz/course/") ? "text-white" : "text-black"
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
                     className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white max-2xl:text-sm font-bold py-3 px-6 max-3xl:px-3 rounded-md border duration-150 ease-in max-lg:hidden block"
                  >
                     Бесплатная консультация
                  </button>
                  <button
                     onClick={HandelMenu}
                     className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white items-center gap-2 font-bold py-2 max-sm:py-1 px-4 max-sm:px-2 rounded-md border duration-150 ease-in max-lg:flex hidden"
                  >
                     {menu ? <IoClose size={20} /> : <IoIosMenu size={20} />}
                     Меню
                  </button>
               </div>
            </div>
         </header>

         <AnimatePresence>
            {menu && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full fixed z-40 top-0 left-0 pt-20 max-lg:block hidden px-4 bg-white"
               >
                  <ul>
                     {links.map(
                        (
                           item: { title: string; link: string },
                           idx: number
                        ) => {
                           return (
                              <li
                                 key={idx}
                                 onClick={() => setMenu(false)}
                                 className="text-xl font-bold mb-2"
                              >
                                 <Link href={item.link}>{item.title}</Link>
                              </li>
                           );
                        }
                     )}
                  </ul>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};

export default Header;
