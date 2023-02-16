"use client";

import React, { useRef, useEffect, useCallback } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useAnimation,
  useInView,
} from "framer-motion";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  Box,
  Wrap,
  Flex,
  Text,
  SimpleGrid,
  Stack,
  Heading,
  Button,
  Container,
  Image,
  Spacer,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  AspectRatio,
  WrapItem,
  Center,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react";
import SpecializedCourseContainer from "./courseDetailContainer";
import { speciliazed_courses } from "../util";

// ----- //
/** Adding Custom animations in object */
// ----- //
export const customAnimations = {
  zoomInAnimation: { opacity: 1, scale: 1 },
};

// ---- ///
// Parallax Scroll Configuration
/// ---- ///
export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function CoursePage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
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
  //
  //   useEffect(() => {
  //     if (inView) {
  //       // controls.start("visible");
  //       controls.start({ opacity: 1, scale: 1 });
  //     }
  //   }, [controls, inView]);
  return (
    <Box>
      {/* <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        ref={ref}
        options={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#034f84",
            },
            move: {
              bounce: false,
              direction: "none",
              enable: true,
              outModes: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
        }}
      /> */}
      <Flex direction={["column", "row"]}>
        <Box>
          <Heading as="h3">Specialized Course</Heading>
        </Box>
      </Flex>
    </Box>
  );
}
