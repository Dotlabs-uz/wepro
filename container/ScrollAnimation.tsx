'use client';
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis'
import Card from '@/components/Card';

interface ScrollAnimationProps {
   lang: any
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ lang }) => {
   const projects = [
      {
         title: "События",
         description: "Мы организовываем самые разные мероприятия внутри центров для наших студентов.",
         src: "party.webp",
         link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
         color: "#fff"
      },
      {
         title: "Доступ к коворкингу",
         description: "Коворкинг - это зона, оборудованная всем необходимым для того, чтобы вы могли дополнительно практиковаться.",
         src: "coworking.webp",
         link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
         color: "#fff"
      },
      {
         title: "Личный кабинет",
         description: "Вы получите доступ к личному кабинету чтобы видеть свой прогресс обучения.",
         src: "locale.webp",
         link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
         color: "#fff"
      },
      {
         title: "Бонусный английский язык",
         description: "Вы можете изучать английский язык в нашем английском центре “Wespeak”",
         src: "englishBonus.webp",
         link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
         color: "#fff"
      }
   ]
   const container = useRef(null);
   const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end end']
   })

   useEffect(() => {
      const lenis = new Lenis()

      function raf(time: any) {
         lenis.raf(time)
         requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
   })

   return (
      <div className="">
         <div className="">
            <h2 className='text-center'>Что еще входит в стоимость обучения</h2>
         </div>
         <div ref={container} className={"main"}>
            {
               projects.map((project: any, i: any) => {
                  const targetScale = 1 - ((projects.length - i) * 0.05);
                  return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
               })
            }
         </div>
      </div>
   )
}

export default ScrollAnimation