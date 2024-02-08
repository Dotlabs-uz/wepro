import Image from "next/image";
import { IoArrowForwardOutline } from "react-icons/io5";

interface CourseProps {
   // item: {
   //    _id: string;
   //    apps: string[];
   //    category: string;
   //    discount: number;
   //    isAI: boolean;
   //    isVisible: boolean;
   //    language: string;
   //    month: number;
   //    price: number;
   //    project: string;
   //    textAboutCourse: string;
   //    title: string;
   //    url: string;
   // };
   item: any;
}

const Course: React.FC<CourseProps> = ({ item }) => {
   console.log(item);

   return (
      <div className="flex flex-col h-auto min-w-[460px] max-lg:min-w-[305px] rounded-[20px] cursor-pointer shadow-[0px_4px_5px_0px_#00000026] hover:shadow-[0px_5px_15px_3px_#00000026] duration-150 ease-in bg-white">
         <div className="p-2 max-lg:hidden">
            <Image
               src={"/assets/images/course-img.jpg"}
               width={1000}
               height={1000}
               alt="course"
            />
         </div>
         <div className="flex flex-col h-full px-7 max-2xl:px-4 pb-6 pt-3 max-sm:p-5">
            <h3 className="text-3xl max-2xl:text-2xl leading-normal font-bold mb-6 max-2xl:mb-4">
               {item.title}
            </h3>
            <ul className="flex flex-wrap gap-[6px] mb-5 max-xl:mb-3">
               {item.apps.map((item: string[]) => {
                  return (
                     <li className="px-4 py-1 rounded-full cursor-pointer border duration-150 ease-in hover:bg-black hover:text-white sm:border-[#00000015] max-sm:border-black">
                        <p className="text-sm max-xl:text-xs leading-normal">
                           {item}
                        </p>
                     </li>
                  );
               })}
            </ul>
            <p className="max-xl:text-sm mb-1">
               Срок обучения: {item.month} месяцев
            </p>
            <p className="max-xl:text-sm mb-7 max-xl:mb-4">
               Цена: {item.price} сум/месяц
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
