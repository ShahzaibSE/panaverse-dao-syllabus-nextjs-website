"use client";
import "./globals.css";
import ChakraWrapper from "@/components/chakra";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useAnimation,
  useInView,
} from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useRef, useEffect, useCallback } from "react";

// ---- ///
// Parallax Scroll Configuration
/// ---- ///
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  // Fade In Entrance.
  const controls = useAnimation();
  const inView = useInView(ref);
  //Particles
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      {/* <head /> */}
      <body>
        <ChakraWrapper>
          <header>
            <Header />
          </header>
          {children}
          <footer>
            <Footer />
          </footer>
        </ChakraWrapper>
      </body>
    </html>
  );
}
