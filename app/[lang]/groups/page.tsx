import Modal from "@/components/Modal";
import Course from "@/components/children/Course";
import Group from "@/components/children/Group";
import Tabs from "@/components/children/Tabs";
import axios from "axios";
import Image from "next/image";

interface PageProps { }

const Page: React.FC<PageProps> = async () => {
   // const tabs = [
   //    {
   //       id: 0,
   //       title: "Все курсы",
   //    },
   //    {
   //       id: 1,
   //       title: "Программирование",
   //    },
   //    {
   //       id: 2,
   //       title: "Дизайн",
   //    },
   //    {
   //       id: 3,
   //       title: "Другое",
   //    },
   // ];
   const { data } = await axios.get(
      process.env.NEXT_PUBLIC_BASE + "/admissions"
   );
   console.log(data);

   return (
      <>
         <section>
            <div className="mb-28 max-xl:mb-20 max-md:mb-5">
               <div className="custom-container my-10 max-md:my-7">
                  <h2 className="max-w-2xl text-5xl max-lg:text-4xl max-md:text-3xl leading-normal font-bold mb-10 max-xl:mb-6">
                     Запишитесь в группу, которая скоро откроется
                  </h2>

                  {/* <div className="md:w-fit rounded-lg overflow-scroll no-scroll">
                     <Tabs tabs={tabs} id={1} />
                  </div> */}
               </div>

               <div className="custom-container py-3 max-sm:py-2 overflow-scroll no-scroll">
                  <div className="grid grid-flow-col grid-rows-2 grid-cols-[460px] max-2xl:grid-cols-[400px] max-lg:grid-cols-[310px] gap-7 max-2xl:gap-5 mb-7 max-2xl:mb-5 p-3 max-sm:p-2">
                     {
                        data.map((item: any) => {
                           return <Group key={item._id} item={item} />;
                        })
                     }
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Page;
