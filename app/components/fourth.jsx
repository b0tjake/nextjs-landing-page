"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./fourth.css"

export default function Fourth(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });
    return(
        <motion.div 
            ref={ref}
            className="min-h-screen p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col lg:flex-row w-full relative gap-6 lg:gap-0"
            style={{ zIndex: 10 }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="w-full lg:w-2/3 p-3 sm:p-5">
                {/* Header text with slide up animation */}
                <motion.p 
                    className="text-gray-500 text-lg sm:text-xl md:text-2xl"
                    initial={{ y: 50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Our Services that cultivate sustainable growth
                </motion.p>
                
                {/* Services list with staggered animation */}
                <div className="flex flex-col justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-19 pt-8 sm:pt-12 md:pt-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl items-center mt-4 sm:mt-6">
                    <motion.h1
                        className="text-center sm:text-left"
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            S
                        </motion.span>oil Enrichment
                    </motion.h1>
                    
                    <motion.h1 
                        className="text-gray-400 font-light text-center sm:text-left"
                        initial={{ x: 100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            E
                        </motion.span>co-Friendly
                    </motion.h1>
                    
                    <motion.h1 
                        className="text-gray-400 font-light text-center sm:text-left"
                        initial={{ x: -100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.5, delay: 1.0 }}
                        >
                            W
                        </motion.span>ater Efficiency
                    </motion.h1>
                    
                    <motion.h1 
                        className="text-gray-400 font-light text-center sm:text-left"
                        initial={{ x: 100, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <motion.span
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            O
                        </motion.span>rganic Farming
                    </motion.h1>
                </div>
                
                {/* Bottom section with images and text */}
                <div className="w-full flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-5 justify-around mt-12 sm:mt-16 md:mt-20">
                    <motion.img 
                        src="/agricultFourth.jfif" 
                        className="w-full sm:w-80 md:w-90 h-48 sm:h-50 rounded-2xl object-cover" 
                        alt="Description"
                        initial={{ y: 100, opacity: 0, scale: 0.8 }}
                        animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1, delay: 1.4, type: "spring", stiffness: 100 }}
                    />
                    <motion.img 
                        src="/fourthimg.jfif" 
                        className="w-full sm:w-80 md:w-90 h-48 sm:h-50 rounded-2xl object-cover" 
                        alt="Description"
                        initial={{ y: 100, opacity: 0, scale: 0.8 }}
                        animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 1, delay: 1.6, type: "spring", stiffness: 100 }}
                    />
                    <motion.p 
                        className="text-gray-600 pb-2 text-sm sm:text-base md:text-lg text-center sm:text-left max-w-xs"
                        initial={{ y: 50, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                    >
                        Our approach to sustainable agriculture focuses on innovative solutions and practices that enhance productivity while preserving the environment.
                    </motion.p>
                </div>
            </div>
            
            {/* Right side image */}
            <div className="w-full lg:w-1/3">
                <motion.img 
                    src="/fourthTwila.jfif" 
                    className="w-full h-64 sm:h-80 lg:h-fit mt-4 rounded-sm object-cover" 
                    alt="Description"
                    initial={{ x: 100, opacity: 0, rotate: 5 }}
                    animate={isInView ? { x: 0, opacity: 1, rotate: 0 } : { x: 100, opacity: 0, rotate: 5 }}
                    transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 80 }}
                />
            </div>
        </motion.div>
    )
}