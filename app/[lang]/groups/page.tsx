import Course from "@/components/children/Course";
import Tabs from "@/components/children/Tabs";
import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

interface PageProps { }

const Page: React.FC<PageProps> = () => {
   // const tabs = [
   //    {
   //       id: 0,
   //       title: "Все курсы",
   //    },
   //    {
   //       id: 1,
   //       title: "Программирование",
   //    },
   //    {
   //       id: 2,
   //       title: "Дизайн",
   //    },
   //    {
   //       id: 3,
   //       title: "Другое",
   //    },
   // ];

   return (
      <>
         <section>
            <div className="mb-28 max-xl:mb-20 max-md:mb-5">
               <div className="custom-container my-10 max-md:my-7">
                  <h2 className="max-w-2xl text-5xl max-lg:text-4xl max-md:text-3xl leading-normal font-bold mb-10 max-xl:mb-6">
                     Запишитесь в группу, которая скоро откроется
                  </h2>

                  {/* <div className="md:w-fit rounded-lg overflow-scroll no-scroll">
                     <Tabs tabs={tabs} id={1} />
                  </div> */}
               </div>

               <div className="custom-container py-3 max-sm:py-2 overflow-scroll no-scroll">
                  <div className="w-fit max-lg:max-w-[300px] lg:grid lg:grid-cols-3 flex items-center gap-7 max-2xl:gap-5 mb-7 max-2xl:mb-5">
                     {[0, 1, 2].map((item: number) => {
                        return (
                           <div className="max-lg:min-w-[300px] rounded-[20px] shadow-[0px_4px_5px_0px_#00000026]">
                              <div className="p-2">
                                 <Image
                                    src={"/images/course-img.jpg"}
                                    width={1000}
                                    height={1000}
                                    alt="course"
                                 />
                              </div>
                              <div className="px-7 max-2xl:px-4 pb-6 pt-3 max-sm:p-5">
                                 <h3 className="text-3xl max-2xl:text-2xl max-xl:text-xl leading-normal font-bold mb-5 max-2xl:mb-3">
                                    Frontend-разработка
                                 </h3>
                                 <p className="max-xl:text-sm mb-1">
                                    Понедельник-среда-пятница
                                 </p>
                                 <p className="max-xl:text-sm mb-1">
                                    Вечер, 18:00-17:30
                                 </p>
                                 <p className="max-xl:text-sm mb-7 max-xl:mb-4">
                                    575,000 сум/месяц
                                 </p>
                                 <div className="mt-auto">
                                    <button className="max-md:w-full px-7 max-xl:px-5 py-3 max-xl:py-2 max-sm:p-3 max-lg:text-sm font-bold rounded-lg duration-100 ease-in border-2 hover:bg-transparent bg-[#151FE1] hover:border-black text-white hover:text-black">
                                       Хочу в эту группу!
                                    </button>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
                  <div className="w-fit lg:grid lg:grid-cols-3 flex items-center gap-7 max-2xl:gap-5">
                     {[0].map((item: number) => {
                        return (
                           <div className="max-lg:max-w-[300px] rounded-[20px] shadow-[0px_4px_5px_0px_#00000026]">
                              <div className="p-2">
                                 <Image
                                    src={"/images/course-img.jpg"}
                                    width={1000}
                                    height={1000}
                                    alt="course"
                                 />
                              </div>
                              <div className="px-7 max-2xl:px-4 pb-6 pt-3 max-sm:p-5">
                                 <h3 className="text-3xl max-2xl:text-2xl max-xl:text-xl leading-normal font-bold mb-5 max-2xl:mb-3">
                                    Frontend-разработка
                                 </h3>
                                 <p className="max-xl:text-sm mb-1">
                                    Понедельник-среда-пятница
                                 </p>
                                 <p className="max-xl:text-sm mb-1">
                                    Вечер, 18:00-17:30
                                 </p>
                                 <p className="max-xl:text-sm mb-7 max-xl:mb-4">
                                    575,000 сум/месяц
                                 </p>
                                 <div className="mt-auto">
                                    <button className="max-md:w-full px-7 max-xl:px-5 py-3 max-xl:py-2 max-sm:p-3 max-lg:text-sm font-bold rounded-lg duration-100 ease-in border-2 hover:bg-transparent bg-[#151FE1] hover:border-black text-white hover:text-black">
                                       Хочу в эту группу!
                                    </button>
                                 </div>
                              </div>
                           </div>
                        );
                     })}
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Page;
