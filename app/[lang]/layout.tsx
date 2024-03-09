import type { Metadata } from "next";
// import { Roboto } from "next/font/google";
import "./globals.scss";

import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/i18n.config";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/context";
import Modal from "@/components/Modal";


// const inter = Roboto({
//    subsets: ["latin"],
//    weight: "400"
// });

export const metadata: Metadata = {
   title: "Wepro | Home",
   description: "Generated by create next app",
};

const defaultFont = localFont({
   src: "../../public/fonts/HelveticaNeueCyr-Light.woff",
   display: "swap",
   variable: "--font-helveticaNeue",
});

const fontBold = localFont({
   src: "../../public/fonts/HelveticaNeueCyr-Bold.woff",
   display: "swap",
   variable: "--font-helveticaNeueBold",
});

const fontMedium = localFont({
   src: "../../public/fonts/HelveticaNeueCyr-Medium.woff",
   display: "swap",
   variable: "--font-helveticaNeueMedium",
});

export default async function RootLayout({
   children,
   params: { lang },
}: {
   children: React.ReactNode;
   params: { lang: Locale };
}) {
   const { header, homePage } = await getDictionary(lang);

   return (
      <html lang="en">
         <body className={cn(defaultFont.variable, fontBold.variable, fontMedium.variable)}>
            <ModalProvider>
               <Modal />
               <div className="wrapper">

                  {/* <Modal
                  isOpened={isOpened}
                  onClose={onClose}
                  admissionId={""}
                  courseId={item?._id}
                  select={false}
                  title={"Записаться на курс"}
                  dcr={"Оставьте заявку и получите возможность попасть на открытый урок абсолютно бесплатно."}
                  type={"classic"}
               /> */}
                  <Header lang={header} />
                  {children}
                  <Footer homePage={homePage} />
               </div>
            </ModalProvider>
         </body>
      </html>
   );
}
