"use client"
import { motion } from "framer-motion"

interface BgAnimatedProps {
    children: any
}

const BgAnimated: React.FC<BgAnimatedProps> = ({ children }) => {
    return (
        <motion.div
            initial={{ width: "95%", }}
            whileInView={{ width: "100%" }}
            transition={{
                duration: 0.5,
                ease: "easeIn"
            }}
            viewport={{ once: true }}
            className="relative my-28 max-lg:my-20 mx-auto rounded-3xl overflow-hidden bg-[#010018] z-10">
            {children}
        </motion.div>
    )
}

export default BgAnimated