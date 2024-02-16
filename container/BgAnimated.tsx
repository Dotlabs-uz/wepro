"use client"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

interface BgAnimatedProps {
    children: any
}

const BgAnimated: React.FC<BgAnimatedProps> = ({ children }) => {
    return (
        <div className="relative my-28 max-lg:my-20 overflow-hidden rounded-3xl">
            <motion.div
                className="absolute z-[-1] inset-0 mix-blend-difference mx-auto rounded-3xl bg-[#010018]">
            </motion.div>
            {children}
        </div>
    )
}

export default BgAnimated