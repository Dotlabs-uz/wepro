"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { IoIosMenu, IoLogoWhatsapp } from "react-icons/io";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { MdArrowOutward, MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Header = () => {
   const pathName = usePathname();
   const [isOpened, setIsOpened] = useState(false);
   const [menu, setMenu] = useState(false);
   const [activeLink, setActiveLink] = useState(false);

   const links = [
      {
         title: "Главная",
         link: `${pathName.slice(0, 3)}`,
         img: ""
      },
      {
         title: "Курсы и цены",
         link: `${pathName.slice(0, 3)}/courses`,
         img: ""
      },
      {
         title: "Отзывы",
         link: `${pathName.slice(0, 3)}/reviews`,
         img: ""
      },
      {
         title: "Запись в группу",
         link: `${pathName.slice(0, 3)}/groups`,
         img: ""
      },
   ];
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
            title={"Заявка на консультацию"}
            dcr={""}
         />
         <motion.header
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`relative z-[60] top-2 m-auto  ${pathName.includes("/ru/course/") || pathName.includes("/uz/course/")
               ? "bg-[#020119]"
               : ""
               }
               ${menu ? "border-transparent" : ""}`}
         >
            <motion.div className={`custom-container w-full duration-300 ease-in`}>
               <motion.div className={`w-full flex gap-4 items-center justify-between py-4 px-8 max-lg:px-5 max-md:px-3 duration-300 ease-in rounded-xl bg-white`}>
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
                     <p
                        className={`font-bold underline underline-offset-2 cursor-pointer ${pathName.includes("/ru/course/") || pathName.includes("/uz/course/") ? "text-white" : "text-black"
                           }`}
                     >
                        Рус
                     </p>
                     <button
                        onClick={onOpen}
                        className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white max-2xl:text-sm font-bold py-3 px-6 max-3xl:px-3 rounded-md border duration-150 ease-in max-lg:hidden block"
                     >
                        Бесплатная консультация
                     </button>
                  </div>
               </motion.div>
            </motion.div>
         </motion.header>
         <hr className="w-full relative z-50 mt-2" />

         <AnimatePresence>
            {menu && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full fixed z-[55] top-0 left-0 pt-24 backdrop-blur-sm bg-[#010018e2]"
               >
                  <motion.div
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     exit={{ y: 20, opacity: 0 }}
                     transition={{ duration: 0.3 }}
                     className="custom-container max-h-[600px] overflow-auto m-auto grid grid-cols-10 gap-2.5">
                     <div className="bg-white col-span-6 max-2xl:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-3 rounded-2xl">
                        <div className="flex items-center gap-4 mb-10">
                           <div className="w-fit flex gap-0.5 py-2 px-3 rounded-lg bg-[#f4f4f4]">
                              <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-600"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-500"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-400"></span>
                           </div>
                           <p className="font-semibold">
                              Разделы сайта:
                           </p>
                        </div>
                        <ul className="w-full grid grid-flow-col grid-rows-3 max-md:grid-flow-col max-md:grid-cols-[200px] gap-x-5 max-lg:gap-2 gap-y-3 mt-auto max-md:overflow-auto no-scroll">
                           {
                              [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item: number) => {
                                 return (
                                    <li key={item} className="bg-[#f4f4f4] w-full max-md:w-[200px] flex items-center gap-3 max p-1 rounded-xl cursor-pointer duration-150 ease-in hover:text-white hover:bg-[#151FE1]">
                                       <p className="bg-white text-gray-400 text-sm font- p-3 px-3.5  rounded-lg">
                                          {item >= 9 ? "" : "0"}{item + 1}
                                       </p>
                                       <p className="text-sm font-semibold">
                                          Программа курса
                                       </p>
                                    </li>
                                 )
                              })
                           }
                        </ul>
                     </div>
                     <div className="bg-white col-span-4 max-2xl:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-3 rounded-2xl">
                        <div className="flex items-center gap-4 mb-10">
                           <div className="w-fit flex gap-0.5 py-2 px-3 rounded-lg bg-[#f4f4f4]">
                              <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-600"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-500"></span>
                           </div>
                           <p className="font-semibold">
                              Другие страницы:
                           </p>
                        </div>
                        <div className="grid grid-cols-2 max-2xl:grid-cols-4 max-md:grid-flow-col max-md:grid-cols-[200px] gap-2 mt-auto max-md:overflow-auto no-scroll">
                           {
                              links.map((link: { title: string, link: string, img: string }, idx: number) => {
                                 return (
                                    <Link
                                       key={idx}
                                       href={link.link}
                                       onMouseEnter={() => setActiveLink(true)}
                                       onMouseLeave={() => setActiveLink(false)}
                                       className="max-md:w-[200px] relative z-10 overflow-hidden flex flex-col justify-between p-3 rounded-2xl bg-[#f4f4f4] "
                                    >
                                       <AnimatePresence>
                                          {
                                             activeLink && (
                                                <>
                                                   <motion.div
                                                      initial={{ opacity: 0 }}
                                                      animate={{ opacity: 1 }}
                                                      exit={{ opacity: 0 }}
                                                      transition={{ duration: 0.2 }}
                                                      className="absolute z-[-2] top-4 left-3 right-3">
                                                      <Image src={"/images/pages/reviews.png"} width={1000} height={1000} alt="page" />
                                                   </motion.div>
                                                   <motion.div
                                                      initial={{ opacity: 0 }}
                                                      animate={{ opacity: 1 }}
                                                      exit={{ opacity: 0 }}
                                                      transition={{ duration: 0.3 }}
                                                      className="w-full h-full absolute left-0 top-0 z-[-1] bg-gradient-to-t from-[#151FE1] from-[1%] to-transparent to-[99%]"
                                                   ></motion.div>
                                                </>
                                             )
                                          }
                                       </AnimatePresence>
                                       <div className="w-fit ml-auto rounded-full mb-8 p-2 bg-white">
                                          <MdArrowOutward size={20} color="#151FE1" />
                                       </div>
                                       <div className="">
                                          <p className="text-sm font-semibold" style={activeLink ? { color: "#fff" } : { color: "#000" }} >
                                             {link.title}
                                          </p>
                                       </div>
                                    </Link>
                                 )
                              })
                           }
                        </div>
                     </div>
                     <div className="bg-white col-span-6 max-xl:col-span-5 max-md:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-3 rounded-2xl">
                        <div className="flex items-center gap-4 mb-10">
                           <div className="w-fit flex gap-0.5 py-2 px-3 rounded-lg bg-[#f4f4f4]">
                              <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-600"></span>
                           </div>
                           <p className="font-semibold">
                              Контакты для связи:
                           </p>
                        </div>
                        <div className="flex max-xl:flex-col items-center gap-3">
                           <Link href={"#"} className="bg-[#f4f4f4] text-gray-400 p-3.5 rounded-2xl duration-150 ease-in max-xl:hidden hover:text-white hover:bg-[#151FE1]">
                              <FaTelegram size={25} />
                           </Link>
                           <Link href={"#"} className="bg-[#f4f4f4] text-gray-400 p-3.5 rounded-2xl duration-150 ease-in max-xl:hidden hover:text-white hover:bg-[#151FE1]">
                              <IoLogoWhatsapp size={25} />
                           </Link>
                           <a href="tel:+998 95 500-50-05" className="bg-[#f4f4f4] w-full max-xl:flex hidden items-center gap-5 p-1 rounded-2xl cursor-pointer duration-150 ease-in hover:text-white hover:bg-[#151FE1]">
                              <p className="bg-white text-gray-400 p-3 rounded-xl">
                                 <FaTelegram size={25} />
                              </p>
                              <p className="text-sm font-semibold text-[#151515cc]">
                                 t.me/werouz
                              </p>
                           </a>
                           <a href="tel:+998 95 500-50-05" className="bg-[#f4f4f4] w-full max-xl:flex hidden items-center gap-5 p-1 rounded-2xl cursor-pointer duration-150 ease-in hover:text-white hover:bg-[#151FE1]">
                              <p className="bg-white text-gray-400 p-3 rounded-xl">
                                 <IoLogoWhatsapp size={25} />
                              </p>
                              <p className="text-sm font-semibold text-[#151515cc]">
                                 Whatsapp
                              </p>
                           </a>
                           <a href="tel:+998 95 500-50-05" className="bg-[#f4f4f4] w-full flex items-center gap-5 p-1 rounded-2xl cursor-pointer duration-150 ease-in hover:text-white hover:bg-[#151FE1]">
                              <p className="bg-white text-gray-400 p-3 rounded-xl">
                                 <FaPhone size={20} />
                              </p>
                              <p className="text-sm font-semibold text-[#151515cc]">
                                 +998 95 500-50-05
                              </p>
                           </a>
                           <Link href="#" className="bg-[#f4f4f4] w-full flex items-center gap-5 p-1 rounded-2xl cursor-pointer duration-150 ease-in hover:text-white hover:bg-[#151FE1]">
                              <p className="bg-white text-gray-400 p-3 rounded-xl">
                                 <MdEmail size={20} />
                              </p>
                              <p className="text-sm font-semibold text-[#151515cc]">
                                 wepro@gmail.com
                              </p>
                           </Link>
                        </div>
                     </div>
                     <div className="bg-white col-span-4 max-xl:col-span-5 max-md:col-span-10 flex flex-col p-8 max-lg:p-5 max-md:p-3 rounded-2xl">
                        <div className="flex items-center gap-4 mb-10">
                           <div className="w-fit flex gap-0.5 py-2 px-3 rounded-lg bg-[#f4f4f4]">
                              <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                              <span className="block w-1.5 h-6 rounded-full bg-blue-700"></span>
                           </div>
                           <p className="font-semibold">
                              Контакты для связи:
                           </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
                           <Link href={"#"} className="bg-[#f4f4f4] text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1]">
                              <FaTelegram size={25} className="m-auto" />
                           </Link>
                           <Link href={"#"} className="bg-[#f4f4f4] text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1]">
                              <IoLogoWhatsapp size={25} className="m-auto" />
                           </Link>
                           <Link href={"#"} className="bg-[#f4f4f4] text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1]">
                              <IoLogoWhatsapp size={25} className="m-auto" />
                           </Link>
                           <Link href={"#"} className="bg-[#f4f4f4] text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1]">
                              <IoLogoWhatsapp size={25} className="m-auto" />
                           </Link>
                           <Link href={"#"} className="bg-[#f4f4f4] text-gray-400 w-fit p-3.5 rounded-2xl duration-150 ease-in hover:text-white hover:bg-[#151FE1]">
                              <IoLogoWhatsapp size={25} className="m-auto" />
                           </Link>
                        </div>
                     </div>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
};

export default Header;
