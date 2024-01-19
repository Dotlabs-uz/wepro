import Image from "next/image";
import Link from "next/link";
import { FaFigma, FaPlay, FaTelegram } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlinePlus } from "react-icons/ai";

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
            <div className="custom-container mt-10">
               <div className="min-h-[550px] flex p-5 rounded-[22px] bg-[url('/assets/images/hero.jpg')] bg-cover bg-no-repeat">
                  <div className="w-full mt-auto rounded-[22px] px-6 backdrop-blur-[15px] bg-[#ffffffd9]">
                     <div className="py-6 text-center border-b border-[#1515151a]">
                        <h1 className="text-[32px] font-bold mb-2">
                           С нуля до PRO за 4 месяца
                        </h1>
                        <p>Wepro - это сеть IT-школ в Самарканде</p>
                     </div>
                     <div className="px-14 py-6">
                        <ul className="flex items-center justify-between">
                           {[0, 1, 2, 3, 4, 5].map((item: number) => {
                              return (
                                 <li
                                    key={item}
                                    className="flex items-center gap-3 py-3 px-7 rounded-lg cursor-pointer first:text-white first:bg-[#151FE1]"
                                 >
                                    <FaFigma size={20} />
                                    <p className="text-sm font-bold">
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

         <section className="bg-[#F5F5F5] my-[100px]">
            <div className="custom-container min-h-[541px] grid gap-5 grid-cols-4 py-14">
               <div className="col-span-2 flex">
                  <h2 className="max-w-[470px] m-auto text-[50px] font-bold">
                     Почему выбирают именно Wepro
                  </h2>
               </div>
               <div className="bg-[#FFF] py-4 px-7 rounded-[22px]">
                  <p className="text-[96px] font-bold">11</p>
                  <p>программ обучения</p>
               </div>
               <div className="row-span-2 flex p-5 bg-[url('/assets/images/man.jpg')] bg-cover bg-no-repeat rounded-[22px] overflow-hidden">
                  <div className="mt-auto flex gap-2">
                     <button className="bg-white py-5 px-6 rounded-xl">
                        <FaPlay size={20} color="black" />
                     </button>
                     <div className="backdrop-blur-[7px] rounded-xl p-3 bg-[#ffffff99]">
                        <p className="text-sm font-bold">Посмотрите отзывы</p>
                        <p>Юсупов Мансур</p>
                     </div>
                  </div>
               </div>
               <div className="bg-[#FFF] py-4 px-7 rounded-[22px]">
                  <p className="text-[96px] font-bold">2200+</p>
                  <p>выпускников за 3 года работы</p>
               </div>
               <div className="bg-[#FFF] py-4 px-7 rounded-[22px]">
                  <p className="text-[96px] font-bold">24/7</p>
                  <p>доступ к учебному материалу</p>
               </div>
               <div className="bg-[#FFF] py-4 px-7 rounded-[22px]">
                  <p className="text-[96px] font-bold">70%</p>
                  <p>студентов находят работу после обучения</p>
               </div>
            </div>
         </section>

         <section>
            <div className="custom-container">
               <div className="mb-10">
                  <h2 className="text-[50px] leading-normal font-bold">
                     Авторские курсы
                  </h2>
               </div>
               <div className="grid grid-cols-3 gap-x-[30px] gap-y-[48px]">
                  {[0, 1, 2, 3, 4, 5].map((item: number) => {
                     return (
                        <div
                           key={item}
                           className="rounded-[20px] shadow-[0px_4px_5px_0px_#00000026]"
                        >
                           <div className="p-2">
                              <Image
                                 src={"/assets/images/course-img.jpg"}
                                 width={1000}
                                 height={1000}
                                 alt="course"
                              />
                           </div>
                           <div className="flex flex-col gap-7 px-[30px] pb-[26px] pt-[10px]">
                              <div className="">
                                 <h3 className="text-[28px] leading-normal font-bold mb-6">
                                    Frontend-разработка
                                 </h3>
                                 <ul className="flex flex-wrap gap-[6px] mb-5">
                                    {arr.map(
                                       (item: {
                                          id: number;
                                          title: string;
                                       }) => {
                                          return (
                                             <li
                                                key={item.id}
                                                className="px-4 py-1 text-sm leading-normal rounded-full border border-[#00000015]"
                                             >
                                                <p>{item.title}</p>
                                             </li>
                                          );
                                       }
                                    )}
                                 </ul>
                                 <p className="mb-2">
                                    Срок обучения: 6 месяцев
                                 </p>
                                 <p>Цена: 660,000 сум/месяц</p>
                              </div>
                              <div className="mt-auto">
                                 <button className="px-[30px] py-[12px] font-bold rounded-lg duration-100 ease-in border-2 border-black hover:bg-[#151FE1] hover:border-[#151FE1] hover:text-white">
                                    Записаться на курс
                                 </button>
                              </div>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>

         <section>
            <div className="relative my-[120px] mx-[40px] rounded-[20px] overflow-hidden bg-[#010018] z-10">
               <div className="w-[908.452px] h-[884.847px] absolute z-[-1] -bottom-1/2 left-1/2 -translate-x-1/2 gradient"></div>
               <div className="custom-container py-[60px]">
                  <div className="text-center">
                     <h2 className="text-[50px] leading-normal font-bold mb-4 text-white">
                        Отзывы выпускников
                     </h2>
                     <div className="max-w-[400px] m-auto">
                        <p className="text-[22px] leading-normal font-medium text-[#A3A2AB]">
                           Посмотрите что говорят о нас выпускники курсов
                        </p>
                     </div>
                  </div>

                  <div className="flex items-center gap-[18px] my-[50px] mx-[120px] py-[50px] border-t border-[#ffffff66]">
                     {[0, 1, 2, 3].map((item: number) => {
                        return (
                           <div
                              key={item}
                              className="min-h-[420px] w-full flex rounded-[10px] p-5 bg-[url('/assets/images/student.jpg')] bg-no-repeat bg-cover"
                           >
                              <div className="mt-auto px-[21px] py-2 rounded-[4px] bg-white">
                                 <p>Алекс Маметов</p>
                              </div>
                           </div>
                        );
                     })}
                  </div>

                  <div className="w-fit m-auto">
                     <button className="bg-white flex items-center gap-[10px] p-[10px] rounded-[7px]">
                        <span className="p-2 rounded-[7px] bg-[#000]">
                           <MdArrowOutward
                              size={20}
                              color="white"
                              className=""
                           />
                        </span>
                        <span className="text-[20px] font-bold">
                           Посмотреть все отзывы
                        </span>
                     </button>
                  </div>
               </div>
            </div>
         </section>

         <section>
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
         </section>

         <section>
            <div className="custom-container my-[120px]">
               <div className="flex items-center gap-[110px] mb-11">
                  <div className="w-1/2 ml-[110px]">
                     <h2 className="text-[50px] font-bold">Выберите филиал</h2>
                     <p className="mb-8 text-[22px] font-medium text-[#A3A2AB]">
                        На данный момент оперируют 2 филиала в самых удобных
                        локациях Самарканде. Все филиалы оборудованы передовыми
                        технологиями, созданы лучшие условия для обучения на
                        высоком уровне.
                     </p>
                     <ul className="bg-[#F4F4F4] w-fit mb-5 flex p-[3px] rounded-lg">
                        <li>
                           <button className="bg-[#151FE1] text-white py-4 px-10 text-sm font-bold rounded-[9px]">
                              Первый филиал
                           </button>
                        </li>
                        <li>
                           <button className="bg- text-black py-4 px-10 text-sm font-bold rounded-[9px]">
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
                  <div className="max-w-[600px] w-full min-h-[400px] h-full flex mr-[110px] p-5 bg-[url('/assets/images/company.jpg')] bg-cover bg-no-repeat">
                     <button className="bg-white h-fit mt-auto p-3 rounded-[13px]">
                        Смотреть в галерее
                     </button>
                  </div>
               </div>
               <div className="w-fit m-auto">
                  <button className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white py-4 px-[94px] text-[20px] font-bold rounded-[7px] border duration-150 ease-in">
                     Оставить заявку
                  </button>
               </div>
            </div>
         </section>

         <section className="bg-[#010018] relative z-10 mx-10 rounded-[20px] overflow-hidden">
            <div className="w-[908.452px] h-[884.847px] absolute z-[-1] -bottom-1/2 left-1/2 -translate-x-1/2 gradient"></div>

            <div className="custom-container pt-[60px] pb-[89px]">
               <div className="max-w-[847px] w-full mx-auto mb-[50px] text-center">
                  <h2 className="text-[50px] font-bold text-white">
                     Работы студентов
                  </h2>
                  <p className="text-[22px] font-medium text-[#A3A2AB]">
                     Выпускники курса — настоящие профи. Мы упаковали некоторые
                     из кейсов, чтобы показать их вам: вы сможете так же. И даже
                     еще лучше.
                  </p>
               </div>

               <div className="mx-[112px] py-[50px] px-[46px] mb-[44px] border-t border-[#ffffff66]">
                  <ul className="bg-[#F4F4F4] flex items-center justify-between gap-[3px] mb-5 p-[3px] rounded-lg">
                     <li className="">
                        <button className="bg-[#151FE1] text-white py-4 px-[33px] text-sm font-bold rounded-[9px] duration-150 ease-in">
                           Frontend-разработка
                        </button>
                     </li>
                     <li className="">
                        <button className="hover:bg-[#151FE1] text-black hover:text-white py-4 px-[33px] text-sm font-bold rounded-[9px] duration-100 ease-in">
                           Разработка под iOS/Android
                        </button>
                     </li>
                     <li className="">
                        <button className="hover:bg-[#151FE1] text-black hover:text-white py-4 px-[33px] text-sm font-bold rounded-[9px] duration-100 ease-in">
                           Графический дизайн
                        </button>
                     </li>
                     <li className="">
                        <button className="hover:bg-[#151FE1] text-black hover:text-white py-4 px-[33px] text-sm font-bold rounded-[9px] duration-100 ease-in">
                           Веб-дизайн
                        </button>
                     </li>
                     <li className="">
                        <button className="hover:bg-[#151FE1] text-black hover:text-white py-4 px-[33px] text-sm font-bold rounded-[9px] duration-100 ease-in">
                           SMM
                        </button>
                     </li>
                     <li className="">
                        <button className="hover:bg-[#151FE1] text-black hover:text-white py-4 px-[33px] text-sm font-bold rounded-[9px] duration-100 ease-in">
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
            <div className="custom-container my-[120px]">
               <div className="max-w-[847px] w-full mx-auto mb-[10px] text-center">
                  <h2 className="text-[50px] font-bold">
                     Компании, где работают наши выпускники
                  </h2>
                  <p className="text-[22px] font-medium text-[#A3A2AB]">
                     Собираем лучшие вакансии в отрасли, готовим к интервью и
                     рекомендуем вас компаниям-партнёрам.
                  </p>
               </div>
               <div className="px-[112px]">
                  <ul className="flex items-center justify-between py-10">
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
                  <ul className="flex items-center justify-between py-10 border-t border-b border-[#1515151a]">
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
                  <ul className="grid grid-cols-4 py-10">
                     <li></li>
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
                     <li></li>
                  </ul>
               </div>
            </div>
         </section>

         <section>
            <div className="mx-10 py-[110px] rounded-[20px] bg-[url('/assets/images/bg-form.jpg')] bg-no-repeat bg-cover">
               <div className="max-w-[660px] w-full mx-auto px-5 py-6 rounded-[20px] bg-white">
                  <div className="mb-[21px] p-[30px] pb-[86px] rounded-[17px] bg-[url('/assets/images/bg-form-black.jpg')] bg-no-repeat bg-cover">
                     <h2 className="text-white text-[50px] font-bold">
                        Записаться на курс
                     </h2>
                     <p className="text-white text-[22px] font-medium">
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
                           <span className="text-[#000]">Telegram</span>:
                        </p>
                     </div>
                     <Link href={"#"} className="flex">
                        <FaTelegram color={"#229ED9"} size={25} />
                        <span>t.me/weprouz</span>
                     </Link>
                  </div>
               </div>
            </div>
         </section>

         <section>
            <div className="custom-container my-[120px]">
               <div className="mb-[50px]">
                  <h2 className="text-[50px] font-bold text-center">
                     Ответы на вопросы
                  </h2>
               </div>
               <div className="grid grid-cols-2 gap-6">
                  <div className="bg-[#F4F4F4] rounded-[12px] py-6 px-[18px]">
                     <div className="flex items-center mb-[10px]">
                        <p className="bg-[#E0E0E0] text-[#A3A2AB] text-[18px] font-bold py-[3px] px-[9px] rounded-[4px]">
                           01
                        </p>
                        <p className="font-bold ml-[17px] flex-1">
                           Если я совсем ничего не знаю о дизайне, мне подойдет
                           курс?
                        </p>
                        <button className="bg-white p-[7px] rounded-[4px]">
                           <AiOutlinePlus
                              size={26}
                              color="#6734EE"
                              className="rotate-45"
                           />
                        </button>
                     </div>
                     <div className="text-[#A3A2AB] font-bold px-14">
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
                        <p className="bg-[#E0E0E0] text-[#A3A2AB] text-[18px] font-bold py-[3px] px-[9px] rounded-[4px]">
                           02
                        </p>
                        <p className="font-bold ml-[17px] flex-1">
                           Если я совсем ничего не знаю о дизайне, мне подойдет
                           курс?
                        </p>
                        <button className="bg-white p-[7px] rounded-[4px]">
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
