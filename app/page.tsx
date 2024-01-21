// "use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { FaFigma, FaPlay, FaTelegram } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";
import Courses from "@/components/Courses";

export default function Home() {
   const arr = [
      {
         id: 0,
         title: "VS Code",
      },
      {
         id: 1,
         title: "HTML",
      },
      {
         id: 2,
         title: "CSS (SCSS/SAAS)",
      },
      {
         id: 3,
         title: "Grid, Flexbox",
      },
      {
         id: 4,
         title: "Media-solovlar",
      },
      {
         id: 5,
         title: "JavaScript",
      },
      {
         id: 6,
         title: "Git, Github",
      },
      {
         id: 7,
         title: "Figma",
      },
   ];

   return (
      <>
         <section>
            <div className="custom-container mt-10 max-lg:mt-9">
               <div className="max-sm:block hidden mb-8">
                  <h1 className="text-4xl font-bold text-center mb-3">
                     С нуля до PRO за 4 месяца
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
               <div className="min-h-[550px] max-3xl:min-h-[450px] max-lg:min-h-[400px] max-sm:min-h-[300px] max-xs:min-h-[270px] flex p-5 max-xl:p-4 max-sm:p-2 rounded-[22px] max-md:rounded-2xl bg-[url('/assets/images/hero.jpg')] bg-cover bg-no-repeat">
                  <div className="w-full mt-auto rounded-[22px] max-md:rounded-[12px] px-6 max-xl:px-3 max-sm:px-2 backdrop-blur-[15px] bg-[#ffffffd9]">
                     <div className="max-sm:hidden py-6 max-2xl:py-4 text-center border-b border-[#1515151a]">
                        <h1 className="text-3xl max-lg:text-2xl font-bold">
                           С нуля до PRO за 4 месяца
                        </h1>
                        <p className="text-[#00000099] text-sm font-bold">
                           Wepro - это сеть IT-школ в Самарканде
                        </p>
                     </div>
                     <div className="px-14 max-3xl:px-9 max-2xl:px-5 max-xl:px-0 py-6 max-3xl:py-4 max-sm:py-2">
                        <ul className="flex items-center justify-between overflow-scroll no-scroll">
                           {[0, 1, 2, 3, 4, 5].map((item: number) => {
                              return (
                                 <li
                                    key={item}
                                    className="flex items-center gap-3 max-2xl:gap-2 py-3 px-7 max-3xl:px-5 max-2xl:px-4 rounded-lg cursor-pointer first:text-white first:bg-[#151FE1]"
                                 >
                                    <FaFigma
                                       size={20}
                                       className="max-lg:hidden"
                                    />
                                    <p className="text-sm font-bold text-nowrap">
                                       Веб-дизайн
                                    </p>
                                 </li>
                              );
                           })}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="xl:bg-[#F5F5F5] my-24 max-md:my-20">
            <div className="max-xl:block hidden mb-4 max-3xl:px-16 max-lg:px-4">
               <h2 className="max-w-[470px] text-5xl max-sm:text-4xl font-bold">
                  Почему выбирают именно Wepro
               </h2>
            </div>
            <div className="custom-container min-h-[541px] max-lg:min-h-[400px] grid gap-5 max-2xl:gap-3 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 py-14 max-xl:py-6  max-xl:rounded-3xl max-xl:bg-[#F5F5F5]">
               <div className="col-span-2 flex max-xl:hidden">
                  <h2 className="max-w-[470px] m-auto text-5xl font-bold">
                     Почему выбирают именно Wepro
                  </h2>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     11
                  </p>
                  <p className="max-sm:text-sm">программ обучения</p>
               </div>
               <div className="max-lg:hidden row-span-2 flex p-5 max-xl:p-3 bg-[url('/assets/images/man.jpg')] bg-cover bg-no-repeat bg-center rounded-[22px] overflow-hidden">
                  <div className="mt-auto flex gap-2">
                     <button className="bg-white px-6 rounded-xl">
                        <FaPlay size={20} color="black" />
                     </button>
                     <div className="backdrop-blur-[7px] rounded-xl p-3 max-xl:p-2 bg-[#ffffff99]">
                        <p className="text-sm font-bold">Посмотрите отзывы</p>
                        <p>Юсупов Мансур</p>
                     </div>
                  </div>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     2200+
                  </p>
                  <p className="max-sm:text-sm">выпускников за 3 года работы</p>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     24/7
                  </p>
                  <p className="max-sm:text-sm">доступ к учебному материалу</p>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     70%
                  </p>
                  <p className="max-sm:text-sm">
                     студентов находят работу после обучения
                  </p>
               </div>
            </div>
         </section>

         {/* <Courses arr={arr} /> */}

         <section>
            <div className="relative my-28 max-lg:my-20 mx-10 max-2xl:mx-5 max-xl:mx-0 rounded-[20px] max-sm:rounded-[30px] overflow-hidden bg-[#010018] z-10">
               <div className="gradient"></div>
               <div className="custom-container py-14">
                  <div className="md:text-center">
                     <h2 className="text-5xl max-xl:text-4xl leading-normal font-bold mb-4 max-xl:mb-2 text-white">
                        Отзывы выпускников
                     </h2>
                     <div className="max-w-[400px] max-md:max-w-[300px] md:m-auto">
                        <p className="text-[22px] max-lg:text-xl max-md:text-lg leading-normal font-medium text-[#A3A2AB]">
                           Посмотрите что говорят о нас выпускники курсов
                        </p>
                     </div>
                  </div>

                  <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 my-12 max-xl:my-6 mx-28 max-2xl:mx-10 max-xl:mx-0 py-12 max-xl:py-6 border-t border-[#ffffff66]">
                     {[0, 1, 2, 3].map((item: number) => {
                        return (
                           <div
                              key={item}
                              className="min-h-[420px] max-xl:min-h-[370px] max-lg:min-h-[300px] max-md:min-h-[260px] w-full flex rounded-xl p-5 max-lg:p-2 bg-[url('/assets/images/student.jpg')] bg-no-repeat bg-cover bg-center"
                           >
                              <div className="mt-auto px-5 max-lg:px-2 py-2 rounded-[4px] bg-white">
                                 <p className="text-sm font-medium">
                                    Алекс Маметов
                                 </p>
                              </div>
                           </div>
                        );
                     })}
                  </div>

                  <div className="w-fit m-auto">
                     <button className="bg-white flex items-center gap-2 p-2 rounded-lg">
                        <span className="p-2 rounded-lg bg-[#000]">
                           <MdArrowOutward
                              size={20}
                              color="white"
                              className=""
                           />
                        </span>
                        <span className="text-xl max-xl:text-lg font-bold">
                           Посмотреть все отзывы
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </section>

         {/* <section>
            <div className="custom-container">
               <div className="max-w-[720px] m-auto mb-[120px]">
                  <h2 className="text-[50px] font-bold leading-normal text-center">
                     Что еще входит в стоимость обучения
                  </h2>
               </div>
               <div className="max-w-[770px] m-auto flex flex-col gap-[44px]">
                  {[0, 1, 2, 3].map((item: number) => {
                     return (
                        <div
                           key={item}
                           className="bg-white rounded-[22px] shadow-[0px_4px_70px_0px_#00000033]"
                        >
                           <div className="text-center mb-[37px] px-20 pt-[26px]">
                              <h3 className="text-[#151FE1] text-[34px] font-bold mb-3">
                                 События
                              </h3>
                              <p className="text-[#A3A2AB] font-bold">
                                 Мы организовываем самые разные мероприятия
                                 внутри центров для наших студентов.
                              </p>
                           </div>
                           <div className="px-[30px]">
                              <Image
                                 src={"/assets/images/party.jpg"}
                                 width={1000}
                                 height={1000}
                                 alt="photo"
                              />
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section> */}

         <section>
            <div className="custom-container my-28 max-lg:my-24 max-sm:my-20">
               <div className="flex max-lg:flex-col items-center gap-20 max-2xl:gap-10 max-lg:gap-7 mb-11 max-lg:mb-7 mx-28 max-2xl:mx-20 max-xl:mx-0">
                  <div className="w-1/2 max-lg:w-full">
                     <h2 className="text-5xl max-2xl:text-4xl leading-normal font-bold mb-4">
                        Выберите филиал
                     </h2>
                     <p className="mb-8 max-lg:mb-4 text-[22px] max-2xl:text-xl font-medium text-[#A3A2AB]">
                        На данный момент оперируют 2 филиала в самых удобных
                        локациях Самарканде. Все филиалы оборудованы передовыми
                        технологиями, созданы лучшие условия для обучения на
                        высоком уровне.
                     </p>

                     <ul className="bg-[#F4F4F4] lg:w-fit mb-5 flex p-[3px] rounded-lg">
                        <li className="max-lg:w-full">
                           <button className="bg-[#151FE1] text-white w-full py-4 px-10 max-xs:px-5 text-sm font-bold rounded-lg">
                              Первый филиал
                           </button>
                        </li>
                        <li className="max-lg:w-full">
                           <button className="text-black w-full py-4 px-10 max-xs:px-5 text-sm font-bold rounded-lg">
                              Второй филиал
                           </button>
                        </li>
                     </ul>
                     <div className="flex items-center gap-4">
                        <div className="">
                           <FaLocationDot
                              color="#151FE1"
                              size={73}
                              className=""
                           />
                        </div>
                        <div className="">
                           <p className="text-[28px] font-bold">
                              Мирзо Улугбека, 12
                           </p>
                           <p>Ориентир: Trump Tower</p>
                        </div>
                     </div>
                  </div>
                  <div className="w-1/2 max-lg:w-full min-h-[400px] max-xl:min-h-[300px] h-full flex p-5 max-lg:p-3 rounded-2xl bg-[url('/assets/images/company.jpg')] bg-cover bg-left bg-no-repeat">
                     <button className="bg-white h-fit mt-auto p-3 rounded-[13px]">
                        Смотреть в галерее
                     </button>
                  </div>
               </div>
               <div className="w-fit lg:m-auto">
                  <button className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white py-4 px-[94px] text-[20px] font-bold rounded-[7px] border duration-150 ease-in">
                     Оставить заявку
                  </button>
               </div>
            </div>
         </section>

         <section className="bg-[#010018] relative z-10 mx-10 max-2xl:mx-5 max-xl:mx-0 rounded-[20px] overflow-hidden">
            <div className="gradient"></div>

            <div className="custom-container pt-14 pb-20">
               <div className="max-w-4xl w-full mx-auto md:text-center">
                  <h2 className="text-5xl max-xl:text-4xl mb-4 max-xl:mb-2 font-bold text-white">
                     Работы студентов
                  </h2>
                  <p className="text-[22px] max-2xl:text-xl max-lg:text-lg font-medium text-[#A3A2AB]">
                     Выпускники курса — настоящие профи. Мы упаковали некоторые
                     из кейсов, чтобы показать их вам: вы сможете так же. И даже
                     еще лучше.
                  </p>
               </div>

               <div className="mx-28 max-2xl:mx-10 max-xl:mx-0 my-12 max-xl:my-6 py-12 max-xl:py-6 px-11 max-2xl:px-0 border-t border-[#ffffff66]">
                  <ul className="bg-[#F4F4F4] flex items-center justify-between gap-1 mb-5 p-1 rounded-lg overflow-auto no-scroll">
                     <li className="">
                        <button className="bg-[#151FE1] text-white py-4 max-lg:py-3 px-8 max-3xl:px-5 max-lg:px-4 text-sm font-bold text-nowrap rounded-lg duration-150 ease-in">
                           Frontend-разработка
                        </button>
                     </li>
                     <li className="">
                        <button className="hover:bg-[#151FE1] text-black hover:text-white py-4 max-lg:py-3 px-8 max-3xl:px-5 max-lg:px-4 text-sm font-bold text-nowrap rounded-lg duration-100 ease-in">
                           Разработка под iOS/Android
                        </button>
                     </li>
                     <li className="">
                        <button className="hover:bg-[#151FE1] text-black hover:text-white py-4 max-lg:py-3 px-8 max-3xl:px-5 max-lg:px-4 text-sm font-bold text-nowrap rounded-lg duration-100 ease-in">
                           Графический дизайн
                        </button>
                     </li>
                     <li className="">
                        <button className="hover:bg-[#151FE1] text-black hover:text-white py-4 max-lg:py-3 px-8 max-3xl:px-5 max-lg:px-4 text-sm font-bold text-nowrap rounded-lg duration-100 ease-in">
                           Веб-дизайн
                        </button>
                     </li>
                     <li className="">
                        <button className="hover:bg-[#151FE1] text-black hover:text-white py-4 max-lg:py-3 px-8 max-3xl:px-5 max-lg:px-4 text-sm font-bold text-nowrap rounded-lg duration-100 ease-in">
                           SMM
                        </button>
                     </li>
                     <li className="">
                        <button className="hover:bg-[#151FE1] text-black hover:text-white py-4 max-lg:py-3 px-8 max-3xl:px-5 max-lg:px-4 text-sm font-bold text-nowrap rounded-lg duration-100 ease-in">
                           Мобилография
                        </button>
                     </li>
                  </ul>

                  <div className="rounded-xl overflow-hidden">
                     <Image
                        className="w-full h-full object-cover"
                        src={"/assets/images/students-project.jpg"}
                        width={1000}
                        height={1000}
                        alt="students-project"
                     />
                  </div>
               </div>

               <button className="bg-white m-auto flex items-center gap-[10px] p-[10px] rounded-[7px]">
                  <span className="p-2 rounded-[7px] bg-[#000]">
                     <MdArrowOutward size={20} color="white" className="" />
                  </span>
                  <span className="text-[20px] font-bold">
                     Посмотреть все отзывы
                  </span>
               </button>
            </div>
         </section>

         <section>
            <div className="custom-container my-28 max-lg:my-24 max-sm:my-20">
               <div className="max-w-4xl w-full mx-auto mb-[10px] md:text-center">
                  <h2 className="text-5xl max-xl:text-4xl font-bold mb-4">
                     Компании, где работают наши выпускники
                  </h2>
                  <p className="text-[22px] max-2xl:text-xl max-lg:text-lg font-medium text-[#A3A2AB]">
                     Собираем лучшие вакансии в отрасли, готовим к интервью и
                     рекомендуем вас компаниям-партнёрам.
                  </p>
               </div>

               <div className="px-28 max-2xl:px-10 max-xl:px-0">
                  <ul className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-7 py-10 max-md:py-7">
                     <li>
                        <Image
                           src={"/assets/images/company/it-park.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li>
                        <Image
                           src={"/assets/images/company/family-park.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li>
                        <Image
                           src={"/assets/images/company/b-marketing.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li>
                        <Image
                           src={"/assets/images/company/sfx-marketing.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                  </ul>
                  <ul className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-7 py-10 max-md:pb-7 max-md:pt-0 md:border-t md:border-b md:border-[#1515151a]">
                     <li>
                        <Image
                           src={"/assets/images/company/madad.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li>
                        <Image
                           src={"/assets/images/company/akma-respect.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li>
                        <Image
                           src={"/assets/images/company/samcity.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li>
                        <Image
                           src={"/assets/images/company/py.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                  </ul>
                  <ul className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-7 py-10 max-md:py-0">
                     <li className="max-md:hidden"></li>
                     <li>
                        <Image
                           src={"/assets/images/company/leader-print.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li>
                        <Image
                           src={"/assets/images/company/brandex.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li className="max-md:hidden"></li>
                  </ul>
               </div>
            </div>
         </section>

         <section>
            <div className="mx-10 max-2xl:mx-5 max-xl:mx-0 py-28 max-lg:py-24 max-sm:py-20 rounded-[20px] bg-[url('/assets/images/bg-form.jpg')] bg-no-repeat bg-cover">
               <div className="max-w-[660px] w-full mx-auto px-5 py-6 rounded-[20px] bg-white">
                  <div className="mb-5 p-7 pb-20 rounded-2xl bg-[url('/assets/images/bg-form-black.jpg')] bg-no-repeat bg-cover">
                     <h2 className="text-white text-5xl max-xl:text-4xl font-bold">
                        Записаться на курс
                     </h2>
                     <p className="text-white text-[22px] max-2xl:text-xl max-lg:text-lg font-medium">
                        Оставьте заявку и получите возможность попасть на
                        открытый урок абсолютно бесплатно.
                     </p>
                  </div>
                  <form>
                     <label className="flex flex-col mb-6">
                        <span className="text-[#A3A2AB] text-[15px] mb-[11px]">
                           Ваши имя и фамилия
                        </span>
                        <input
                           type="text"
                           placeholder="Имя и фамилия"
                           className="px-5 py-[18px] rounded-[9px] bg-[#F4F4F4]"
                        />
                     </label>
                     <label className="flex flex-col mb-6">
                        <span className="text-[#A3A2AB] text-[15px] mb-[11px]">
                           Номер телефона
                        </span>
                        <input
                           type="text"
                           placeholder="+998 ("
                           className="px-5 py-[18px] rounded-[9px] bg-[#F4F4F4]"
                        />
                     </label>
                     <button className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white w-full text-[18px] font-bold py-[18px] border rounded-[7px] duration-150 ease-in">
                        Отправить заявку
                     </button>
                     <div className="mt-[12px] mb-[30px] py-[10px] rounded-[7px] bg-[#F4F4F4]">
                        <p className="max-w-[270px] m-auto text-sm text-[#A3A2AB]">
                           Нажимая на кнопку, вы соглашаетесь на обработку
                           персональных данных
                        </p>
                     </div>
                  </form>
                  <div className="flex items-center justify-between pt-[30px] pb-1 border-t border-[#1515151a]">
                     <div className="">
                        <p className="text-[15px] font-bold text-[#A3A2AB]">
                           Или напишите нам в
                           <span className="text-[#000]"> Telegram</span>:
                        </p>
                     </div>
                     <Link
                        href={"#"}
                        className="flex items-center gap-2 p-2 rounded-lg bg-[#F4F4F4]"
                     >
                        <span className="bg-white p-2 rounded-lg">
                           <FaTelegram color={"#229ED9"} size={25} />
                        </span>
                        <span className="text-xl font-bold text-[#A3A2AB]">
                           t.me/weprouz
                        </span>
                     </Link>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="custom-container my-28 max-lg:my-24 max-sm:my-20">
               <div className="mb-12">
                  <h2 className="text-5xl max-xl:text-4xl font-bold text-center">
                     Ответы на вопросы
                  </h2>
               </div>
               <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-xl:gap-4">
                  <div className="bg-[#F4F4F4] rounded-xl py-6 px-4 max-sm:py-4 max-sm:px-3">
                     <div className="flex items-center mb-[10px]">
                        <p className="bg-[#E0E0E0] text-[#A3A2AB] text-[18px] font-bold py-[3px] px-[9px] rounded-[4px] max-sm:hidden">
                           01
                        </p>
                        <p className="font-bold sm:ml-[17px] flex-1">
                           Если я совсем ничего не знаю о дизайне, мне подойдет
                           курс?
                        </p>
                        <button className="bg-white ml-5 p-2 rounded-[4px]">
                           <AiOutlinePlus
                              size={26}
                              color="#6734EE"
                              className="rotate-45"
                           />
                        </button>
                     </div>
                     <div className="text-[#A3A2AB] max-sm:text-sm font-bold sm:px-14">
                        <p>
                           Конечно. Чтобы начать, достаточно просто владеть
                           компьютером. Мы обучаем с нуля теории и основным
                           дизайнерским программам, чтобы в конце курса вы стали
                           профессионалом.
                        </p>
                     </div>
                  </div>

                  <div className="bg-[#F4F4F4] h-fit rounded-[12px] py-6 px-[18px]">
                     <div className="flex items-center">
                        <p className="bg-[#E0E0E0] text-[#A3A2AB] text-[18px] font-bold py-[3px] px-[9px] rounded-[4px] max-sm:hidden">
                           02
                        </p>
                        <p className="font-bold sm:ml-[17px] flex-1">
                           Если я совсем ничего не знаю о дизайне, мне подойдет
                           курс?
                        </p>
                        <button className="bg-white ml-5 p-2 rounded-[4px]">
                           <AiOutlinePlus size={26} color="#6734EE" />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
