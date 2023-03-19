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
import React, {
  useRef,
  useEffect,
  useCallback,
} from "react";

// ---- ///
// Parallax Scroll Configuration
/// ---- ///
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </ChakraWrapper>
      </body>
    </html>
  );
}
