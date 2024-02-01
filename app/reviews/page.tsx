import Image from "next/image";

interface ReviewsProps {}

const Reviews: React.FC<ReviewsProps> = () => {
   return (
      <>
         <section>
            <div className="custom-container">
               <div className="flex max-md:flex-col-reverse md:items-center justify-between max-md:gap-5 mt-12 mb-28 max-lg:mb-20 max-md:mb-12 mx-28 max-2xl:mx-20 max-xl:mx-10 max-lg:mx-0">
                  <div className="md:w-1/2">
                     <h2 className="md:max-w-sm text-5xl max-xl:text-4xl font-bold leading-normal mb-7 max-2xl:mb-4">
                        Отзывы <br className="md:hidden" /> о курсах Wepro
                     </h2>

                     <p className="text-2xl max-2xl:text-xl max-xl:text-base leading-8">
                        Нам важно, чтобы вы приняли взвешенное решение об
                        обучении на платформе. Поэтому мы собрали для вас
                        честные мнения пользователей Skillbox — так вы сможете
                        оценить все плюсы и минусы и найдёте ответы на волнующие
                        вопросы.
                     </p>
                  </div>

                  <div className="max-w-md max-2xl:max-w-xs max-md:max-w-[225px]">
                     <Image
                        src={"/assets/images/reviwes.jpg"}
                        width={1000}
                        height={1000}
                        alt="reviwes"
                     />
                  </div>
               </div>

               <div className="grid grid-cols-4 max-md:grid-cols-2 gap-x-5 max-xl:gap-3 gap-y-7 mb-28 mx-28 max-2xl:mx-20 max-xl:mx-10 max-lg:mx-0">
                  {[0, 1, 2, 3, 4, 5].map((item: number) => {
                     return (
                        <div
                           key={item}
                           className="min-h-[420px] max-xl:min-h-[370px] max-lg:min-h-[300px] max-md:min-h-[260px] w-full flex rounded-xl p-5 max-lg:p-2 bg-[url('/assets/images/student.jpg')] bg-no-repeat bg-cover bg-center"
                        >
                           <div className="mt-auto px-5 max-lg:px-2 py-2 rounded-[4px] bg-white">
                              <p className="text-sm font-medium">
                                 Алекс Маметов
                              </p>
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </section>
      </>
   );
};

export default Reviews;
