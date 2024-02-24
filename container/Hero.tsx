"use client";
import Image from "next/image";
import { FaFigma } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
   const arr = [
      {
         id: 0,
         icon: "",
         title: "Frontend-разработка",
         img: "/images/hero.jpg",
         month: "6",
      },
      {
         id: 1,
         icon: "",
         title: "Разработка под iOS/Android",
         img: "/images/party.jpg",
         month: "5",
      },
      {
         id: 2,
         icon: "",
         title: "Графический дизайн",
         img: "/images/hero.jpg",
         month: "5",
      },
      {
         id: 3,
         icon: "",
         title: "Веб-дизайн",
         img: "/images/party.jpg",
         month: "2",
      },
      {
         id: 4,
         icon: "",
         title: "SMM",
         img: "/images/hero.jpg",
         month: "4",
      },
      {
         id: 5,
         icon: "",
         title: "Мобилография",
         img: "/images/party.jpg",
         month: "1",
      },
   ];
   const [courses, setCourses] = useState<any>([]);
   const [currentSlide, setCurrentSlide] = useState(0);
   const [progress, setProgress] = useState(0);
   const sliderRef = useRef(null);

   useEffect(() => {
      const interval = setInterval(() => {
         setProgress((prevProgress) =>
            prevProgress + 1 <= 100 ? prevProgress + 1 : 0
         );

         if (progress === 100) {
            setProgress(0);
            setCurrentSlide((prevSlide: number) => (prevSlide + 1) % arr.length);
         }
      }, 100);

      return () => clearInterval(interval);

   }, [currentSlide, progress]);

   useEffect(() => {
      scrollToElement(currentSlide)
   }, [currentSlide]);

   const scrollToElement = (index: number) => {
      const container = sliderRef.current as unknown as HTMLDivElement;
      const element = document.getElementById(`item-${index}`);
      if (container && element) {
         const scrollOffset = element.offsetLeft - (container.clientWidth - element.clientWidth) / 2;
         container.scrollTo({
            left: scrollOffset,
            behavior: 'smooth'
         });
      }
   };

   const handelSlide = (id: number) => {
      setProgress(0);
      setCurrentSlide(id);
   };

   useEffect(() => {
      axios
         .get("https://wepro.uz/api/courses?project=wepro")
         .then((res) => {
            if (res.status === 200 || res.status === 201) {
               setCourses(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <div className="custom-container mt-10">
         <div className="max-sm:block hidden mb-8">
            <h1 className="text-4xl font-bold text-center mb-3">
               С нуля до PRO за 5 месяца
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

         <div className="relative min-h-[550px] max-3xl:min-h-[450px] max-lg:min-h-[350px] max-sm:min-h-[300px] max-xs:min-h-[270px] flex p-5 max-xl:p-4 max-sm:px-2 max-sm:py-4 rounded-3xl bg-cover bg-no-repeat">
            <img
               className="w-full h-full absolute top-0 left-0 object-cover rounded-3xl max-md:rounded-2xl pointer-events-none select-none"
               src={courses[currentSlide]?.preview}
               alt="course"
            />
            <div className="w-full mt-auto rounded-3xl max-lg:rounded-xl max-sm:rounded-lg px-6 max-xl:px-3 max-sm:px-2 backdrop-blur-[15px] bg-[#f4f4f48c]">
               <div className="max-lg:hidden py-6 max-2xl:py-4 text-center border-b border-[#1515151a]">
                  <h1 className="text-3xl max-lg:text-2xl font-bold">
                     С нуля до PRO за 5 месяца
                  </h1>
                  <p className="text-[#00000099] text-sm font-bold">
                     Wepro - это сеть IT-школ в Самарканде
                  </p>
               </div>

               <div ref={sliderRef} className="px-14 max-3xl:px-5 max-xl:px-0 py-6 max-3xl:py-4 max-lg:py-2 max-sm:py-1 overflow-scroll no-scroll">
                  <ul className="flex items-center justify-between">
                     {courses.map((item: any, idx: number) => {
                        return (
                           <li
                              key={item._id}
                              id={`item-${idx}`}
                              onClick={() => handelSlide(idx)}
                              className="text-nowrap space-nowrap relative flex items-center gap-2 max-2xl:gap-2 py-3 px-7 max-3xl:px-5 max-2xl:px-4 rounded-lg cursor-pointer duration-100 ease-in"
                              style={{
                                 background:
                                    currentSlide === idx
                                       ? "#151fe166"
                                       : "transparent",
                                 color:
                                    currentSlide === idx
                                       ? "white"
                                       : "black",
                              }}
                           >
                              <span
                                 className="absolute inset-0 z-[-1] rounded-lg duration-700 ease-linear bg-[#151FE1]"
                                 style={
                                    currentSlide === idx
                                       ? {
                                          width: `${progress}%`,
                                          background: "#151FE1",
                                       }
                                       : {
                                          background: "transparent",
                                       }
                                 }
                              ></span>
                              {/* <FaFigma className="text-[20px] max-lg:text-[16px]" /> */}
                              <p className="text-xs font-bold">
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
