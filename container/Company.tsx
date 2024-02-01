import Image from "next/image";

interface CompanyProps {}

const Company: React.FC<CompanyProps> = () => {
   return (
      <section className="">
         <div className="custom-container my-28 max-lg:my-24 max-sm:my-20">
            <div className="max-w-4xl w-full mx-auto mb-[10px] md:text-center">
               <h2 className="text-5xl max-xl:text-4xl font-bold mb-4">
                  Компании, где работают наши выпускники
               </h2>
               <p className="text-[22px] max-2xl:text-xl max-lg:text-lg font-medium text-[#A3A2AB]">
                  Собираем лучшие вакансии в отрасли, готовим к интервью и
                  рекомендуем вас компаниям-партнёрам.
               </p>
            </div>

            <div className="px-28 max-2xl:px-10 max-xl:px-0">
               <ul className="grid grid-cols-4 max-md:grid-cols-3 max-md:gap-2 py-10 max-md:py-0">
                  <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                     <Image
                        className="max-md:scale-[1.7]"
                        src={"/assets/images/company/it-park.svg"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                     <Image
                        className="max-md:scale-[1.7]"
                        src={"/assets/images/company/family-park.svg"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                     <Image
                        className="max-md:scale-[1.7]"
                        src={"/assets/images/company/b-marketing.svg"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                     <Image
                        className="max-md:scale-[1.7]"
                        src={"/assets/images/company/sfx-marketing.svg"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                     <Image
                        className="max-md:scale-[1.7]"
                        src={"/assets/images/company/madad.svg"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                     <Image
                        className="max-md:scale-[1.7]"
                        src={"/assets/images/company/akma-respect.svg"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                     <Image
                        className="max-md:scale-[1.7]"
                        src={"/assets/images/company/samcity.svg"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="overflow-hidden py-5 md:border-b md:border-[#1515151a]">
                     <Image
                        className="max-md:scale-[1.7]"
                        src={"/assets/images/company/py.svg"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="max-md:hidden"></li>
                  <li className="overflow-hidden py-5">
                     <Image
                        className="max-md:scale-[1.7]"
                        src={"/assets/images/company/leader-print.svg"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className="md:hidden"></li>
                  <li className="overflow-hidden py-5">
                     <Image
                        className="max-md:scale-[1.7]"
                        src={"/assets/images/company/brandex.svg"}
                        width={1000}
                        height={1000}
                        alt="company"
                     />
                  </li>
                  <li className=""></li>
               </ul>
            </div>
         </div>
      </section>
   );
};

export default Company;
