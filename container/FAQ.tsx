import { AiOutlinePlus } from "react-icons/ai";

interface FAQProps {}

const FAQ: React.FC<FAQProps> = () => {
   return (
      <section>
         <div className="custom-container my-28 max-lg:my-24 max-sm:my-20">
            <div className="mb-12">
               <h2 className="text-5xl max-xl:text-4xl font-bold md:text-center">
                  Ответы на вопросы
               </h2>
            </div>
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6 max-xl:gap-4">
               <div className="bg-[#F4F4F4] rounded-xl py-6 px-4 max-sm:py-4 max-sm:px-3">
                  <div className="max-sm:mb-2">
                     <div className="flex items-center max-sm:justify-between mb-2 max-md:mb-1">
                        <p className="bg-[#E0E0E0] text-[#A3A2AB] text-[18px] font-bold py-[3px] px-[9px] rounded-[4px]">
                           01
                        </p>
                        <p className="font-bold sm:ml-[17px] flex-1 max-sm:hidden">
                           Если я совсем ничего не знаю о дизайне, мне подойдет
                           курс?
                        </p>
                        <button className="bg-white ml-5 p-2 rounded-[4px]">
                           <AiOutlinePlus
                              size={26}
                              color="#6734EE"
                              className="rotate-45"
                           />
                        </button>
                     </div>
                     <div className="sm:hidden">
                        <p className="font-bold sm:ml-[17px] flex-1">
                           Если я совсем ничего не знаю о дизайне, мне подойдет
                           курс?
                        </p>
                     </div>
                  </div>
                  <div className="text-[#A3A2AB] max-sm:text-sm font-bold sm:px-14">
                     <p>
                        Конечно. Чтобы начать, достаточно просто владеть
                        компьютером. Мы обучаем с нуля теории и основным
                        дизайнерским программам, чтобы в конце курса вы стали
                        профессионалом.
                     </p>
                  </div>
               </div>

               <div className="bg-[#F4F4F4] h-fit rounded-[12px] py-6 px-[18px]">
                  <div className="max-sm:mb-2">
                     <div className="flex items-center max-sm:justify-between mb-2 max-md:mb-1">
                        <p className="bg-[#E0E0E0] text-[#A3A2AB] text-[18px] font-bold py-[3px] px-[9px] rounded-[4px]">
                           01
                        </p>
                        <p className="font-bold sm:ml-[17px] flex-1 max-sm:hidden">
                           Если я совсем ничего не знаю о дизайне, мне подойдет
                           курс?
                        </p>
                        <button className="bg-white ml-5 p-2 rounded-[4px]">
                           <AiOutlinePlus
                              size={26}
                              color="#6734EE"
                              className="rotate-45"
                           />
                        </button>
                     </div>
                     <div className="sm:hidden">
                        <p className="font-bold sm:ml-[17px] flex-1">
                           Если я совсем ничего не знаю о дизайне, мне подойдет
                           курс?
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FAQ;
