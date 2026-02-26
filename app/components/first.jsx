"use client";

import { motion , useAnimation } from "framer-motion";
import "./first.css";
import { useEffect } from "react";

export default function First() {

const h1controls = useAnimation();
const pcontrols = useAnimation();
const buttoncontrols = useAnimation();

useEffect(() => {
const sequence = async() => {
  await h1controls.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
  await pcontrols.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
  await buttoncontrols.start({ opacity: 1, x: 0, transition: { duration: 0.8 } });
}
sequence();
},[])


    return (
        <div className="firstSection h-screen w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 gap-4">
                <div className="flex flex-col sm:flex-row p-3 text-white items-center gap-4 sm:gap-8 lg:gap-16">
                <h1 className="logo text-2xl sm:text-3xl font-semibold">BetaZin</h1>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm sm:text-base text-center">
                    <h3 className="country">morocco</h3>
                    <h3 className="phone">+212 608836089</h3>
            </div>
                </div>
               <div className="backdrop-blur-[3px] p-2 flex flex-wrap justify-center items-center gap-2 sm:gap-4 rounded-3xl">
  <a href="#" className="text-black font-semibold bg-white p-2 sm:p-3 rounded-lg text-sm sm:text-base">Home</a>
  <a href="#" className="text-white font-semibold p-2 sm:p-3 hover:bg-gray-200 hover:text-black rounded-lg transition-all duration-300 text-sm sm:text-base">Contact</a>
  <a href="#" className="text-white font-semibold p-2 sm:p-3 hover:bg-gray-200 hover:text-black rounded-lg transition-all duration-300 text-sm sm:text-base">about</a>
  <a href="#" className="text-white font-semibold p-2 sm:p-3 hover:bg-gray-200 hover:text-black rounded-lg transition-all duration-300 text-sm sm:text-base">products</a>
  <a href="#" className="text-white font-semibold p-2 sm:p-3 hover:bg-gray-200 hover:text-black rounded-lg transition-all duration-[0.3s] text-sm sm:text-base">blog</a>
</div>
        </div>
<div className="flex items-center justify-center flex-col mt-20 sm:mt-32 md:mt-40 lg:mt-50 px-4">
<motion.h1 
  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white shadow-md text-center"
  initial={{ opacity: 0, x: -50 }}
  animate={h1controls}
>
  Welcome to BetaZin
</motion.h1>
                <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={pcontrols}
                className="text-white text-base sm:text-lg md:text-xl mt-4 text-center px-4">Your one-stop solution for all things tech</motion.p>
                <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={buttoncontrols}
                className="mt-6 cursor-pointer bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-200 text-sm sm:text-base">Get Started</motion.button>
                </div>
        </div>
    );
}