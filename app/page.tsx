import Image from "next/image";
import Link from "next/link";

import ScrollAnimation from "@/container/ScrollAnimation";
import Branch from "@/container/Branch";
import StudentWorks from "@/container/StudentWorks";
import Course from "@/components/children/Course";

import { FaFigma, FaPlay, FaTelegram } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

export default function Home() {
   const party = [
      {
         id: 0,
         title: "События",
         dcr: "Мы организовываем самые разные мероприятия внутри центров для наших студентов.",
         img: "party.jpg",
         scale: 1,
      },
      {
         id: 1.5,
         title: "События",
         dcr: "Мы организовываем самые разные мероприятия внутри центров для наших студентов.",
         img: "party.jpg",
         scale: 1.1,
      },
      {
         id: 2,
         title: "События",
         dcr: "Мы организовываем самые разные мероприятия внутри центров для наших студентов.",
         img: "party.jpg",
         scale: 1.2,
      },
      {
         id: 3,
         title: "События",
         dcr: "Мы организовываем самые разные мероприятия внутри центров для наших студентов.",
         img: "party.jpg",
         scale: 1.3,
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

         <section>
            <div className="">
               <div className="custom-container mb-10 max-lg:mb-3">
                  <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl leading-normal font-bold">
                     Авторские курсы
                  </h2>
               </div>
               <div className="custom-container py-3 max-sm:py-2 overflow-scroll no-scroll">
                  <div className="max-lg:min-w-[950px] flex items-center gap-7 max-2xl:gap-5 mb-7 max-2xl:mb-5">
                     {[0, 1, 2].map((item: number) => (
                        <Course key={item} />
                     ))}
                  </div>
                  <div className="max-lg:min-w-[950px] flex items-center gap-7 max-2xl:gap-5">
                     {[0, 1, 2].map((item: number) => (
                        <Course key={item} />
                     ))}
                  </div>
               </div>
            </div>
         </section>

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

         <section>
            <div className="">
               <div className="max-w-[720px] m-auto mb-28 max-xl:mb-16 max-md:mb-5 px-4">
                  <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold leading-normal md:text-center">
                     Что еще входит в стоимость обучения
                  </h2>
               </div>

               <div className="relative flex flex-col gap-11">
                  {party.map(
                     (item: {
                        id: number;
                        title: string;
                        dcr: string;
                        img: string;
                        scale: number;
                     }) => {
                        return <ScrollAnimation key={item.id} item={item} />;
                     }
                  )}
               </div>
            </div>
         </section>

         <section>
            <Branch />
         </section>

         <section className="bg-[#010018] relative z-10 mx-10 max-2xl:mx-5 max-xl:mx-0 rounded-[20px] overflow-hidden">
            <div className="gradient"></div>
            <StudentWorks />
         </section>

         <section className="">
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
                  <ul className="grid grid-cols-4 max-md:grid-cols-3 max-md:gap-2 py-10 max-md:py-0">
                     <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                        <Image
                           className="max-md:scale-[1.7]"
                           src={"/assets/images/company/it-park.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                        <Image
                           className="max-md:scale-[1.7]"
                           src={"/assets/images/company/family-park.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                        <Image
                           className="max-md:scale-[1.7]"
                           src={"/assets/images/company/b-marketing.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                        <Image
                           className="max-md:scale-[1.7]"
                           src={"/assets/images/company/sfx-marketing.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                        <Image
                           className="max-md:scale-[1.7]"
                           src={"/assets/images/company/madad.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                        <Image
                           className="max-md:scale-[1.7]"
                           src={"/assets/images/company/akma-respect.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                        <Image
                           className="max-md:scale-[1.7]"
                           src={"/assets/images/company/samcity.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                        <Image
                           className="max-md:scale-[1.7]"
                           src={"/assets/images/company/py.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li className="max-md:hidden"></li>
                     <li className="overflow-hidden py-5">
                        <Image
                           className="max-md:scale-[1.7]"
                           src={"/assets/images/company/leader-print.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li className="md:hidden"></li>
                     <li className="overflow-hidden py-5">
                        <Image
                           className="max-md:scale-[1.7]"
                           src={"/assets/images/company/brandex.svg"}
                           width={1000}
                           height={1000}
                           alt="company"
                        />
                     </li>
                     <li className=""></li>
                  </ul>
               </div>
            </div>
         </section>

         <section>
            <div className="mx-10 max-2xl:mx-5 max-xl:mx-0 py-28 max-lg:py-14 max-sm:py-0 rounded-[20px] md:bg-[url('/assets/images/bg-form.jpg')] bg-no-repeat bg-cover">
               <div className="max-w-[660px] w-full mx-auto px-5 py-6 rounded-[20px] max-md:shadow-[0px_4px_20px_0px_#15151526] bg-white">
                  <div className="mb-5 p-7 pb-20 max-md:pb-12 rounded-2xl bg-[url('/assets/images/bg-form-black.jpg')] bg-no-repeat bg-cover">
                     <h2 className="text-white text-5xl max-xl:text-4xl max-md:text-3xl font-bold">
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
                        <p className="max-md:text-xs font-bold text-[#A3A2AB]">
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
                        <span className="text-xl max-sm:text-base font-bold text-[#A3A2AB]">
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
                  <h2 className="text-5xl max-xl:text-4xl font-bold md:text-center">
                     Ответы на вопросы
                  </h2>
               </div>
               <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-xl:gap-4">
                  <div className="bg-[#F4F4F4] rounded-xl py-6 px-4 max-sm:py-4 max-sm:px-3">
                     <div className="max-sm:mb-2">
                        <div className="flex items-center max-sm:justify-between mb-2 max-md:mb-1">
                           <p className="bg-[#E0E0E0] text-[#A3A2AB] text-[18px] font-bold py-[3px] px-[9px] rounded-[4px]">
                              01
                           </p>
                           <p className="font-bold sm:ml-[17px] flex-1 max-sm:hidden">
                              Если я совсем ничего не знаю о дизайне, мне
                              подойдет курс?
                           </p>
                           <button className="bg-white ml-5 p-2 rounded-[4px]">
                              <AiOutlinePlus
                                 size={26}
                                 color="#6734EE"
                                 className="rotate-45"
                              />
                           </button>
                        </div>
                        <div className="sm:hidden">
                           <p className="font-bold sm:ml-[17px] flex-1">
                              Если я совсем ничего не знаю о дизайне, мне
                              подойдет курс?
                           </p>
                        </div>
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
                     <div className="max-sm:mb-2">
                        <div className="flex items-center max-sm:justify-between mb-2 max-md:mb-1">
                           <p className="bg-[#E0E0E0] text-[#A3A2AB] text-[18px] font-bold py-[3px] px-[9px] rounded-[4px]">
                              01
                           </p>
                           <p className="font-bold sm:ml-[17px] flex-1 max-sm:hidden">
                              Если я совсем ничего не знаю о дизайне, мне
                              подойдет курс?
                           </p>
                           <button className="bg-white ml-5 p-2 rounded-[4px]">
                              <AiOutlinePlus
                                 size={26}
                                 color="#6734EE"
                                 className="rotate-45"
                              />
                           </button>
                        </div>
                        <div className="sm:hidden">
                           <p className="font-bold sm:ml-[17px] flex-1">
                              Если я совсем ничего не знаю о дизайне, мне
                              подойдет курс?
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
