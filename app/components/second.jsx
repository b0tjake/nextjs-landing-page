"use client";

import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Second() {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% of the component must be visible
    triggerOnce: true, // Trigger only once
  });

  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const count4 = useMotionValue(0);

  const [display1, setDisplay1] = useState(0);
  const [display2, setDisplay2] = useState(0);
  const [display3, setDisplay3] = useState(0);
  const [display4, setDisplay4] = useState(0);
  const [showSymbol, setShowSymbol] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const controls1 = animate(count1, 5000, {
      duration: 2,
      onUpdate: (latest) => {
        setDisplay1(Math.floor(latest));
      },
    });

    const controls2 = animate(count2, 70, {
      duration: 2,
      onUpdate: (latest) => {
        setDisplay2(Math.floor(latest));
      },
    });

    const controls3 = animate(count3, 50, {
      duration: 2,
      onUpdate: (latest) => {
        setDisplay3(Math.floor(latest));
      },
    });

    const controls4 = animate(count4, 98, {
      duration: 2,
      onUpdate: (latest) => {
        setDisplay4(Math.floor(latest));
      },
      onComplete: () => {
        setShowSymbol(true);
      },
    });

    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
      controls4.stop();
    };
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full items-center justify-around bg-gray-50 flex flex-wrap p-10"
    >
      {/* Counter 1 - Farmers Connected */}
      <div className="flex flex-col items-center justify-center p-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-gray-800"
        >
          {display1}
          {showSymbol && <motion.span>+</motion.span>}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-600"
        >
          Farmers Connected
        </motion.h2>
      </div>

      {/* Counter 2 - Yield Improvement */}
      <div className="flex flex-col items-center justify-center p-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-gray-800"
        >
          {display2}
          {showSymbol && <motion.span>%</motion.span>}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-600"
        >
          Yield Improvement
        </motion.h2>
      </div>

      {/* Counter 3 - Agriculture Experts */}
      <div className="flex flex-col items-center justify-center p-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-gray-800"
        >
          {display3}
          {showSymbol && <motion.span>+</motion.span>}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-600"
        >
          Agriculture Experts
        </motion.h2>
      </div>

      {/* Counter 4 - Positive Impact */}
      <div className="flex flex-col items-center justify-center p-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold text-gray-800"
        >
          {display4}
          {showSymbol && <motion.span>%</motion.span>}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-lg text-gray-600"
        >
          Positive Impact
        </motion.h2>
      </div>
    </motion.div>
  );
}
