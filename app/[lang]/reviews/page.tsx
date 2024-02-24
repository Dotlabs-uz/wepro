import Image from "next/image";

import ReviewsCom from "@/components/ReviewsCom"

interface ReviewsProps { }

const Reviews: React.FC<ReviewsProps> = () => {
   return (
      <>
         <section>
            <div className="custom-container mb-28 max-lg:mb-20 max-md:mb-12 max-sm:mb-6">
               <div className="flex max-md:flex-col-reverse md:items-center justify-between max-md:gap-5 mt-12 max-sm:mt-6 mb-28 max-lg:mb-20 max-md:mb-12 max-sm:mb-6 mx-28 max-2xl:mx-20 max-xl:mx-10 max-lg:mx-0">
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
                        src={"/images/reviwes.jpg"}
                        width={1000}
                        height={1000}
                        alt="reviwes"
                     />
                  </div>
               </div>

               {/* <ReviewsCom reviews={[]} /> */}
            </div>
         </section>
      </>
   );
};

export default Reviews;
