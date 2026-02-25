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
            <div className="flex items-center justify-between p-6 ">
                <div className="flex p-3 text-white items-center gap-16 ">
                <h1 className=" logo  text-3xl font-semibold">BetaZin</h1>
                <div className="flex gap-4">
                    <h3 className="country">morocco</h3>
                    <h3 className="phone">+212 608836089</h3>
            </div>
                </div>
               <div className="backdrop-blur-[3px]  p-2 flex justify-between items-center gap-4 rounded-3xl">
  <a href="#" className=" text-black font-semibold  bg-white p-3 rounded-lg">Home</a>
  <a href="#" className=" text-white font-semibold p-3 hover:bg-gray-200 hover:text-black rounded-lg transition-all duration-300 ">Contact</a>
  <a href="#" className=" text-white font-semibold p-3 hover:bg-gray-200 hover:text-black rounded-lg transition-all duration-300 ">about</a>
  <a href="#" className=" text-white font-semibold p-3 hover:bg-gray-200 hover:text-black rounded-lg transition-all duration-300 ">products</a>
  <a href="#" className=" text-white font-semibold p-3 hover:bg-gray-200 hover:text-black rounded-lg transition-all duration-[0.3s] mb-2">blog</a>
</div>
        </div>
<div className="flex items-center justify-center flex-col mt-50">
<motion.h1 
  className="text-5xl font-bold text-white shadow-md"
  initial={{ opacity: 0, x: -50 }}
  animate={h1controls}
>
  Welcome to BetaZin
</motion.h1>
                <motion.p 
                initial={{ opacity: 0, x: -50 }}
                animate={pcontrols}
                className="text-white text-lg mt-4">Your one-stop solution for all things tech</motion.p>
                <motion.button
                initial={{ opacity: 0, x: -50 }}
                animate={buttoncontrols}
                className="mt-6 cursor-pointer bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200">Get Started</motion.button>
                </div>
        </div>
    );
}