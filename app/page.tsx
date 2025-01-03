"use client";
import React, { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Navbar from "@/src/components/navbar";
import Hero from "./(home)/hero";
import Mission from "./(home)/mission";
import Footer from "./(home)/footer";
import KeyFeature from "./(home)/key-feature";
import Faqs from "./(home)/faqs";
import Tokenomics from "./(home)/tokenomics";
import Application from "./(home)/application";
import MainNavbar from "./(home)/main-navbar";
import LoadingScreen from "@/src/components/loading-screen";
import Image from "next/image";
import WorldImg from "@assets/images/world-img.png";

interface TransformValues {
  xValues: string[];
  yValues: string[];
  scaleValues: number[];
}

function getTransformValues(width: number): TransformValues {
  if (width >= 1520) {
    return {
      xValues: ["-50%", "40%", "40%", "-50%", "-50%"],
      yValues: ["45%", "45%", "-50%", "-50%", "-3%"],
      scaleValues: [1.7, 1.7, 1.7, 1.7, 0.7],
    };
  } else {
    return {
      xValues: ["-50%", "40%", "40%", "-50%", "-50%"],
      yValues: ["45%", "45%", "-50%", "-50%", "20%"],
      scaleValues: [1.7, 1.7, 1.7, 1.7, 0.7],
    };
  }
}

const Home: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [animationStart, setAnimationStart] = useState(false);
  const [width, setWidth] = useState<number>(0); // Track screen width

  // Handle loader and animation delay
  useEffect(() => {
    if (!showLoader) {
      const timer = setTimeout(() => setAnimationStart(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [showLoader]);

  // Update screen width on mount and window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll();
  const { xValues, yValues, scaleValues } = getTransformValues(width);

  const x: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 0.1, 0.42, 0.6, 0.8],
    xValues
  );
  const y: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 0.1, 0.42, 0.6, 0.8],
    yValues
  );
  const scale: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 0.1, 0.42, 0.6, 0.8],
    scaleValues
  );

  return (
    <main className="relative">
      <AnimatePresence>
        {showLoader && (
          <LoadingScreen
            setShowLoader={setShowLoader}
            handlePlayMusic={() => console.log("Play music")}
          />
        )}
      </AnimatePresence>
      {!showLoader && (
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 5 }}
            className="fixed max-[1800px]:hidden left-10 max-[1875px]:left-2 top-1/2 -translate-y-1/2"
          >
            <MainNavbar />
          </motion.div>

          {/* Animated Image */}
          {animationStart && (
            <motion.div
              initial={{ x: "-50%", y: "-50%", rotate: 180, scale: 1.4 }}
              animate={{ x: "-50%", y: "50%", rotate: 0, scale: 1.4 }}
              style={{ x, y, scale }}
              transition={{
                rotate: { duration: 3, ease: "easeInOut" },
              }}
              className="fixed left-1/2 -translate-x-1/2 max-[1024px]:hidden"
            >
              <Image src={WorldImg} alt="world image" />
            </motion.div>
          )}

          <Navbar />
          <Hero />
          <Mission />
          <KeyFeature />
          <Application />
          <Tokenomics />
          <Faqs />
          <Footer />
        </div>
      )}
    </main>
  );
};

export default Home;
