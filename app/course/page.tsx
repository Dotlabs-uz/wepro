import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

interface CourseProps {}

const Course: React.FC<CourseProps> = () => {
   return (
      <>
         <section className="relative hero-gradient">
            <div className="flex gap-16">
               <div className="w-1/2 max-h-[750px] relative">
                  <Image
                     className="w-full h-full object-cover"
                     src={"/assets/images/hero-2.jpg"}
                     width={1000}
                     height={1000}
                     alt="photo"
                  />
                  <div className="h-full absolute z-10 left-0 bottom-0 w-full hero-img-gradient"></div>
               </div>
               <div className="max-w-2xl w-full mr-auto py-12">
                  <h1 className="text-5xl max-xl:text-4xl font-bold leading-normal mb-7 text-white">
                     Станьте дизайнером с нуля до PRO с гарантией
                     трудоустройства
                  </h1>

                  <h3 className="text-2xl leading-normal mb-5 text-white">
                     Научитесь основам 3D моделирования и зарабатывайте на
                     создании графики для дизайна, кино, игр и интерьера.
                  </h3>

                  <ul className="max-w-[420px] flex flex-wrap items-center gap-x-3 gap-y-2 mb-14 text-white">
                     <li className="text-sm py-2 px-5 rounded-lg border border-[#ffffff30]">
                        Flutter
                     </li>
                     <li className="text-sm py-2 px-5 rounded-lg border border-[#ffffff30]">
                        Dart
                     </li>
                     <li className="text-sm py-2 px-5 rounded-lg border border-[#ffffff30]">
                        Android studio
                     </li>
                     <li className="text-sm py-2 px-5 rounded-lg border border-[#ffffff30]">
                        Axios, API
                     </li>
                     <li className="text-sm py-2 px-5 rounded-lg border border-[#ffffff30]">
                        Git, Github
                     </li>
                     <li className="text-sm py-2 px-5 rounded-lg border border-[#ffffff30]">
                        Figma
                     </li>
                     <li className="text-sm py-2 px-5 rounded-lg border border-[#ffffff30]">
                        ООП
                     </li>
                  </ul>

                  <div className="bg-white py-4 px-7 rounded-3xl">
                     <div className="flex items-center justify-between mb-5">
                        <div className="">
                           <p className="font-bold leading-normal">6 месяцев</p>
                           <p className="text-sm font-medium text-[#00000099]">
                              Длительность курса
                           </p>
                        </div>
                        <div className="">
                           <p className="font-bold leading-normal">
                              775,000 сум
                           </p>
                           <p className="text-sm font-medium text-[#00000099]">
                              Стоимость до 21 февраля
                           </p>
                        </div>
                        <div className="">
                           <p className="font-bold leading-normal">
                              48 уроков, 72 часа
                           </p>
                           <p className="text-sm font-medium text-[#00000099]">
                              Количество уроков
                           </p>
                        </div>
                     </div>
                     <div className="">
                        <button className="bg-black text-white w-full text-xl font-bold py-4 rounded-lg">
                           Начать обучение
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            <div className="custom-container py-16">
               <div className="mb-5">
                  <h3 className="text-3xl font-bold text-center text-white">
                     Зачем становиться дизайнером?
                  </h3>
               </div>
               <div className="flex items-center justify-center gap-5">
                  <div className="bg-[#F4F4F4] w-fit flex items-center gap-4 py-2 pl-3 pr-7 rounded-3xl">
                     <div className="bg-white p-3 rounded-2xl">
                        <Image
                           src={"/assets/icons/vacancies.svg"}
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
                           src={"/assets/icons/dollar.svg"}
                           width={33}
                           height={33}
                           alt="icon"
                        />
                     </div>
                     <div className="">
                        <p className="font-bold">$600-1500</p>
                        <p className="text-[#00000066] text-sm font-medium">
                           Диапазон зарплат
                        </p>
                     </div>
                  </div>
                  <div className="bg-[#F4F4F4] w-fit flex items-center gap-4 py-2 pl-3 pr-7 rounded-3xl">
                     <div className="bg-white p-3 rounded-2xl">
                        <Image
                           src={"/assets/icons/chart.svg"}
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
            <div className="custom-container my-28">
               <div className="mb-9">
                  <h2 className="text-5xl font-bold text-center">
                     Вы сможете создавать
                  </h2>
               </div>
               <div className="grid grid-cols-3 gap-6">
                  <div className="row-span-2 p-1 shadow-md rounded-[22px] overflow-hidden">
                     <Image
                        src={"/assets/images/created.jpg"}
                        width={1000}
                        height={1000}
                        alt="photo"
                     />
                  </div>
                  <div className="p-1 shadow-md rounded-[22px] overflow-hidden">
                     <Image
                        src={"/assets/images/books.jpg"}
                        width={1000}
                        height={1000}
                        alt="photo"
                     />
                  </div>
                  <div className="p-1 shadow-md rounded-[22px] overflow-hidden">
                     <Image
                        src={"/assets/images/books.jpg"}
                        width={1000}
                        height={1000}
                        alt="photo"
                     />
                  </div>
                  <div className="p-1 shadow-md rounded-[22px] overflow-hidden">
                     <Image
                        src={"/assets/images/books.jpg"}
                        width={1000}
                        height={1000}
                        alt="photo"
                     />
                  </div>
                  <div className="p-1 shadow-md rounded-[22px] overflow-hidden">
                     <Image
                        src={"/assets/images/books.jpg"}
                        width={1000}
                        height={1000}
                        alt="photo"
                     />
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="bg-[#D6001C] mx-10 rounded-3xl">
               <div className="custom-container py-14">
                  <div className="">
                     <h2 className="text-5xl font-bold leading-normal mb-8 text-white">
                        Вакансии в Узбекистане
                     </h2>
                     <div className="flex items-center gap-24 mb-11">
                        <div className="">
                           <p className="text-xl font-medium leading-normal text-white">
                              От 3,000,000 сум
                           </p>
                           <p className="text-lg font-medium leading-normal text-[#E0E0E0]">
                              доход начинающего Графического дизайнера
                           </p>
                        </div>
                        <div className="">
                           <p className="text-xl font-medium leading-normal text-white">
                              Более 3,000 вакансий
                           </p>
                           <p className="text-lg font-medium leading-normal text-[#E0E0E0]">
                              открыто на данный момент
                           </p>
                        </div>
                     </div>

                     <div className="flex items-center gap-3">
                        <Image
                           src={"/assets/icons/hh.svg"}
                           width={48}
                           height={48}
                           alt="hh"
                        />
                        <p className="text-xl font-medium text-white">
                           HeadHunder Uzbekistan
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="bg-[#010018] relative z-10 rounded-3xl mx-10 my-28 overflow-hidden">
               <div className="gradient"></div>
               <div className="custom-container pt-14 pb-24 ">
                  <div className="mb-12">
                     <h2 className="text-5xl font-bold text-center mb-4 text-white">
                        Кем работают выпускники школы
                     </h2>
                     <p className="max-w-2xl m-auto text-xl font-medium text-center text-[#A3A2AB]">
                        После курса вы сможете работать в разных сферах и
                        выбрать ту, которая нравится больше всего. У вас будет
                        достаточно навыков для нескольких профессий.
                     </p>
                  </div>
                  <div className="grid grid-cols-3 gap-6 mx-28 py-12 border-y border-[#ffffff66]">
                     {[0, 1, 2, 3, 4].map((item: number) => {
                        return (
                           <div className="p-6 rounded-3xl bg-gradient-to-b from-[47%] from-[#f4f4f41a] to-[100%] to-[#f4f4f408]">
                              <div className="mb-11">
                                 <p className="text-white text-2xl leading-normal font-bold mb-2">
                                    Веб-дизайнер
                                 </p>
                                 <p className="text-white bg-[#ffffff99] w-fit px-2 py-1 text-base leading-normal font-bold rounded-lg">
                                    от 900$/месяц
                                 </p>
                              </div>

                              <div className="">
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
                     <div className="mb-9 mt-12">
                        <h3 className="text-2xl font-bold text-center text-white">
                           Дополнительные профессии:
                        </h3>
                     </div>
                     <div className="grid grid-cols-2 gap-x-14 mx-52 mb-24">
                        {[0, 1, 2, 3, 4].map((item: number) => {
                           return (
                              <div className="flex items-center justify-between py-4 border-b border-[#ffffff66]">
                                 <p className="text-[#A3A2AB] font-bold">
                                    0{item + 1}.
                                 </p>
                                 <p className="text-white text-2xl font-bold">
                                    Веб-дизайнер
                                 </p>
                                 <p className="p-1 px-2 font-bold rounded-lg text-white bg-[#ffffff99]">
                                    от 900$/месяц
                                 </p>
                              </div>
                           );
                        })}
                     </div>
                     <button className="bg-white flex items-center gap-2 m-auto p-2 rounded-lg">
                        <span className="p-2 rounded-lg bg-[#000]">
                           <MdArrowOutward
                              size={20}
                              color="white"
                              className=""
                           />
                        </span>
                        <span className="text-xl max-xl:text-lg font-bold">
                           Записаться на курс “Графический дизайнер”
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="custom-container">
               <div className="mb-14">
                  <h2 className="text-5xl font-bold text-center">
                     Кому подойдет курс
                  </h2>
               </div>
               <div className="grid grid-cols-3 gap-6 mx-28">
                  {[0, 1, 2, 3, 4, 5].map((item: number) => {
                     return (
                        <div className="bg-[#3D2582] p-6 rounded-3xl">
                           <p className="text-xl font-bold mb-28 text-white">
                              0{item + 1}.
                           </p>
                           <div className="max-w-[235px]">
                              <p className="text-xl font-bold text-white">
                                 Новичкам
                              </p>
                              <p className="text-lg text-[#E0E0E0]">
                                 Вы сможете освоить востребованную профессию за
                                 2 месяца
                              </p>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>

         <section>
            <div className="bg-[#010018]">
               <div className="custom-container my-28">
                  <div className="mx-28 max-2xl:mx-10 max-xl:mx-0">
                     <div className="pt-14 pb-12 text-center">
                        <h2 className="text-white text-5xl font-bold mb-4">
                           Отзывы выпускников
                        </h2>
                        <p className="text-[#A3A2AB] max-w-xs m-auto text-xl font-medium">
                           Посмотрите что говорят о нас выпускники курсов
                        </p>
                     </div>

                     <div className="grid grid-cols-4 max-md:grid-cols-2 gap-4 py-12 max-xl:py-6 border-y border-[#ffffff66]">
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((item: number) => {
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
                  </div>

                  <div className="mx-28 max-2xl:mx-10 max-xl:mx-0">
                     <div className="pt-14 pb-12 text-center">
                        <h2 className="text-white text-5xl font-bold mb-4">
                           Учебная программа
                        </h2>
                        <div className="flex items-center justify-center gap-2">
                           <p className="py-1 px-3 text-lg font-bold rounded-lg text-white bg-[#26145D]">
                              4 месяца
                           </p>
                           <p className="py-1 px-3 text-lg font-bold rounded-lg text-white bg-[#26145D]">
                              32 урока
                           </p>
                           <p className="py-1 px-3 text-lg font-bold rounded-lg text-white bg-[#26145D]">
                              48 часов
                           </p>
                           <p className="py-1 px-3 text-lg font-bold rounded-lg text-white bg-[#26145D]">
                              8 контрольных
                           </p>
                        </div>
                     </div>

                     <div className="bg-[#f4f4f40d] mb-20 p-12 rounded-3xl">
                        {[0, 1, 2, 3, 4, 5].map((item: number) => {
                           return (
                              <div className="flex items-center gap-16 py-5 cursor-pointer border-b last:border-none border-[#ffffff66]">
                                 <p className="font-bold text-[#E0E0E0]">
                                    0{item + 1}.
                                 </p>
                                 <p className="text-lg text-white">
                                    Принципы графического дизайна
                                 </p>
                              </div>
                           );
                        })}
                     </div>
                  </div>

                  <div className="mx-28 max-2xl:mx-10 max-xl:mx-0 pt-20 pb-14 border-t border-[#ffffff66]">
                     <div className="mb-12">
                        <h2 className="text-white text-center">
                           Кураторы курса
                        </h2>
                     </div>

                     <div className="flex items-center justify-center gap-6">
                        {[0, 1].map((item: number) => {
                           return (
                              <div
                                 key={item}
                                 className="max-w-xs min-h-[420px] max-xl:min-h-[370px] max-lg:min-h-[300px] max-md:min-h-[260px] w-full flex rounded-xl p-5 max-lg:p-2 bg-[url('/assets/images/student.jpg')] bg-no-repeat bg-cover bg-center"
                              >
                                 <div className="mt-auto px-5 max-lg:px-2 py-2 rounded-xl backdrop-blur-[6px] bg-[#ffffff99]">
                                    <p className="text-sm font-bold">
                                       3 года в дизайне
                                    </p>
                                    <p className="">Юсупов Зайниддин</p>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Course;
