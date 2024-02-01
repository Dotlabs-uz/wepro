import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/container/FAQ";
import Form from "@/components/Form";
import Company from "@/container/company";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Header />
            {children}
            <Company />
            <section>
               <div className="mx-10 max-2xl:mx-5 max-xl:mx-0 py-28 max-lg:py-14 max-sm:py-0 rounded-[20px] md:bg-[url('/assets/images/bg-form.jpg')] bg-no-repeat bg-cover">
                  <Form />
               </div>
            </section>
            <FAQ />
            <Footer />
         </body>
      </html>
   );
}
