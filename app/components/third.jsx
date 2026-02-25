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
     className="h-screen w-full"
     initial={{ opacity: 0 }}
     animate={isInView ? { opacity: 1 } : { opacity: 0 }}
     transition={{ duration: 1 }}
   >
    <div className="relative h-full w-full flex items-center justify-center">

      <motion.img 
        src="thirdImage.jpg" 
        alt="seed" 
        className="w-96 rounded-md absolute right-15 top-20" 
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
        className="w-96 rounded-md absolute left-15 bottom-20" 
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        animate={isInView ? { x: 0, opacity: 1, scale: 1 } : { x: -100, opacity: 0, scale: 0.8 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.6 ,
          stiffness: 100 
        }}
      />
      

      <motion.p 
        className="text-gray-500 absolute text-center bottom-30 w-1/3 font-light"
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
      

      <motion.h1 
        className="text-5xl text-black font-medium absolute w-2/3 text-center"
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
    </div>
   </motion.div>
  );
}
