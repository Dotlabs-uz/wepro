"use client";
import { useRef } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";

import AnimateBlock from "@/components/AnimateBlock";

interface ScrollAnimationProps { }

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ }) => {
   const party = [
      {
         id: 0,
         title: "События",
         dcr: "Мы организовываем самые разные мероприятия внутри центров для наших студентов.",
         img: "party.svg",
         scale: 0.2,
         scale2: 1.1,
      },
      {
         id: 1.5,
         title: "Доступ к коворкингу",
         dcr: "Коворкинг - это зона, оборудованная всем необходимым для того, чтобы вы могли дополнительно практиковаться.",
         img: "coworking.svg",
         scale: 0.3,
         scale2: 1.1,
      },
      {
         id: 2,
         title: "Личный кабинет",
         dcr: "Вы получите доступ к личному кабинету чтобы видеть свой прогресс обучения.",
         img: "locale.svg",
         scale: 0.5,
         scale2: 1,
      },
      {
         id: 3,
         title: "Бонусный английский язык",
         dcr: "Студенты получают доступ к платформе для отслеживания статуса обучения, оценок и посещаемости.",
         img: "englishBonus.svg",
         scale: 0.5,
         scale2: 1.1,
      },
   ];
   const ref = useRef(null);
   const inView = useInView(ref);

   return (
      <>
         <div ref={ref}
            className="">
            <div className="max-w-[720px] m-auto mb-28 max-xl:mb-16 max-md:mb-5 px-4">
               <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold leading-normal md:text-center">
                  Что еще входит в стоимость обучения
               </h2>
            </div>

            <div className="relative flex flex-col gap-11 max-md:gap-0 px-10 max-sm:px-0">
               {party.map(
                  (item: {
                     id: number;
                     title: string;
                     dcr: string;
                     img: string;
                     scale: number;
                     scale2: number;
                  }) => (
                     <AnimateBlock item={item} key={item.id} inView={inView} />
                  )
               )}
            </div>
         </div>
      </>
   );
};

export default ScrollAnimation;
