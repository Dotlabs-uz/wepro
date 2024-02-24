"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

import Vacancies from "@/container/Vacancies";
import Form from "@/container/Form";

import { MdArrowOutward } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Modal from "@/components/Modal";
import ReviewsCom from "@/components/ReviewsCom";
import Company from "@/container/Company";
import FAQ from "@/container/FAQ";
import BgAnimated from "@/container/BgAnimated";
import Lessons from "@/components/Lessons";
import Group from "@/components/children/Group";

interface CourseProps { }

const Page: React.FC<CourseProps> = ({ params }: any) => {
   const [data, setData] = useState<any>();
   const [isOpened, setIsOpened] = useState(false);
   let price = `${data?.price.toString().slice(0, 3)},${data?.price
      .toString()
      .slice(3)}`;

   const onOpen = () => {
      setIsOpened(true);
   };
   const onClose = () => {
      setIsOpened(false);
   };

   useEffect(() => {
      if (isOpened) {
         document.body.style.overflowY = "hidden";
      } else {
         document.body.style.overflowY = "scroll";
      }
   }, [isOpened]);

   useEffect(() => {
      axios
         .get(`https://wepro.uz/api/courses/slug/${params.courseId}`)
         .then((res: any) => {
            if (res.status === 200 || res.status === 201) {
               setData(res.data);
            }
         })
         .catch((err: any) => {
            console.log(err);
         });
   }, []);

   console.log(data?.videoReviews);

   return (
      <>
         <Modal
            isOpened={isOpened}
            onClose={onClose}
            select={false}
            title={"Записаться на курс"}
            dcr={
               "Оставьте заявку и получите возможность попасть на открытый урок абсолютно бесплатно."
            }
         />
         <section className="hero-gradient">
            <div className="flex gap-16 max-3xl:gap-10">
               <div className="w-1/2 relative max-lg:hidden">
                  <img
                     className="w-full h-full object-cover bg-no-repeat"
                     src={data?.preview}
                     alt="photo"
                  />
                  <div className="h-full w-full absolute z-10 left-0 bottom-0 hero-img-gradient"></div>
               </div>

               <div className="max-w-[655px] max-xl:max-w-xl max-lg:max-w-full py-12 max-lg:py-8 max-3xl:pr-16 max-lg:px-5 max-sm:px-4">
                  <div className="flex max-md:flex-col gap-5 mb-14 max-2xl:mb-10">
                     <div className="w-2/5 max-md:w-full max-md:h-[250px] max-lg:block hidden">
                        <Image
                           className="w-full h-full object-cover bg-no-repeat rounded-xl"
                           src={"/images/hero-2.jpg"}
                           width={1000}
                           height={1000}
                           alt="photo"
                        />
                     </div>
                     <div className="max-lg:w-3/5 max-md:w-full">
                        <h1 className="text-5xl max-3xl:text-4xl max-xl:text-3xl font-bold leading-normal mb-7 max-2xl:mb-5 max-sm:mb-3 text-white">
                           {data?.title}
                        </h1>

                        <h3 className="text-2xl max-2xl:text-xl max-lg:text-lg leading-normal max-sm:leading-snug mb-5 text-white">
                           {data?.textAboutCourse}
                        </h3>

                        <ul className="max-w-[420px] max-2xl:max-w-lg w-full flex flex-wrap items-center gap-x-3 gap-y-2 text-white">
                           {data?.apps.map((app: string, idx: number) => {
                              return (
                                 <li
                                    key={idx}
                                    className="text-sm py-2 px-5 rounded-lg border border-[#ffffff30]"
                                 >
                                    {app}
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  </div>

                  <div className="bg-white py-4 max-xs:py-3 px-7 max-xl:px-5 max-xs:px-3 rounded-3xl max-md:rounded-2xl">
                     <div className="sm:flex max-sm:flex-wrap sm:items-center sm:justify-between max-sm:grid grid-cols-2  max-md:gap-y-4 mb-5">
                        <div className="">
                           <p className="font-bold leading-normal">
                              {data?.month} месяцев
                           </p>
                           <p className="text-sm max-xs:text-xs font-medium text-[#00000099]">
                              Длительность курса
                           </p>
                        </div>
                        <div className="">
                           <p className="font-bold leading-normal">
                              {price} сум
                           </p>
                           <p className="text-sm max-xs:text-xs font-medium text-[#00000099]">
                              Стоимость до 21 февраля
                           </p>
                        </div>
                        <div className="">
                           <p className="font-bold leading-normal">
                              {data?.lessons.length} уроков,{" "}
                              {Math.ceil(data?.lessons.length * 1.5)} часа
                           </p>
                           <p className="text-sm max-xs:text-xs font-medium text-[#00000099]">
                              Количество уроков
                           </p>
                        </div>
                     </div>
                     <div className="">
                        <button
                           onClick={onOpen}
                           className="bg-black text-white w-full text-xl max-lg:text-lg font-bold py-4 rounded-lg"
                        >
                           Начать обучение
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            <div className="custom-container py-16 max-2xl:py-12 max-lg:py-8 max-md:hidden">
               <div className="mb-5 ">
                  <h3 className="text-3xl max-xl:text-2xl font-bold text-center text-white">
                     Зачем становиться дизайнером?
                  </h3>
               </div>
               <div className="flex flex-wrap items-center justify-center gap-5">
                  <div className="bg-[#F4F4F4] w-fit flex items-center gap-4 py-2 pl-3 pr-7 rounded-3xl">
                     <div className="bg-white p-3 rounded-2xl">
                        <Image
                           src={"/icons/vacancies.svg"}
                           width={33}
                           height={33}
                           alt="icon"
                        />
                     </div>
                     <div className="">
                        <p className="font-bold">10,000 вакансий</p>
                        <p className="text-[#00000066] text-sm font-medium">
                           На площадках по поиску работ
                        </p>
                     </div>
                  </div>
                  <div className="bg-[#F4F4F4] w-fit flex items-center gap-4 py-2 pl-3 pr-7 rounded-3xl">
                     <div className="bg-white p-3 rounded-2xl">
                        <Image
                           src={"/icons/dollar.svg"}
                           width={33}
                           height={33}
                           alt="icon"
                        />
                     </div>
                     <div className="">
                        <p className="font-bold">${data?.earning}</p>
                        <p className="text-[#00000066] text-sm font-medium">
                           Диапазон зарплат
                        </p>
                     </div>
                  </div>
                  <div className="bg-[#F4F4F4] w-fit flex items-center gap-4 py-2 pl-3 pr-7 rounded-3xl">
                     <div className="bg-white p-3 rounded-2xl">
                        <Image
                           src={"/icons/chart.svg"}
                           width={33}
                           height={33}
                           alt="icon"
                        />
                     </div>
                     <div className="">
                        <p className="font-bold">Топ 3</p>
                        <p className="text-[#00000066] text-sm font-medium">
                           Востребованная профессия
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="custom-container my-28 max-lg:my-20">
               <div className="mb-9 max-md:mb-6 max-sm:mb-3">
                  <h2 className="sm:text-center">
                     Вы сможете создавать
                  </h2>
               </div>

               <div className="grid md:grid-cols-3 row-auto-[200px] max-md:grid-flow-col max-md:auto-cols-[180px] max-md:auto-rows-[100px] grid-rows-[300px_minmax(300px,_1fr)] gap-6 max-xl:gap-3 max-sm:gap-2 overflow-x-auto no-scroll max-md:py-3">
                  {
                     data?.canCreate.map((item: { image: string, title: string, _id: string }) => {
                        return (
                           <div key={item._id} className="card">
                              <img
                                 className="w-full h-full object-cover rounded-[22px] max-lg:rounded-2xl max-sm:rounded-xl"
                                 src={item.image}
                                 // width={1000}
                                 // height={1000}
                                 alt="photo"
                              />
                              <div className="card-title">
                                 <p className="text-sm font-bold max-md:text-center">
                                    {item.title}
                                 </p>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </section>

         <section>
            <Vacancies data={data} />
         </section>

         <section className="relative">
            <BgAnimated>
               <div className="gradient max-md:hidden"></div>
               <div className="custom-container pt-14 max-xl:pt-10 max-lg:pt-8 max-md:pt-5 max-lg:mt-8 pb-24 max-xl:pb-16 max-lg:pb-10 max-md:pb-7">
                  <div className="mb-12 max-xl:mb-8 max-md:mb-6 md:text-center">
                     <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold mb-4 text-white">
                        Кем работают выпускники школы
                     </h2>
                     <p className="max-w-2xl m-auto text-xl max-md:text-lg font-medium text-[#A3A2AB]">
                        После курса вы сможете работать в разных сферах и
                        выбрать ту, которая нравится больше всего. У вас будет
                        достаточно навыков для нескольких профессий.
                     </p>
                  </div>
                  <div className="grid md:grid-cols-3 max-md:grid-flow-col max-md:auto-cols-[310px] max-md:grid-rows-2 gap-6 max-xl:gap-3 mx-28 max-2xl:mx-20 max-xl:mx-0 py-12 max-xl:py-8 max-md:py-6 overflow-x-auto no-scroll border-y border-[#ffffff66]">
                     {data?.workAfterCourse.map((item: { money: string, title: string, _id: string }) => {
                        return (
                           <div
                              key={item._id}
                              className="flex flex-col p-6 max-xl:p-4 rounded-3xl bg-gradient-to-b from-[47%] from-[#f4f4f41a] to-[100%] to-[#f4f4f408]"
                           >
                              <div className="mb-11 max-xl:mb-8 max-md:mb-5">
                                 <p className="text-white text-2xl leading-normal font-bold mb-2">
                                    {item.title}
                                 </p>
                                 <p className="text-white bg-[#ffffff99] w-fit px-2 py-1 text-base leading-normal font-bold rounded-lg">
                                    от ${item.money}$/месяц
                                 </p>
                              </div>

                              <div className="mt-auto">
                                 <p className="text-[#ffffff99] text-base font-medium leading-snug">
                                    Создает макеты лендингов, сайтов,
                                    интернет-магазинов, приложений для бизнеса.
                                 </p>
                              </div>
                           </div>
                        );
                     })}
                  </div>

                  <div className="">
                     <div className="mb-9 max-lg:mb-5 mt-12 max-xl:mt-8 max-md:mt-6">
                        <h3 className="text-2xl max-md:text-xl font-bold md:text-center text-white">
                           Дополнительные профессии:
                        </h3>
                     </div>
                     <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-14 max-3xl:gap-x-10 max-lg:gap-x-5 mx-52 max-3xl:mx-40 max-xl:mx-20 max-lg:mx-0 max mb-24 max-xl:mb-16 max-lg:mb-10 max-md:mb-0">
                        {data?.additionalWorkAfterCourse.map((item: { money: number, title: number, _id: string }, idx: number) => {
                           return (
                              <div
                                 key={item._id}
                                 className="flex items-center justify-between py-4 border-b border-[#ffffff66]"
                              >
                                 <p className="text-[#A3A2AB] max-lg:text-sm font-bold">
                                    0{idx + 1}.
                                 </p>
                                 <p className="text-white text-2xl max-2xl:text-xl font-bold">
                                    {item.title}
                                 </p>
                                 <p className="p-1 px-2 font-bold rounded-lg max-2xl:text-base text-white bg-[#ffffff99]">
                                    от {item.money}$/месяц
                                 </p>
                              </div>
                           );
                        })}
                     </div>
                     <button
                        onClick={onOpen}
                        className="bg-white flex items-center gap-2 m-auto p-2 rounded-lg max-md:hidden">
                        <span className="p-2 rounded-lg bg-[#000]">
                           <MdArrowOutward
                              size={20}
                              color="white"
                              className=""
                           />
                        </span>
                        <span className="text-xl max-xl:text-lg font-bold">
                           Записаться на курс “{data?.title}”
                        </span>
                     </button>
                  </div>
               </div>
            </BgAnimated>
         </section>

         <section>
            <div className="custom-container">
               <div className="mb-14 max-xl:mb-8 max-md:mb-4">
                  <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold sm:text-center">
                     Кому подойдет курс
                  </h2>
               </div>
               <div className="grid md:grid-cols-3 max-md:grid-flow-col max-md:auto-cols-[310px] max-md:grid-rows-2 gap-6 max-xl:gap-4 max-lg:gap-3 mx-28 max-2xl:mx-20 max-xl:mx-0 overflow-x-auto no-scroll">
                  {data?.suitableFor.map(
                     (item: { title: string; text: string }, idx: number) => {
                        return (
                           <div key={idx} className="bg-[#3D2582] p-6 max-lg:p-4 rounded-3xl flex flex-col">
                              <p className="text-xl font-bold mb-28 max-3xl:mb-20 max-2xl:mb-12 max-lg:mb-7 text-white">
                                 0{idx + 1}.
                              </p>
                              <div className="mt-auto">
                                 <p className="text-lg font-bold text-white">
                                    {item.title}
                                 </p>
                                 <p className="max-sm:text-sm text-[#E0E0E0]">
                                    {item.text}
                                 </p>
                              </div>
                           </div>
                        );
                     }
                  )}
               </div>
            </div>
         </section>

         <section>
            <div className="custom-container mt-28 max-xl:mt-20">
               <div className="mb-14 max-xl:mb-8 max-md:mb-4">
                  <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold sm:text-center">
                     Ближайшие запуски групп
                  </h2>
               </div>
               <div
                  className={`grid grid-flow-col grid-cols-[460px] max-2xl:grid-cols-[400px] max-lg:grid-cols-[310px] gap-7 max-2xl:gap-5 mb-7 max-2xl:mb-5 p-3 max-sm:p-2 overflow-x-scroll no-scroll`}
               >
                  {
                     data?.admissions.map((item: any) => {
                        return <Group key={item._id} item={item} onOpen={onOpen} />;
                     })
                  }
               </div>
            </div>
         </section>

         <section className="relative">
            <BgAnimated>
               <div className="custom-container my-28 max-xl:my-20">
                  <div className="mx-28 max-2xl:mx-10 max-xl:mx-0">
                     <div className="pt-14 pb-12 max-xl:py-8 max-md:py-7 max-sm:pb-0 md:text-center">
                        <h2 className="text-white text-5xl max-xl:text-4xl max-sm:text-3xl font-bold mb-4 max-lg:mb-2">
                           Отзывы выпускников
                        </h2>
                        <p className="text-[#A3A2AB] max-w-xs md:m-auto text-xl max-md:text-lg font-medium">
                           Посмотрите что говорят о нас выпускники курсов
                        </p>
                     </div>
                     <div className="border-b border-[#FFFFFF66] py-12 max-lg:py-8">
                        {data?.videoReviews && <ReviewsCom reviews={data.videoReviews} />}
                     </div>
                  </div>

                  <div className="mx-28 max-2xl:mx-10 max-xl:mx-0">
                     <div className="pt-14 pb-12 max-xl:py-8 max-md:py-7 md:text-center">
                        <h2 className="text-white font-bold mb-4">
                           Учебная программа
                        </h2>
                        <div className="flex max-md:flex-wrap items-center md:justify-center gap-2">
                           <p className="py-1 px-3 text-lg max-lg:text-base font-bold rounded-lg text-white bg-[#26145D]">
                              {data?.month} месяца
                           </p>
                           <p className="py-1 px-3 text-lg max-lg:text-base font-bold rounded-lg text-white bg-[#26145D]">
                              {data?.lessons.length} урока
                           </p>
                           <p className="py-1 px-3 text-lg max-lg:text-base font-bold rounded-lg text-white bg-[#26145D]">
                              48 часов
                           </p>
                           <p className="py-1 px-3 text-lg max-lg:text-base font-bold rounded-lg text-white bg-[#26145D]">
                              8 контрольных
                           </p>
                        </div>
                     </div>
                     <Lessons data={data} />
                  </div>

                  <div className="mx-28 max-2xl:mx-10 max-xl:mx-0 pt-20 max-xl:pt-14 max-lg:pt-8 max-md:pt-7 pb-14 border-t border-[#ffffff66]">
                     <div className="mb-12 max-lg:mb-8">
                        <h2 className="text-white md:text-center">
                           Кураторы курса
                        </h2>
                     </div>
                     <div className="w-fit max-sm:w-full m-auto flex items-center max-lg:flex-wrap gap-6 max-lg:gap-4">
                        {data?.teachersId.map((teacher: any) => {
                           return (
                              <div
                                 key={teacher._id}
                                 className="max-w-xs min-h-[420px] max-xl:min-h-[370px] max-sm:min-h-[300px] w-full flex rounded-xl p-5 max-lg:p-2 bg-[url('/images/student.jpg')] bg-no-repeat bg-cover bg-center"
                              >
                                 <div className="mt-auto px-5 max-md:px-2 max-lg:px-2 py-2 rounded-xl max-md:rounded-md md:backdrop-blur-[6px] bg-[#ffffff99] max-md:bg-white">
                                    <p className="text-sm font-bold max-xs:hidden">
                                       {teacher.description}
                                    </p>
                                    <p className="max-sm:text-sm">
                                       {teacher.name}
                                    </p>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </BgAnimated>
         </section>
         <Company />
         <Form />
         <FAQ />
      </>
   );
};

export default Page;
