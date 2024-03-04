import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface VacancyProps {
   item: {
      scaleMax: number;
      scaleMin: number;
   };
   inView: boolean;
   idx: number;
}

const Vacancy: React.FC<VacancyProps> = ({ item, inView, idx }) => {
   const { scrollYProgress } = useScroll();
   const scale = useTransform(
      scrollYProgress,
      [0, 1],
      [item.scaleMax, item.scaleMin]
   );

   return (
      <motion.div
         style={inView ? { scale } : {}}
         transition={{ duration: 0.5 }}
         className="sticky vacancy rounded-2xl overflow-hidden shadow-[0px_-10px_15px_#00000050] bg-white"
      >
         <Image
            src={`/images/vacancies/vacancy-${idx + 1}.svg`}
            width={1000}
            height={1000}
            alt="vacancy"
         />
      </motion.div>
   );
};

export default Vacancy;
