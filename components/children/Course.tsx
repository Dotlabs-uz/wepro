import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

interface CourseProps {}

const Course: React.FC<CourseProps> = () => {
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
      <div className="max-lg:min-w-[305px] rounded-[20px] shadow-[0px_4px_5px_0px_#00000026]">
         <div className="p-2 max-lg:hidden">
            <Image
               src={"/assets/images/course-img.jpg"}
               width={1000}
               height={1000}
               alt="course"
            />
         </div>
         <div className="px-7 max-2xl:px-4 pb-6 pt-3 max-sm:p-5">
            <h3 className="text-3xl max-2xl:text-2xl leading-normal font-bold mb-6 max-2xl:mb-4">
               Frontend-разработка
            </h3>
            <ul className="flex flex-wrap gap-[6px] mb-5 max-xl:mb-3">
               {arr.map((item: { id: number; title: string }) => {
                  return (
                     <li
                        key={item.id}
                        className="px-4 py-1 rounded-full border sm:border-[#00000015] max-sm:border-black"
                     >
                        <p className="text-sm max-xl:text-xs leading-normal">
                           {item.title}
                        </p>
                     </li>
                  );
               })}
            </ul>
            <p className="max-xl:text-sm mb-1">Срок обучения: 6 месяцев</p>
            <p className="max-xl:text-sm mb-7 max-xl:mb-4">
               Цена: 660,000 сум/месяц
            </p>
            <div className="mt-auto">
               <button className="px-7 max-xl:px-5 py-3 max-xl:py-2 max-sm:p-3 max-lg:text-sm font-bold rounded-lg max-sm:rounded-full duration-100 ease-in sm:border-2 sm:border-black hover:bg-[#151FE1] max-sm:bg-[#151FE1] hover:border-[#151FE1] hover:text-white">
                  <span className="hidden max-sm:block">
                     <IoArrowForwardOutline size={15} color="white" />
                  </span>
                  <span className="max-sm:hidden">Записаться на курс</span>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Course;
