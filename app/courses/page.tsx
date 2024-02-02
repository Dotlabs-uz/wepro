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
               <div className="custom-container my-10 max-md:my-7">
                  <h2 className="max-w-xl text-5xl max-xl:text-4xl max-md:text-3xl leading-normal font-bold mb-10 max-xl:mb-6">
                     В Wepro мы обучаем профессиям будущего
                  </h2>

                  <div className="md:w-fit rounded-lg overflow-scroll no-scroll">
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
