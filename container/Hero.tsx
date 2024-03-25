import Image from "next/image";
import { Suspense, } from "react";
import axios from "axios";
import HeroTabs from "@/components/HeroTabs";
import HeroLoading from "@/components/HeroLoading";
import { getDictionary } from "@/lib/dictionary";
import Link from "next/link";
import HeroButton from "@/components/children/HeroButton";

interface HeroProps {
   lang: any
}

const Hero: React.FC<HeroProps> = async ({ lang }) => {
   const { data } = await axios.get(
      process.env.NEXT_PUBLIC_BASE + "/banners"
   );
   const { homePage } = await getDictionary(lang);

   return (
      <div className="custom-container mt-10">
         <div className="max-sm:block hidden mb-8">
            <h1
               className="text-4xl font-helveticaNeueBold text-center mb-3"
            >
               {homePage.Hero.title}
            </h1>
            <p className="text-[#00000099] text-sm font-helveticaNeueBold text-center mb-7">
               {homePage.Hero.dcr}
            </p>

            <div className="flex flex-col gap-2">
               <HeroButton homePage={homePage} />
               <Link href={"#courses"} className="bg-[#ffffff] text-[#151FE1] w-full font-bold text-center py-3 rounded-lg border-2 border-[#151FE1]">
                  {homePage.Hero.buttton2}
               </Link>
            </div>
         </div>
         <Suspense fallback={<HeroLoading />}>
            <HeroTabs courses={data} homePage={homePage} />
         </Suspense>
      </div>
   );
};

export default Hero;
