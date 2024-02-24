"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import LinkPages from "./children/LinkPages";
import Modal from "./Modal";

import { AnimatePresence, motion } from "framer-motion";

import { IoIosMenu, IoLogoWhatsapp } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Header = () => {
   const pathName = usePathname();
   const [isOpened, setIsOpened] = useState(false);
   const [menu, setMenu] = useState(false);
   const links = [
      {
         title: "Главная",
         link: `${pathName.slice(0, 3)}`,
         img: "/images/pages/home.png"
      },
      {
         title: "Курсы и цены",
         link: `${pathName.slice(0, 3)}/courses`,
         img: "/images/pages/reviews.png"
      },
      {
         title: "Отзывы",
         link: `${pathName.slice(0, 3)}/reviews`,
         img: "/images/pages/home.png"
      },
      {
         title: "Запись в группу",
         link: `${pathName.slice(0, 3)}/groups`,
         img: "/images/pages/reviews.png"
      },
   ];

   // const { i18n } = useTranslation()
   // const router = useRouter()

   // const handleChange = (locale: any) => {
   // router.push(router.pathname, router.asPath, { locale })
   // }

   const onOpen = () => {
      setIsOpened(true);
   };
   const onClose = () => {
      setIsOpened(false);
   };
   const HandelMenu = () => {
      setMenu(!menu);
   };
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
            dcr={""}
            admissionId={""}
            courseId={""}
            title={"Заявка на консультацию"}
            type={"consultation"}
         />

         <motion.header
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative z-[56] m-auto duration-300 ease-in 
               ${pathName.includes("/course/") ? menu ? "bg-[#010018f1]" : "bg-[#020119]" : ""}
               ${menu ? "border-transparent" : ""}`}
         >
            <motion.div className={`custom-container w-full relative duration-300 ease-in ${menu ? "top-2" : "top-0"}`}>
               <motion.div className={`w-full flex gap-4 items-center justify-between py-4 px-8 max-lg:px-5 max-md:px-3 duration-300 ease-in rounded-xl ${menu ? "border-transparent shadow-lg" : ""}
               ${pathName.includes("/course/")
                     ? "bg-[#020119]"
                     : "bg-white"
                  }`}
               >
                  <div className="flex items-center gap-11 max-3xl:gap-8 max-xl:gap-1">
                     <div className="max-w-[120px] max-xl:max-w-[100px] w-full">
                        <Link href={"/"} onClick={() => setMenu(false)}>
                           {pathName.includes("/course/") || pathName.includes("/uz/course/") ? (
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
                  </div>

                  <div className="">
                     <button
                        onClick={HandelMenu}
                        className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white flex items-center gap-2 font-bold py-2 max-sm:py-1 px-4 max-sm:px-2 rounded-md border duration-150 ease-in"
                     >
                        {menu ? <IoClose size={20} /> : <IoIosMenu size={20} />}
                        Меню
                     </button>
                  </div>

                  <div className="flex items-center gap-7 max-2xl:gap-5 max-xl:gap-3">
                     <button className={`font-bold underline underline-offset-2 cursor-pointer ${pathName.includes("/course/") ? "text-white" : "text-black"}`}>
                        Рус
                     </button>
                     <button
                        onClick={onOpen}
                        className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white max-2xl:text-sm font-bold py-3 px-6 max-3xl:px-3 rounded-md border duration-150 ease-in max-lg:hidden block">
                        Бесплатная консультация
                     </button>
                  </div>
               </motion.div>
            </motion.div>

            <AnimatePresence>
               {menu && (
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     className={`w-full h-full fixed z-[-1] top-0 left-0 backdrop-blur-sm ${pathName.includes("/course/") ? "bg-white/10" : "bg-[#010018E5]"}`}
                  >
                     <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="custom-container h-screen overflow-auto no-scroll m-auto pt-24 pb-5 grid grid-cols-10 gap-2.5"
                     >
                        <div className={`col-span-6 max-2xl:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-0 rounded-2xl ${pathName.includes("/course/") ? "bg-[#020119]" : "bg-white"}`}>
                           <div className="flex items-center gap-4 mb-10 max-md:mb-5 max-md:p-3">
                              <div className={`w-fit flex gap-0.5 py-2 px-3 rounded-lg ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-600"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-500"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-400"></span>
                              </div>
                              <p className={`font-semibold ${pathName.includes("/course/") ? "text-white" : "text-black"}`}>
                                 Курсы:
                              </p>
                           </div>
                           <ul className="w-full grid grid-flow-col grid-rows-3 max-md:grid-flow-col max-md:grid-cols-[200px] gap-x-5 max-lg:gap-2 gap-y-3 mt-auto max-md:p-3 max-md:overflow-auto no-scroll">
                              {
                                 [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => {
                                    return (
                                       <li key={item} className={`w-full max-md:w-[200px] flex items-center gap-3 max p-1 rounded-xl cursor-pointer duration-150 ease-in hover:text-white hover:bg-[#151FE1] 
                                          ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}
                                       `}>
                                          <p className={`text-gray-400 text-sm font- p-3 px-3.5  rounded-lg
                                             ${pathName.includes("/course/") ? "bg-[#020119]" : "bg-white"}
                                          `}>
                                             {item >= 9 ? "" : "0"}{item + 1}
                                          </p>
                                          <p className={`text-sm font-semibold 
                                             ${pathName.includes("/course/") ? "text-white" : ""}
                                          `}>
                                             Программа курса
                                          </p>
                                       </li>
                                    )
                                 })
                              }
                           </ul>
                        </div>
                        <div className={`col-span-4 max-2xl:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-0 rounded-2xl ${pathName.includes("/course/") ? "bg-[#020119]" : "bg-white"}`}>
                           <div className="flex items-center gap-4 mb-10 max-md:mb-5 max-md:p-3">
                              <div className={`w-fit flex gap-0.5 py-2 px-3 rounded-lg ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-600"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-500"></span>
                              </div>
                              <p className={`font-semibold ${pathName.includes("/course/") ? "text-white" : "text-black"}`}>
                                 Другие проекты:
                              </p>
                           </div>
                           <div className="grid grid-cols-2 max-2xl:grid-cols-4 max-md:grid-flow-col max-md:grid-cols-[200px] gap-2 mt-auto max-md:p-3 max-md:overflow-auto no-scroll">
                              {
                                 links.map((link: { title: string, link: string, img: string }, idx: number) => <LinkPages link={link} idx={idx} HandelMenu={HandelMenu} pathName={pathName} />)
                              }
                           </div>
                        </div>
                        <div className={`col-span-6 max-xl:col-span-5 max-md:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-3 rounded-2xl ${pathName.includes("/course/") ? "bg-[#020119]" : "bg-white"}`}>
                           <div className="flex items-center gap-4 mb-10 max-md:mb-5">
                              <div className={`w-fit flex gap-0.5 py-2 px-3 rounded-lg ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-600"></span>
                              </div>
                              <p className={`font-semibold ${pathName.includes("/course/") ? "text-white" : "text-black"}`}>
                                 Контакты для связи:
                              </p>
                           </div>
                           <div className="flex max-xl:flex-col items-center gap-3 mt-auto">
                              <Link href={"#"} className={`text-gray-400 p-3.5 rounded-2xl duration-150 ease-in max-xl:hidden hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <FaTelegram size={25} />
                              </Link>
                              <Link href={"#"} className={`text-gray-400 p-3.5 rounded-2xl duration-150 ease-in max-xl:hidden hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <IoLogoWhatsapp size={25} />
                              </Link>
                              <a href="tel:+998 95 500-50-05" className={`w-full max-xl:flex hidden items-center gap-5 p-1 rounded-2xl cursor-pointer duration-150 ease-in text-[#151515cc] hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <p className="bg-white text-gray-400 p-3 rounded-xl" style={pathName.includes("/course/") ? { background: "#020119" } : { background: "#fff" }}>
                                    <FaTelegram size={25} />
                                 </p>
                                 <p className="text-sm font-semibold" style={pathName.includes("/course/") ? { color: "#fff" } : {}}>
                                    Telegram
                                 </p>
                              </a>
                              <a href="tel:+998 95 500-50-05" className={`w-full max-xl:flex hidden items-center gap-5 p-1 rounded-2xl cursor-pointer duration-150 ease-in text-[#151515cc] hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <p className="bg-white text-gray-400 p-3 rounded-xl" style={pathName.includes("/course/") ? { background: "#020119" } : { background: "#fff" }}>
                                    <IoLogoWhatsapp size={25} />
                                 </p>
                                 <p className="text-sm font-semibold" style={pathName.includes("/course/") ? { color: "#fff" } : {}}>
                                    Whatsapp
                                 </p>
                              </a>
                              <a href="tel:+998 95 500-50-05" className={`w-full flex items-center gap-5 p-1 rounded-2xl cursor-pointer duration-150 ease-in text-[#151515cc] hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <p className="bg-white p-3 text-gray-400 rounded-xl" style={pathName.includes("/course/") ? { background: "#020119" } : { background: "#fff" }}>
                                    <FaPhone size={20} />
                                 </p>
                                 <p className="text-sm font-semibold" style={pathName.includes("/course/") ? { color: "#fff" } : {}}>
                                    +998 95 500-50-05
                                 </p>
                              </a>
                              <Link href="#" className={`w-full flex items-center gap-5 p-1 rounded-2xl cursor-pointer duration-150 ease-in text-[#151515cc] hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <p className="text-gray-400 p-3 rounded-xl" style={pathName.includes("/course/") ? { background: "#020119" } : { background: "#fff" }}>
                                    <MdEmail size={20} />
                                 </p>
                                 <p className="text-sm font-semibold" style={pathName.includes("/course/") ? { color: "#fff" } : {}}>
                                    wepro@gmail.com
                                 </p>
                              </Link>
                           </div>
                        </div>
                        <div className={`col-span-4 max-xl:col-span-5 max-md:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-3 rounded-2xl ${pathName.includes("/course/") ? "bg-[#020119]" : "bg-white"}`}>
                           <div className="flex items-center gap-4 mb-10 max-md:mb-5">
                              <div className={`w-fit flex gap-0.5 py-2 px-3 rounded-lg ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                                 <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                              </div>
                              <p className={`font-semibold ${pathName.includes("/course/") ? "text-white" : "text-black"}`}>
                                 Контакты для связи:
                              </p>
                           </div>
                           <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
                              <Link href={"#"} className={`text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <FaTelegram size={25} className="m-auto" />
                              </Link>
                              <Link href={"#"} className={`text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <IoLogoWhatsapp size={25} className="m-auto" />
                              </Link>
                              <Link href={"#"} className={`text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <IoLogoWhatsapp size={25} className="m-auto" />
                              </Link>
                              <Link href={"#"} className={`text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <IoLogoWhatsapp size={25} className="m-auto" />
                              </Link>
                              <Link href={"#"} className={`text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1] ${pathName.includes("/course/") ? "bg-[#0b0a24]" : "bg-[#f4f4f4]"}`}>
                                 <IoLogoWhatsapp size={25} className="m-auto" />
                              </Link>
                           </div>
                        </div>
                     </motion.div>
                  </motion.div>
               )}
            </AnimatePresence>
         </motion.header >
         {
            pathName.includes("/ru/course/") || pathName.includes("/uz/course/") ?
               null
               :
               <hr className="w-full relative z-50 mt-2" />
         }

      </>
   );
};

export default Header;
