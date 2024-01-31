import Course from "@/components/children/Course";
import Tabs from "@/components/children/Tabs";

interface CoursesProps {}

const Courses: React.FC<CoursesProps> = () => {
   const tabs = [
      {
         id: 0,
         title: "Все курсы",
      },
      {
         id: 1,
         title: "Программирование",
      },
      {
         id: 2,
         title: "Дизайн",
      },
      {
         id: 3,
         title: "Другое",
      },
   ];

   return (
      <>
         <section>
            <div className="mb-28 max-xl:mb-20 max-md:mb-10">
               <div className="custom-container my-14 max-xl:my-10 max-md:my-7">
                  <h2 className="max-w-xl text-5xl max-xl:text-4xl max-md:text-3xl leading-normal font-bold mb-10 max-xl:mb-6">
                     В Wepro мы обучаем профессиям будущего
                  </h2>

                  <div className="md:w-fit rounded-lg overflow-scroll no-scroll">
                     {/* <button className="py-4 max-xl:py-3 px-16 max-xl:px-10 max-md:text-sm font-bold text-nowrap rounded-lg text-[#FFF] bg-[#151FE1] duration-100 ease-in">
                        Все курсы
                     </button>
                     <button className="py-4 max-xl:py-3 px-16 max-xl:px-10 max-md:text-sm font-bold text-nowrap rounded-lg text-[#000] hover:text-white hover:bg-[#151FE1] duration-100 ease-in">
                        Программирование
                     </button>
                     <button className="py-4 max-xl:py-3 px-16 max-xl:px-10 max-md:text-sm font-bold text-nowrap rounded-lg text-[#000] hover:text-white hover:bg-[#151FE1] duration-100 ease-in">
                        Дизайн
                     </button>
                     <button className="py-4 max-xl:py-3 px-16 max-xl:px-10 max-md:text-sm font-bold text-nowrap rounded-lg text-[#000] hover:text-white hover:bg-[#151FE1] duration-100 ease-in">
                        Другое
                     </button> */}
                     <Tabs tabs={tabs} id={1} />
                  </div>
               </div>

               <div className="custom-container py-3 max-sm:py-2 overflow-scroll no-scroll">
                  <div className="w-fit lg:grid lg:grid-cols-3 flex items-center gap-7 max-2xl:gap-5 mb-7 max-2xl:mb-5">
                     {[0, 1, 2].map((item: number) => (
                        <Course key={item} />
                     ))}
                  </div>
                  <div className="w-fit lg:grid lg:grid-cols-3 flex items-center gap-7 max-2xl:gap-5">
                     {[0, 1, 2].map((item: number) => (
                        <Course key={item} />
                     ))}
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Courses;
