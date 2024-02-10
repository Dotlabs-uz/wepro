import Course from "@/components/children/Course";
import Tabs from "@/components/children/Tabs";
import CoursesCom from "@/components/CoursesCom";

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
            <div className="custom-container mb-28 max-xl:mb-20 max-md:mb-10">
               <div className="my-10 max-md:my-7">
                  <h2 className="max-w-xl text-5xl max-xl:text-4xl max-md:text-3xl leading-normal font-bold mb-10 max-xl:mb-6">
                     В Wepro мы обучаем профессиям будущего
                  </h2>

                  <div className="md:w-fit rounded-lg overflow-scroll no-scroll">
                     <Tabs tabs={tabs} id={1} />
                  </div>
               </div>

               <CoursesCom />
            </div>
         </section>
      </>
   );
};

export default Courses;
