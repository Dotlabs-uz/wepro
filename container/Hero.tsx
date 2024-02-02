"use client";
import Image from "next/image";
import { FaFigma } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
   const arr = [
      {
         id: 0,
         icon: "",
         title: "Frontend-разработка",
         img: "/assets/images/hero.jpg",
         month: "6",
      },
      {
         id: 1,
         icon: "",
         title: "Разработка под iOS/Android",
         img: "/assets/images/party.jpg",
         month: "5",
      },
      {
         id: 2,
         icon: "",
         title: "Графический дизайн",
         img: "/assets/images/hero.jpg",
         month: "5",
      },
      {
         id: 3,
         icon: "",
         title: "Веб-дизайн",
         img: "/assets/images/party.jpg",
         month: "2",
      },
      {
         id: 4,
         icon: "",
         title: "SMM",
         img: "/assets/images/hero.jpg",
         month: "4",
      },
      {
         id: 5,
         icon: "",
         title: "Мобилография",
         img: "/assets/images/party.jpg",
         month: "1",
      },
   ];
   const [currentSlide, setCurrentSlide] = useState(0);
   const [progress, setProgress] = useState(0);

   useEffect(() => {
      const interval = setInterval(() => {
         setProgress((prevProgress) =>
            prevProgress + 1 <= 100 ? prevProgress + 1 : 0
         );

         if (progress === 100) {
            setProgress(0);
            setCurrentSlide((prevSlide) => (prevSlide + 1) % arr.length);
         }
      }, 110);

      return () => clearInterval(interval);
   }, [currentSlide, progress]);

   const handelSlide = (id: number) => {
      setProgress(0);
      setCurrentSlide(id);
   };

   return (
      <div className="custom-container mt-10 max-lg:mt-9">
         <div className="max-sm:block hidden mb-8">
            <h1 className="text-4xl font-bold text-center mb-3">
               С нуля до PRO за {arr[currentSlide].month} месяца
            </h1>
            <p className="text-[#00000099] text-sm font-bold text-center mb-7">
               Wepro - это сеть IT-школ в Самарканде
            </p>

            <div className="flex flex-col gap-2">
               <button className="bg-[#151FE1] text-[#ffffff] w-full font-bold py-3 rounded-lg border-2 border-[#151FE1]">
                  Начать обучение
               </button>
               <button className="bg-[#ffffff] text-[#151FE1] w-full font-bold py-3 rounded-lg border-2 border-[#151FE1]">
                  Посмотреть все курсы
               </button>
            </div>
         </div>
         <div className="relative min-h-[550px] max-3xl:min-h-[450px] max-lg:min-h-[400px] max-sm:min-h-[300px] max-xs:min-h-[270px] flex p-5 max-xl:p-4 max-sm:p-2 rounded-[22px]  bg-cover bg-no-repeat">
            <Image
               className="w-full h-full absolute top-0 left-0 object-cover rounded-3xl max-md:rounded-2xl pointer-events-none select-none"
               src={arr[currentSlide].img}
               width={1000}
               height={1000}
               alt="course"
            />
            <div className="w-full mt-auto rounded-[22px] max-md:rounded-[12px] px-6 max-xl:px-3 max-sm:px-2 backdrop-blur-[15px] bg-[#ffffffd9]">
               <div className="max-sm:hidden py-6 max-2xl:py-4 text-center border-b border-[#1515151a]">
                  <h1 className="text-3xl max-lg:text-2xl font-bold">
                     С нуля до PRO за {arr[currentSlide].month} месяца
                  </h1>
                  <p className="text-[#00000099] text-sm font-bold">
                     Wepro - это сеть IT-школ в Самарканде
                  </p>
               </div>
               <div className="px-14 max-3xl:px-9 max-2xl:px-5 max-xl:px-0 py-6 max-3xl:py-4 max-sm:py-2">
                  <ul className="flex items-center justify-between overflow-scroll no-scroll">
                     {arr.map(
                        (item: {
                           id: number;
                           icon: string;
                           title: string;
                           img: string;
                           month: string;
                        }) => {
                           return (
                              <li
                                 key={item.id}
                                 onClick={() => handelSlide(item.id)}
                                 className="relative flex items-center gap-3 max-2xl:gap-2 py-3 px-7 max-3xl:px-5 max-2xl:px-4 rounded-lg cursor-pointer duration-100 ease-in"
                                 style={{
                                    background:
                                       currentSlide === item.id
                                          ? "#151fe166"
                                          : "transparent",
                                    color:
                                       currentSlide === item.id
                                          ? "white"
                                          : "black",
                                 }}
                              >
                                 <span
                                    className="absolute inset-0 z-[-1] rounded-lg duration-500 ease-linear bg-[#151FE1]"
                                    style={
                                       currentSlide === item.id
                                          ? {
                                               width: `${progress}%`,
                                               background: "#151FE1",
                                            }
                                          : {
                                               background: "transparent",
                                            }
                                    }
                                 ></span>
                                 <FaFigma size={20} className="max-lg:hidden" />
                                 <p className="text-sm font-bold text-nowrap">
                                    {item.title}
                                 </p>
                              </li>
                           );
                        }
                     )}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
