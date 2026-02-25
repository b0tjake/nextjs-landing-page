"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Seventh() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });
    return(
        <motion.div 
            ref={ref}
            className="w-full h-fit pb-10 sm:pb-16 md:pb-20 flex flex-col gap-6 sm:gap-8 md:gap-10 items-center px-4 sm:px-6 md:px-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* First Section - Our Services */}
            <motion.div 
                className="flex flex-col items-start text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4 gap-3 sm:gap-4"
                initial={{ y: 80, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
                transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
            >
                <motion.span 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                >
                    Our Services
                </motion.span>
                <motion.p 
                    className="text-base sm:text-lg md:text-xl text-start text-gray-600 leading-relaxed"
                    initial={{ x: -50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    We're working toward bold agriculturl targets to regenerate the Earth, uplift rural communities
                </motion.p>
            </motion.div>

            {/* Second Section - 2B */}
            <motion.div 
                className="flex flex-col items-start text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4 gap-3 sm:gap-4"
                initial={{ y: 80, opacity: 0, scale: 0.9 }}
                animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 80, opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.2, delay: 1.0, type: "spring", stiffness: 70 }}
            >
                <motion.span 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 1, delay: 1.3, type: "spring", stiffness: 120 }}
                >
                    2B
                </motion.span>
                <motion.p 
                    className="text-base sm:text-lg md:text-xl text-start text-gray-600 leading-relaxed"
                    initial={{ x: 50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                >
                    conserve or restore 2 billion liters of water annually through efficiency irrigation, rainwater harvesting
                </motion.p>
            </motion.div>

            {/* Third Section - 100M */}
            <motion.div 
                className="flex flex-col items-start text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/4 gap-3 sm:gap-4"
                initial={{ y: 80, opacity: 0, scale: 0.9 }}
                animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 80, opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.2, delay: 1.7, type: "spring", stiffness: 70 }}
            >
                <motion.span 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                    transition={{ duration: 1, delay: 2.0, type: "spring", stiffness: 120 }}
                >
                    100M
                </motion.span>
                <motion.p 
                    className="text-base sm:text-lg md:text-xl text-start text-gray-600 leading-relaxed"
                    initial={{ x: -50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
                >
                    improve the lives of 100 million people through sustainable agriculture practices
                </motion.p>
            </motion.div>
        </motion.div>
    )
}