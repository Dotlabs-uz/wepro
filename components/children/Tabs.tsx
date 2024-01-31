"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface Tabs {
   tabs: {
      id: number;
      title: string;
   }[];
   id: number;
}

const Tabs: React.FC<Tabs> = ({ tabs, id }) => {
   let [activeTab, setActiveTab] = useState(tabs[0].id);

   return (
      <div className="bg-[#F4F4F4] w-full flex space-x-1 justify-between items-center gap-1 mb-5 p-1 rounded-lg overflow-auto no-scroll">
         {tabs.map((tab: { id: number; title: string }) => (
            <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`${
                  activeTab === tab.id ? "text-white" : "hover:text-black/60"
               } relative w-full z-10 rounded-lg py-4 max-lg:py-3 px-8 max-3xl:px-5 max-lg:px-4 text-sm font-bold text-center text-nowrap text-black outline-sky-400 transition focus-visible:outline-2`}
               style={{
                  WebkitTapHighlightColor: "transparent",
               }}
            >
               {activeTab === tab.id && id === 1 && (
                  <motion.span
                     layoutId="bubble"
                     className="absolute inset-0 z-[-1] mix-blend-difference bg-[#151FE1]"
                     style={{ borderRadius: 8 }}
                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
               )}

               {activeTab === tab.id && id === 2 && (
                  <motion.span
                     layoutId="bubble"
                     className="absolute inset-0 z-[-1] mix-blend-difference bg-[#151FE1]"
                     style={{ borderRadius: 8 }}
                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
               )}
               {tab.title}
            </button>
         ))}
      </div>
   );
};

export default Tabs;
