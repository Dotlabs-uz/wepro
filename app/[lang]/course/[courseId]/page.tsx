import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import axios from "axios";

import HeroCourse from "@/components/HeroCourse";
import Form from "@/container/Form";
import Vacancies from "@/container/Vacancies";
import Modal from "@/components/Modal";
import ReviewsCom from "@/components/ReviewsCom";
import FAQ from "@/container/FAQ";
import BgAnimated from "@/container/BgAnimated";
import Company from "@/container/Company";
import Lessons from "@/components/Lessons";
import Group from "@/components/children/Group";

import Image from "next/image";
import AdditionalWork from "@/components/AdditionalWork";

interface CourseProps {
}

// Frontend-разработка обучение для начинающих в Самарканде

const Page: React.FC<CourseProps> = async ({ params }: any) => {
   const { course, homePage, faq } = await getDictionary(params.lang);
   const { data } = await axios.get(
      process.env.NEXT_PUBLIC_BASE + `/courses/slug/${params.courseId}`
   );

   return (
      <>
         <HeroCourse data={data} course={course} />

         <section>
            <div className="custom-container my-28 max-lg:my-20">
               <div className="mb-9 max-md:mb-6 max-sm:mb-3">
                  <h2 className="sm:text-center">
                     {course.created.title}
                  </h2>
               </div>

               <div className="grid md:grid-cols-3 max-md:grid-flow-col max-md:auto-cols-[195px] max-md:grid-rows-[200px_minmax(200px,_1fr)] grid-rows-[300px_minmax(300px,_1fr)] gap-6 max-xl:gap-3 max-sm:gap-2 max-md:overflow-x-auto no-scroll max-md:py-3">
                  {
                     data?.canCreate.map((item: { image: string, title: string, _id: string }) => {
                        return (
                           <div key={item._id} className="card">
                              <img
                                 className="w-full h-full object-cover rounded-[22px] max-lg:rounded-2xl max-sm:rounded-xl"
                                 src={item.image}
                                 // width={1000}
                                 // height={1000}
                                 alt="photo"
                              />
                              <div className="card-title">
                                 <p className="text-sm font-bold max-md:text-center">
                                    {item.title}
                                 </p>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </section>

         <section>
            <Vacancies data={data.jobs} course={course} />
         </section>

         <section className="relative">
            <BgAnimated>
               <div className="gradient max-md:hidden"></div>
               <div className="custom-container pt-14 max-xl:pt-10 max-lg:pt-8 max-md:pt-5 max-lg:mt-8 pb-24 max-xl:pb-16 max-lg:pb-10 max-md:pb-7">
                  <div className="mb-12 max-xl:mb-8 max-md:mb-6 md:text-center">
                     <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold mb-4 text-white">
                        {course.studentsWork.title}
                     </h2>
                     <p className="max-w-2xl m-auto font-helveticaNeueMedium text-xl max-md:text-lg font-medium text-[#A3A2AB]">
                        {course.studentsWork.dcr}
                     </p>
                  </div>
                  <div className="grid md:grid-cols-3 max-md:grid-flow-col max-md:auto-cols-[310px] max-md:grid-rows-2 gap-6 max-xl:gap-3 mx-28 max-2xl:mx-20 max-xl:mx-0 py-12 max-xl:py-8 max-md:py-6 overflow-x-auto no-scroll border-y border-[#ffffff66]">
                     {data?.workAfterCourse.map((item: { money: string, title: string, _id: string }) => {
                        return (
                           <div
                              key={item._id}
                              className="flex flex-col p-6 max-xl:p-4 rounded-3xl bg-gradient-to-b from-[47%] from-[#f4f4f41a] to-[100%] to-[#f4f4f408]"
                           >
                              <div className="mb-11 max-xl:mb-8 max-md:mb-5">
                                 <p className="text-white font-helveticaNeueBold text-2xl leading-normal font-bold mb-2">
                                    {item.title}
                                 </p>
                                 <p className="text-white bg-[#ffffff99] w-fit px-2 py-1 text-base leading-normal font-bold rounded-lg">
                                    {course.studentsWork.from} ${item.money}$/{course.studentsWork.month}
                                 </p>
                              </div>

                              <div className="mt-auto max-w-[280px]">
                                 <p className="text-[#ffffff99] text-base font-medium leading-snug">
                                    Создает макеты лендингов, сайтов,
                                    интернет-магазинов, приложений для бизнеса.
                                 </p>
                              </div>
                           </div>
                        );
                     })}
                  </div>

                  <AdditionalWork course={course} data={data} />

                  {/* <div className="">
                     <div className="mb-9 max-lg:mb-5 mt-12 max-xl:mt-8 max-md:mt-6">
                        <h3 className="text-2xl max-md:text-xl font-bold md:text-center text-white">
                           {course.studentsWork.additional}
                        </h3>
                     </div>
                     <div className="grid grid-cols-2 max-md:grid-cols-1 gap-x-14 max-3xl:gap-x-10 max-lg:gap-x-5 mx-52 max-3xl:mx-40 max-xl:mx-20 max-lg:mx-0 max mb-24 max-xl:mb-16 max-lg:mb-10 max-md:mb-0">
                        {data?.additionalWorkAfterCourse.map((item: { money: number, title: number, _id: string }, idx: number) => {
                           return (
                              <div
                                 key={item._id}
                                 className="flex items-center justify-between py-4 border-b border-[#ffffff66]"
                              >
                                 <p className="text-[#A3A2AB] max-lg:text-sm font-bold">
                                    0{idx + 1}.
                                 </p>
                                 <p className="text-white text-2xl max-2xl:text-xl font-bold">
                                    {item.title}
                                 </p>
                                 <p className="p-1 px-2 font-bold rounded-lg max-2xl:text-base text-white bg-[#ffffff99]">
                                    {course.studentsWork.from} ${item.money}$/{course.studentsWork.month}
                                 </p>
                              </div>
                           );
                        })}
                     </div>
                     <button
                        // onClick={onOpen}
                        className="bg-white flex items-center gap-2 m-auto p-2 rounded-lg max-md:hidden"
                     >
                        <span className="p-2 rounded-lg bg-[#000]">
                           <MdArrowOutward
                              size={20}
                              color="white"
                              className=""
                           />
                        </span>
                        <span className="text-xl max-xl:text-lg font-bold">
                           {course.studentsWork.button} “{data?.title}”
                        </span>
                     </button>
                  </div> */}
               </div>
            </BgAnimated>
         </section>

         <section>
            <div className="custom-container">
               <div className="mb-14 max-xl:mb-8 max-md:mb-4">
                  <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold sm:text-center">
                     {course.suitableFor.title}
                  </h2>
               </div>
               <div className="grid md:grid-cols-3 max-md:grid-flow-col max-md:auto-cols-[310px] max-md:grid-rows-2 gap-6 max-xl:gap-4 max-lg:gap-3 mx-28 max-2xl:mx-20 max-xl:mx-0 overflow-x-auto no-scroll">
                  {data?.suitableFor.map(
                     (item: { title: string; text: string }, idx: number) => {
                        return (
                           <div key={idx} className="random-bg p-6 max-lg:p-4 rounded-3xl flex flex-col">
                              <p className="text-xl font-bold mb-28 max-3xl:mb-20 max-2xl:mb-12 max-lg:mb-7 text-white">
                                 0{idx + 1}.
                              </p>
                              <div className="mt-auto">
                                 <p className="text-lg font-bold text-white">
                                    {item.title}
                                 </p>
                                 <p className="max-sm:text-sm text-[#E0E0E0]">
                                    {item.text}
                                 </p>
                              </div>
                           </div>
                        );
                     }
                  )}
               </div>
            </div>
         </section>

         <section>
            <div className="custom-container mt-28 max-xl:mt-20">
               <div className="mb-14 max-xl:mb-8 max-md:mb-4">
                  <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl font-bold sm:text-center">
                     {course.admissions.title}
                  </h2>
               </div>
               <div
                  className={`grid grid-flow-col grid-cols-[460px] max-2xl:grid-cols-[400px] max-lg:grid-cols-[310px] gap-7 max-2xl:gap-5 mb-7 max-2xl:mb-5 p-3 max-sm:p-2 overflow-x-scroll no-scroll`}
               >
                  {
                     data?.admissions.map((item: any) => {
                        return <Group key={item._id} item={item} />;
                     })
                  }
               </div>
            </div>
         </section>

         <section className="relative">
            <BgAnimated>
               <div className="custom-container my-28 max-xl:my-20">
                  <div className="mx-28 max-2xl:mx-10 max-xl:mx-0">
                     <div className="pt-14 pb-12 max-xl:py-8 max-md:py-7 max-sm:pb-0 md:text-center">
                        <h2 className="text-white text-5xl max-xl:text-4xl max-sm:text-3xl font-bold mb-4 max-lg:mb-2">
                           {course.reviews.title}
                        </h2>
                        <p className="text-[#A3A2AB] max-w-xs md:m-auto text-xl max-md:text-lg font-medium">
                           {course.reviews.dcr}
                        </p>
                     </div>
                     <div className="border-b border-[#FFFFFF66] py-12 max-lg:py-8">
                        {data?.videoReviews && <ReviewsCom reviews={data.videoReviews} />}
                     </div>
                  </div>

                  <div className="mx-28 max-2xl:mx-10 max-xl:mx-0">
                     <div className="pt-14 pb-12 max-xl:py-8 max-md:py-7 md:text-center">
                        <h2 className="text-white font-bold mb-4">
                           {course.lessons.title}
                        </h2>
                        <div className="flex max-md:flex-wrap items-center md:justify-center gap-2">
                           <p className="py-1 px-3 text-lg max-lg:text-base font-bold rounded-lg text-white bg-[#26145D]">
                              {data?.month} {course.lessons.months}
                           </p>
                           <p className="py-1 px-3 text-lg max-lg:text-base font-bold rounded-lg text-white bg-[#26145D]">
                              {data?.lessons.length} {course.lessons.lesson}
                           </p>
                           <p className="py-1 px-3 text-lg max-lg:text-base font-bold rounded-lg text-white bg-[#26145D]">
                              48 {course.lessons.hours}
                           </p>
                           <p className="py-1 px-3 text-lg max-lg:text-base font-bold rounded-lg text-white bg-[#26145D]">
                              8 {course.lessons.control}
                           </p>
                        </div>
                     </div>
                     <Lessons data={data} course={course.lessons} />
                  </div>

                  <div className="mx-28 max-2xl:mx-10 max-xl:mx-0 pt-20 max-xl:pt-14 max-lg:pt-8 max-md:pt-7 pb-14 border-t border-[#ffffff66]">
                     <div className="mb-12 max-lg:mb-8">
                        <h2 className="text-white md:text-center">
                           {course.lessons.teachers}
                        </h2>
                     </div>
                     <div className="w-fit max-sm:w-full m-auto grid grid-cols-3 max-md:grid-cols-2 gap-6 max-lg:gap-4 max-sm:gap-2">
                        {data?.teachersId.map((teacher: any) => {
                           return (
                              <div
                                 key={teacher._id}
                                 className="w-full min-h-[420px] max-xl:min-h-[370px] max-lg:min-h-[300px] max-md:min-h-[250px] flex rounded-xl p-5 max-lg:p-2 bg-no-repeat bg-cover bg-center"
                              >
                                 <div className="mt-auto px-5 max-md:px-2 max-lg:px-2 py-2 rounded-xl max-md:rounded-md md:backdrop-blur-[6px] bg-[#ffffff99] max-md:bg-white">
                                    <p className="text-sm font-bold max-xs:hidden">
                                       {teacher.description}
                                    </p>
                                    <p className="max-sm:text-sm">
                                       {teacher.name}
                                    </p>
                                 </div>
                              </div>
                           );
                        })}
                     </div>
                  </div>
               </div>
            </BgAnimated>
         </section>

         <Company homePage={homePage} />
         <Form courseId={data?._id} homePage={homePage} />
         <FAQ faq={faq} />
      </>
   );
};

export default Page