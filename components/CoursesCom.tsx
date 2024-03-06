import axios from "axios";

import Course from "./children/Course";
import DragableSection from "./DragableSection";
import {
   Carousel,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"

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

const Courses: React.FC<CoursesProps> = async ({ category }) => {
   const { data } = await axios.get(
      process.env.NEXT_PUBLIC_BASE + "/courses?project=wepro"
   );

   return (
      <>
         <Carousel
            className="w-full m-auto"
            opts={{
               align: "start",
               dragFree: true
            }}
         >
            <CarouselContent className="max-w-[1728px] 3xl:mx-auto grid grid-flow-col grid-rows-2 gap-5 px-36 max-3xl:px-16 max-lg:px-5 max-sm:px-4 py-3 max-md:py-2">
               {
                  data.map((item: CoursesTyps) => {
                     if (category === item.category) {
                        return <Course key={item._id} item={item} />;
                     } else if (category === "all") {
                        return <Course key={item._id} item={item} />;
                     }
                  })
               }
            </CarouselContent>
         </Carousel>

         {/* <DragableSection>
            <div className={`max-w-[1728px] w-full mx-auto grid grid-flow-col grid-rows-2 grid-cols-[450px] max-2xl:grid-cols-[400px] max-lg:grid-cols-[310px] gap-7 max-2xl:gap-5 mb-3 px-36 max-3xl:px-16 max-lg:px-5 max-sm:px-4 py-5`}>
               {
                  data.map((item: CoursesTyps) => {
                     if (category === item.category) {
                        return <Course key={item._id} item={item} />;
                     } else if (category === "all") {
                        return <Course key={item._id} item={item} />;
                     }
                  })
               }
               <div className="w-[200px] max-lg:w-[1px]"></div>
               <div className="w-[200px] max-lg:w-[1px]"></div>
            </div>
         </DragableSection> */}
      </>
   );
};

export default Courses;
