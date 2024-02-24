"use client";
import { useEffect, useState } from "react";
import Course from "./children/Course";
import axios from "axios";
import { usePathname } from "next/navigation";

interface CoursesProps {
   category: string;
}

type CoursesTyps = {
   _id: string;
   apps: string[];
   category: string;
   discount: number;
   isAI: boolean;
   isVisible: boolean;
   language: string;
   month: number;
   price: number;
   project: string;
   textAboutCourse: string;
   title: string;
   url: string;
   preview: string
};

const Courses: React.FC<CoursesProps> = ({ category }) => {
   const [courses, setCourses] = useState<Array<CoursesTyps>>([]);
   const [isDragging, setIsDragging] = useState(false);
   const pathName = usePathname();

   useEffect(() => {
      axios
         .get("https://wepro.uz/api/courses?project=wepro")
         .then((res) => {
            if (res.status === 200 || res.status === 201) {
               setCourses(res.data);
               // console.log(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   console.log(courses);

   return (
      <>
         <div
            className={`overflow-x-scroll no-scroll  ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
         >
            <div
               className={`grid grid-flow-col grid-rows-2 grid-cols-[460px] max-2xl:grid-cols-[400px] max-lg:grid-cols-[310px] gap-7 max-2xl:gap-5 mb-7 max-2xl:mb-5 p-3 max-sm:p-2`}
            >
               {
                  courses.length ?
                     courses.map((item: CoursesTyps) => {
                        if (category === item.category) {
                           return <Course key={item._id} item={item} />;
                        } else if (category === "all") {
                           return <Course key={item._id} item={item} />;
                        }
                     })
                     :
                     [0, 1, 2, 3, 4, 5].map((item: number) => {
                        return (
                           <div key={item} className="bg-gray-200 w-[460px] max-2xl:w-[400px] max-lg:w-[310px] animate-pulse rounded-3xl max-xl:rounded-2xl p-4">
                              <div className="max-lg:hidden h-56 rounded-lg w-full mb-4 bg-gray-200 dark:bg-gray-400"></div>
                              <div className="px-5 max-lg:px-0 mt-5 max-lg:mt-0 flex flex-col">
                                 <div className="h-10 rounded-full w-3/4 max-lg:w-full mb-4 bg-gray-200 dark:bg-gray-400"></div>
                                 <div className="flex flex-wrap gap-2 mb-5 max-2xl:mb-3">
                                    {
                                       [0, 1, 2, 3, 4, 5, 6, 7].map((item: number) => {
                                          return (
                                             <div key={item} className="h-8 rounded-full w-20 bg-gray-200 dark:bg-gray-400"></div>
                                          )
                                       })
                                    }
                                 </div>
                                 <div className="h-5 rounded-full w-2/3 mb-4 bg-gray-200 dark:bg-gray-400"></div>
                                 <div className="h-5 rounded-full w-2/3 mb-4 bg-gray-200 dark:bg-gray-400"></div>

                                 <div className="mt-16 h-12 rounded-lg w-2/3 mb-4 bg-gray-200 dark:bg-gray-400"></div>
                              </div>
                           </div>
                        )
                     })
               }
            </div>
         </div >
      </>
   );
};

export default Courses;
