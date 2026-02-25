"use client"
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export default function Sixth() {
    const [hoverFirst, setHoverFirst] = useState(false);
    const [hoverSecond, setHoverSecond] = useState(false);
    const [hoverThird, setHoverThird] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });
    return (
        <motion.div 
            ref={ref}
            className="min-h-screen w-full p-4 sm:p-6 md:p-8 lg:p-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col items-center gap-4 justify-center h-full text-center">
                <motion.p  
                    className="font-mono text-start mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full sm:w-5/6 md:w-3/4 lg:w-4/9"
                    initial={{ y: -50, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
                    transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
                >
                    <motion.span
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 120 }}
                    >
                        B
                    </motion.span>log is a vibrant space where farming meets innovation
                </motion.p>
                <motion.p 
                    className="text-gray-500 text-base sm:text-lg md:text-xl w-full sm:w-5/6 md:w-3/4 lg:w-4/9"
                    initial={{ y: 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                    Experience beauty redefined for effortless elegance in every application.
                </motion.p>
            </div>
            <motion.div 
                className="flex flex-col sm:flex-row justify-around items-center mt-6 sm:mt-8 md:mt-10 gap-4 sm:gap-5"
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
            >
                {/* First Image */}
                <motion.div 
                    onMouseEnter={() => setHoverFirst(true)} 
                    onMouseLeave={() => setHoverFirst(false)} 
                    className="w-1/3 h-90 relative"
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1, } : { x: -100, opacity: 0 }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <img src="/sixthimg1.jfif" alt="Sixth Image 1" className="w-full h-full absolute rounded-lg shadow-md" />
                    <div className="flex justify-between items-end absolute bottom-2 left-2 right-2 gap-4">
                        <p className={`backdrop-blur-[4px] p-2 text-white text-center transition-opacity duration-500 ${hoverFirst ? "opacity-100" : "opacity-0"}`}>
                            <span className="p-2 rounded">precision agriculture</span>
                        </p>
                        <p className={`backdrop-blur-[4px] text-center p-2 text-white transition-opacity duration-500 ${hoverFirst ? "opacity-100" : "opacity-0"}`}>
                            <span className="p-2 rounded">tech-Driven Techniques</span>
                        </p>
                    </div>
                </motion.div>

                {/* Second Image */}
                <motion.div 
                    onMouseEnter={() => setHoverSecond(true)} 
                    onMouseLeave={() => setHoverSecond(false)} 
                    className="w-1/3 h-90 relative"
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1, } : { y: 100, opacity: 0 }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <img src="/sixthimg2.jfif" alt="Sixth Image 2" className="w-full h-full object-cover rounded-lg shadow-md" />
                    <div className="flex justify-between items-end absolute bottom-2 left-2 right-2 gap-4">
                        <p className={`backdrop-blur-[4px] p-2 text-white text-center transition-opacity duration-500 ${hoverSecond ? "opacity-100" : "opacity-0"}`}>
                            <span className="p-2 rounded">precision agriculture</span>
                        </p>
                        <p className={`backdrop-blur-[4px] text-center p-2 text-white transition-opacity duration-500 ${hoverSecond ? "opacity-100" : "opacity-0"}`}>
                            <span className="p-2 rounded">tech-Driven Techniques</span>
                        </p>
                    </div>
                </motion.div>

                {/* Third Image */}
                <motion.div 
                    onMouseEnter={() => setHoverThird(true)} 
                    onMouseLeave={() => setHoverThird(false)} 
                    className="w-1/3 h-90 relative"
                    initial={{ x: 100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 , } : { x: 100, opacity: 0 }}
                    transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                    <img src="/sixthimg3.jfif" alt="Sixth Image 3" className="w-full h-full object-cover rounded-lg shadow-md" />
                    <div className="flex justify-between items-end absolute bottom-2 left-2 right-2 gap-4">
                        <p className={`backdrop-blur-[4px] p-2 text-white text-center transition-opacity duration-500 ${hoverThird ? "opacity-100" : "opacity-0"}`}>
                            <span className="p-2 rounded">sustainable farming</span>
                        </p>
                        <p className={`backdrop-blur-[4px] text-center p-2 text-white transition-opacity duration-500 ${hoverThird ? "opacity-100" : "opacity-0"}`}>
                            <span className="p-2 rounded">organic solutions</span>
                        </p>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}