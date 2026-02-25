"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import "./fifth.css"

export default function Fifth() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });
    return (
        <motion.div 
            ref={ref}
            className="min-h-screen w-full container"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="text-gray-200 flex gap-10 justify-around p-15">
                {/* Left side - Main heading */}
                <motion.p 
                    className="text-5xl font-mono w-1/2"
                    initial={{ x: -100, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, type: "spring", stiffness: 80 }}
                >
                    <motion.span
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 120 }}
                    >
                        C
                    </motion.span>ollaborate and Learn from Industry Experts and Enthusiasts
                </motion.p>
                
                {/* Right side - Services section */}
                <div className="flex flex-col items-end gap-4 w-1/2">
                    {/* Agricultural Innovations title */}
                    <motion.p 
                        className="text-4xl font-mono"
                        initial={{ x: 100, opacity: 0, y: -30 }}
                        animate={isInView ? { x: 0, opacity: 1, y: 0 } : { x: 100, opacity: 0, y: -30 }}
                        transition={{ duration: 1, delay: 0.8, type: "spring", stiffness: 100 }}
                    >
                        <motion.span
                            initial={{ scale: 0, rotate: 180 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }}
                            transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 120 }}
                        >
                            A
                        </motion.span>gricultural Innovations
                    </motion.p>
                    
                    {/* Service items with staggered animation */}
                    <motion.p 
                        className="text-gray-200 text-2xl font-mono"
                        initial={{ x: 50, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                    >
                        Farm management
                    </motion.p>
                    
                    <motion.p 
                        className="text-gray-200 text-2xl font-mono"
                        initial={{ x: 50, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
                    >
                        Precision Agriculture
                    </motion.p>
                    
                    <motion.p 
                        className="text-gray-200 text-2xl font-mono"
                        initial={{ x: 50, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
                    >
                        Organic Farming
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
}
