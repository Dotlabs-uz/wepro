import Image from "next/image";
import Link from "next/link";

import ScrollAnimation from "@/container/ScrollAnimation";
import Branch from "@/container/Branch";
import StudentWorks from "@/container/StudentWorks";
import Course from "@/components/children/Course";
import { Suspense } from "react";

import { FaPlay } from "react-icons/fa";
import Hero from "@/container/Hero";
import Modal from "@/components/Modal";
import ReviewsCom from "@/components/ReviewsCom";
import Courses from "@/components/CoursesCom";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";
import { MdArrowOutward } from "react-icons/md";
import Company from "@/container/Company";
import Form from "@/container/Form";
import FAQ from "@/container/FAQ";
import BgAnimated from "@/container/BgAnimated";
import axios from "axios";
import Loading from "./loading";

export default async function Home({
   params: { lang },
}: {
   params: { lang: Locale };
}) {
   const { data } = await axios.get(
      process.env.NEXT_PUBLIC_BASE + "/courses?project=wepro"
   );
   const { homePage } = await getDictionary(lang);
   const reviews = [
      {
         _id: "0",
         name: "Jony",
         url: "HYS9ImCPPqk",
      },
      {
         _id: "1",
         name: "Jony",
         url: "536c_bUL1_Y",
      },
      {
         _id: "2",
         name: "Jony",
         url: "9FT-B3gtwNg",
      },
      {
         _id: "3",
         name: "Jony",
         url: "VTZCk6_tfAE",
      },
      {
         _id: "4",
         name: "Jony",
         url: "_czWEndmg0c",
      },
      {
         _id: "5",
         name: "Jony",
         url: "LYSd6PyFYqo",
      },
      {
         _id: "6",
         name: "Jony",
         url: "GZpItP_XjGA",
      },
      {
         _id: "7",
         name: "Jony",
         url: "yvHkvzVWD9s",
      },
   ];

   return (
      <>
         <section>
            <Hero courses={data} />
         </section>

         <section className="xl:bg-[#F5F5F5] my-24 max-md:my-20">
            <div className="max-xl:block hidden mb-4 max-3xl:px-16 max-lg:px-4">
               <h2 className="max-w-[470px]">
                  Почему выбирают именно Wepro
               </h2>
            </div>
            <div className="custom-container min-h-[541px] max-xl:min-h-[350px] grid gap-5 max-2xl:gap-3 grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 py-14 max-xl:py-4 max-xl:rounded-3xl max-xl:bg-[#F5F5F5]">
               <div className="col-span-2 flex max-xl:hidden">
                  <h2 className="max-w-[470px] m-auto text-5xl font-bold">
                     Почему выбирают именно Wepro
                  </h2>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-2xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     11
                  </p>
                  <p className="max-sm:text-sm">программ обучения</p>
               </div>
               <div className="max-md:hidden row-span-2 flex p-5 max-2xl:p-3 bg-[url('/images/man.jpg')] bg-cover bg-no-repeat bg-center rounded-[22px] overflow-hidden">
                  <div className="mt-auto flex gap-2">
                     <button className="bg-white px-6 max-2xl:px-4 rounded-xl">
                        <FaPlay size={20} color="black" />
                     </button>
                     <div className="backdrop-blur-[7px] rounded-xl p-3 max-2xl:p-2 bg-[#ffffff99]">
                        <p className="text-xs font-bold">
                           Посмотрите отзывы
                        </p>
                        <p>Юсупов Мансур</p>
                     </div>
                  </div>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-2xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     2200+
                  </p>
                  <p className="max-sm:text-sm">
                     выпускников за 3 года работы
                  </p>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-2xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     24/7
                  </p>
                  <p className="max-sm:text-sm">
                     доступ к учебному материалу
                  </p>
               </div>
               <div className="bg-[#FFF] flex flex-col justify-center py-4 px-7 max-xl:p-5 rounded-[22px]">
                  <p className="text-8xl max-3xl:text-7xl max-2xl:text-6xl max-sm:text-4xl font-bold tracking-tighter text-white-gradient mb-2">
                     70%
                  </p>
                  <p className="max-sm:text-sm">
                     студентов находят работу после обучения
                  </p>
               </div>
            </div>
         </section>

         <section>
            <div className="custom-container">
               <div className="mb-10 max-2xl:mb-2">
                  <h2 className="text-5xl max-xl:text-4xl max-sm:text-3xl leading-normal font-bold">
                     Авторские курсы
                  </h2>
               </div>
               <Courses category="all" />
            </div>
         </section>

         <BgAnimated>
            <div className="gradient"></div>
            <div className="custom-container py-14 max-2xl:py-8 max-md:py-5">
               <div className="md:text-center">
                  <h2 className="text-white">Отзывы выпускников</h2>
                  <div className="max-w-[400px] max-md:max-w-[300px] md:m-auto">
                     <p className="text-xl max-md:text-lg leading-normal font-medium text-[#A3A2AB]">
                        Посмотрите что говорят о нас выпускники курсов
                     </p>
                  </div>
               </div>
               <div className="mx-20 max-2xl:mx-0 max-xl:mx-0 my-8 max-xl:my-4 py-8 max-2xl:py-8 max-xl:py-4 border-t border-[#ffffff66]">
                  <ReviewsCom reviews={reviews} />
               </div>
            </div>
         </BgAnimated>

         <section>
            <ScrollAnimation />
         </section>

         <section>
            <Branch />
         </section>

         <section className="overflow-hidden">
            <BgAnimated>
               <div className="gradient max-sm:w-96 max-sm:h-full"></div>
               <StudentWorks />
            </BgAnimated>
         </section>

         <Company />

         <section className="bg-[#F5F5F5] mb-28">
            <div className="custom-container">
               <div className="flex px-28 max-2xl:px-10 max-xl:px-0">
                  <div className="max-w-xl max-lg:max-w-full w-full py-14">
                     <h2 className="leading-tight mb-5">
                        Школа английского с уклоном на Speaking от Wepro
                     </h2>
                     <div className="max-w-lg mx-auto mb-5 max-lg:block hidden">
                        <Image
                           src={"/images/weaspik.svg"}
                           width={1000}
                           height={1000}
                           alt="weapik"
                        />
                     </div>
                     <p className="text-[#A3A2AB] text-xl mb-10">
                        Уже 30 000+ наших студентов уверенно заговорили
                        по-английски — освойте язык и вы!
                     </p>
                     <Link
                        href={"https://wespeak.uz/"}
                        className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white max-2xl:text-sm font-bold py-3 px-6 max-3xl:px-3 rounded-md border duration-150 ease-in"
                     >
                        Перейти на сайт
                     </Link>
                  </div>
                  <div className="max-w-2xl mt-auto max-lg:hidden">
                     <Image
                        src={"/images/weaspik.svg"}
                        width={1000}
                        height={1000}
                        alt="weapik"
                     />
                  </div>
               </div>
            </div>
         </section>

         <Form courseId={""} />
         <FAQ />
      </>
   );
}
