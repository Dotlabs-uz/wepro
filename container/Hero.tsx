import { FaFigma } from "react-icons/fa";

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
   const arr = [
      {
         id: 0,
         icon: "",
         title: "Frontend-разработка",
         img: "/assets/images/hero.jpg",
         time: 10000,
      },
   ];

   return (
      <div className="custom-container mt-10 max-lg:mt-9">
         <div className="max-sm:block hidden mb-8">
            <h1 className="text-4xl font-bold text-center mb-3">
               С нуля до PRO за 4 месяца
            </h1>
            <p className="text-[#00000099] text-sm font-bold text-center mb-7">
               Wepro - это сеть IT-школ в Самарканде
            </p>

            <div className="flex flex-col gap-2">
               <button className="bg-[#151FE1] text-[#ffffff] w-full font-bold py-3 rounded-lg border-2 border-[#151FE1]">
                  Начать обучение
               </button>
               <button className="bg-[#ffffff] text-[#151FE1] w-full font-bold py-3 rounded-lg border-2 border-[#151FE1]">
                  Посмотреть все курсы
               </button>
            </div>
         </div>
         <div className="min-h-[550px] max-3xl:min-h-[450px] max-lg:min-h-[400px] max-sm:min-h-[300px] max-xs:min-h-[270px] flex p-5 max-xl:p-4 max-sm:p-2 rounded-[22px] max-md:rounded-2xl bg-[url('/assets/images/hero.jpg')] bg-cover bg-no-repeat">
            <div className="w-full mt-auto rounded-[22px] max-md:rounded-[12px] px-6 max-xl:px-3 max-sm:px-2 backdrop-blur-[15px] bg-[#ffffffd9]">
               <div className="max-sm:hidden py-6 max-2xl:py-4 text-center border-b border-[#1515151a]">
                  <h1 className="text-3xl max-lg:text-2xl font-bold">
                     С нуля до PRO за 4 месяца
                  </h1>
                  <p className="text-[#00000099] text-sm font-bold">
                     Wepro - это сеть IT-школ в Самарканде
                  </p>
               </div>
               <div className="px-14 max-3xl:px-9 max-2xl:px-5 max-xl:px-0 py-6 max-3xl:py-4 max-sm:py-2">
                  <ul className="flex items-center justify-between overflow-scroll no-scroll">
                     {[0, 1, 2, 3, 4, 5].map((item: number) => {
                        return (
                           <li
                              key={item}
                              className="flex items-center gap-3 max-2xl:gap-2 py-3 px-7 max-3xl:px-5 max-2xl:px-4 rounded-lg cursor-pointer first:text-white first:bg-[#151FE1]"
                           >
                              <FaFigma size={20} className="max-lg:hidden" />
                              <p className="text-sm font-bold text-nowrap">
                                 Веб-дизайн
                              </p>
                           </li>
                        );
                     })}
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Hero;
