"use client"
import React from "react";
import { motion } from "framer-motion";

interface LoadindProps { }

const Loadind: React.FC<LoadindProps> = () => {
    return (
        <div className="loading">
            <motion.div
                className="loading-block"
            // animate={{ y: [0, -30, 0] }}
            // transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
            >
                <div className="circle blue"></div>
            </motion.div>
            <motion.div
                className="loading-block"
            // animate={{ y: [0, -30, 0] }}
            // transition={{ delay: .2, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="circle red"></div>
            </motion.div>
            <motion.div
                className="loading-block"
            // animate={{ y: [0, -30, 0] }}
            // transition={{ delay: .4, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <div className="circle green"></div>
            </motion.div>
        </div>
    );
}

export default Loadind;