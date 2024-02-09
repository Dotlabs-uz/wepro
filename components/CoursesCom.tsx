"use client";
import { useEffect, useState } from "react";
import Course from "./children/Course";
import axios from "axios";

interface CoursesProps {}

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

const Courses: React.FC<CoursesProps> = () => {
   const [courses, setCourses] = useState<Array<CoursesTyps>>([]);

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
      <div className="py-3 max-sm:py-2 overflow-scroll no-scroll">
         <div className="grid grid-flow-col grid-rows-2 gap-7 max-2xl:gap-5 mb-7 max-2xl:mb-5">
            {courses.map((item: CoursesTyps) => (
               <Course key={item._id} item={item} />
            ))}
         </div>
      </div>
   );
};

export default Courses;
