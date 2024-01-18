import Image from "next/image";
import Link from "next/link";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
   return (
      <footer className="custom-container ">
         <div className="mb-[50px] pt-[68px] px-[110px] rounded-[16px] shadow-[0px_5px_20px_0px_#15151526] bg-[#F5F5F5]">
            <div className="flex items-center justify-between pb-[63px]">
               <div className="">
                  <h2 className="text-[50px] font-bold mb-4">
                     Бесплатная консультация
                  </h2>
                  <p className="text-[#A3A2AB] max-w-[550px] text-[22px] font-medium mb-5 mr-20">
                     Оставьте свои контакты и получите бесплатную консультацию
                     по курсу, программе и спикерам.
                  </p>
                  <form className="max-w-[515px] grid grid-cols-2 gap-3">
                     <input
                        type="text"
                        placeholder="Ваше имя"
                        className="bg-white p-[17px] rounded-[9px] border border-[#E0E0E0] col-span-2"
                     />
                     <input
                        type="text"
                        placeholder="Телефон"
                        className="bg-white p-[17px] rounded-[9px] border border-[#E0E0E0]"
                     />
                     <input
                        type="text"
                        placeholder="Откуда о нас узнали?"
                        className="bg-white p-[17px] rounded-[9px] border border-[#E0E0E0]"
                     />
                     <button className="bg-[#151FE1] hover:bg-transparent border-[#151FE1] hover:text-[#151FE1] text-white text-lg font-bold py-4 border rounded-[7px] col-span-2 duration-150 ease-in">
                        Отправить заявку
                     </button>
                  </form>
               </div>
               <div className="max-w-[400px]">
                  <Image
                     src={"/assets/images/tick.svg"}
                     width={1000}
                     height={1000}
                     alt="tick"
                  />
               </div>
            </div>
            <div className="grid grid-cols-4 py-[63px] border-t border-[#1515151a]">
               <div className="">
                  <div className="max-w-[160px] mb-4">
                     <Image
                        src={"/assets/images/logo.svg"}
                        width={1000}
                        height={1000}
                        alt="logo"
                     />
                  </div>
                  <div className="">
                     <p className="font-bold text-[#A3A2AB]">
                        Профессиональное обучение профессиям будущего
                     </p>
                  </div>
               </div>
               <div className="">
                  <h3 className="text-lg font-bold mb-5">Курсы:</h3>
                  <ul className="text-[#A3A2AB] font-bold">
                     <li className="mb-[6px]">
                        <Link href={"#"}>Frontend-программирование</Link>
                     </li>
                     <li className="mb-[6px]">
                        <Link href={"#"}>Мобильная разработка</Link>
                     </li>
                     <li className="mb-[6px]">
                        <Link href={"#"}>SMM</Link>
                     </li>
                     <li>
                        <Link href={"#"}>Графический дизайн</Link>
                     </li>
                  </ul>
               </div>
               <div className="">
                  <h3 className="text-lg font-bold mb-5">Контакты:</h3>
                  <ul className="text-[#A3A2AB] font-bold">
                     <li className="text-black text-3xl font-bold mb-[21px]">
                        <a href={"tel:+998 (90) 197-71-00"}>
                           +998 (90) 197-71-00
                        </a>
                     </li>
                     <li className="mb-[6px]">
                        <Link href={"#"}>ул. Буюк Ипак Йули 52, Самарканд</Link>
                     </li>
                     <li>
                        <Link href={"#"}>ул. Мирзо Улугбека, 35</Link>
                     </li>
                  </ul>
               </div>
               <div className="pl-14">
                  <h3 className="text-lg font-bold mb-5">Социальные сети:</h3>
                  <ul className="text-[#A3A2AB] font-bold">
                     <li className="mb-[6px]">
                        <Link href={"#"}>Instagram</Link>
                     </li>
                     <li>
                        <Link href={"#"}>Telegram</Link>
                     </li>
                     <li>
                        <Link href={"#"}>YouTube</Link>
                     </li>
                     <li>
                        <Link href={"#"}>LinkedIn</Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="pt-[30px] pb-[38px] border-t border-[#1515151a]">
               <p className="font-boldZz">MChJ “Wepro” © 2023</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
