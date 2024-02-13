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
};

const Courses: React.FC<CoursesProps> = ({ category }) => {
   const [courses, setCourses] = useState<Array<CoursesTyps>>([]);
   const pathName = usePathname();

   useEffect(() => {
      axios
         .get("https://wepro.uz/api/courses?project=wepro")
         .then((res) => {
            if (res.status === 200 || res.status === 201) {
               setCourses(res.data);
            }
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);

   return (
      <div className="grid grid-flow-col grid-rows-2 grid-cols-[460px] max-2xl:grid-cols-[400px] max-lg:grid-cols-[310px] gap-7 max-2xl:gap-5 mb-7 max-2xl:mb-5 p-3 max-sm:p-2 overflow-scroll no-scroll">
         {courses.map((item: CoursesTyps) => {
            if (category === item.category) {
               return <Course key={item._id} item={item} />;
            } else if (category === "all") {
               return <Course key={item._id} item={item} />;
            }
         })}
      </div>
   );
};

export default Courses;
