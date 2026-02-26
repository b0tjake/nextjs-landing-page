"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Third() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  return (
   <motion.div 
     ref={ref}
     className="min-h-screen w-full py-8 sm:py-12 md:py-16"
     initial={{ opacity: 0 }}
     animate={isInView ? { opacity: 1 } : { opacity: 0 }}
     transition={{ duration: 1 }}
   >
    <div className="relative h-full w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 gap-8 lg:gap-0">

      {/* Main heading - Positioned at top on mobile, center on desktop */}
      <motion.h1 
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-medium text-center w-full lg:w-2/3 lg:absolute z-10 px-4 order-1 lg:order-none"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ 
          duration: 1.5, 
          delay: isInView ? 0.9 : 0,
          ease: "easeOut" 
        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: isInView ? 1.5 : 0 }}
        >
          For mission began with a seed --- in to cultive a future where land is for natured, farmers are empowered, and 
          nature thirves in harmony. We support rural communities to
        </motion.p>
      </motion.h1>

      {/* Images container for mobile */}
      <div className="flex flex-col sm:flex-row lg:absolute lg:inset-0 items-center justify-center gap-6 sm:gap-8 w-full order-2 lg:order-none">
        <motion.img 
          src="thirdImage.jpg" 
          alt="seed" 
          className="w-full max-w-xs sm:max-w-sm md:w-80 lg:w-96 rounded-md lg:absolute lg:right-8 xl:right-15 lg:top-20" 
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={isInView ? { x: 0, opacity: 1, scale: 1 } : { x: 100, opacity: 0, scale: 0.8 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.6,
            stiffness: 100 
          }}
        />
        
        <motion.img 
          src="thirdimg.jpg" 
          alt="seed" 
          className="w-full max-w-xs sm:max-w-sm md:w-80 lg:w-96 rounded-md lg:absolute lg:left-8 xl:left-15 lg:bottom-20" 
          initial={{ x: -100, opacity: 0, scale: 0.8 }}
          animate={isInView ? { x: 0, opacity: 1, scale: 1 } : { x: -100, opacity: 0, scale: 0.8 }}
          transition={{ 
            duration: 1.2, 
            delay: 0.6 ,
            stiffness: 100 
          }}
        />
      </div>

      {/* Description paragraph */}
      <motion.p 
        className="text-gray-500 text-center text-sm sm:text-base md:text-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/3 font-light lg:absolute lg:bottom-20 xl:bottom-30 px-4 order-3 lg:order-none"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ 
          duration: 1, 
          delay: isInView ? 1.2 : 0,
          ease: "easeOut" 
        }}
      >
        We believe agriculture is more than just producing food it's a connection to the Earth, a commitment to future generations, and a path to healing the planet.
      </motion.p>
    </div>
   </motion.div>
  );
}
