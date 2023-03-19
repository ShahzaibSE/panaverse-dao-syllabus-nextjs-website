"use client";
import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
} from "react";
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
//
import { Box } from "@chakra-ui/react";
import { wrap } from "module";
import {
  speciliazed_courses,
  SpecializedCourseContainer,
} from "../Utils/util";
import AboutDetails from "../Utils/aboutDetails";
import About from "@/app/about/page";
import { about_profile_details } from "../Utils/util";
import Slider from "react-slick";
// ----- //
/** Adding Custom animations in object */
// ----- //
export const customAnimations = {
  zoomInAnimation: { opacity: 1, scale: 1 },
};

// ---- ///
// Parallax Scroll Configuration
/// ---- ///
export function useParallax(
  value: MotionValue<number>,
  distance: number
) {
  return useTransform(
    value,
    [0, 1],
    [-distance, distance]
  );
}
//
// Settings for the slider
const settings = {
  dots: true,
  arrows: true,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function AboutPage() {
  const [slider, setSlider] =
    useState<Slider | null>(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const y = useParallax(scrollYProgress, 300);
  // Fade In Entrance.
  const controls = useAnimation();
  const inView = useInView(ref);
  //Particles
  const particlesInit = useCallback(
    async (engine: any) => {
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
    },
    []
  );

  const particlesLoaded = useCallback(
    async (container: any) => {
      await console.log(container);
    },
    []
  );
  // Carousal Data.
  // These are the images used in the slide
  const cards = [
    "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  ];
  //
  // useEffect(() => {
  //   if (inView) {
  //     // controls.start("visible");
  //     controls.start({ opacity: 1, scale: 1 });
  //   }
  // }, [controls, inView]);
  return (
    <Box>
      <Particles
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
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
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
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={
          customAnimations.zoomInAnimation
        }
        transition={{ duration: 0.5 }}
        ref={ref}
      >
        <Box>
          <AboutDetails
            title={about_profile_details[0].title}
            description={
              about_profile_details[0].description
            }
            imageUrl={
              about_profile_details[0].imageUrl
            }
          />
        </Box>
      </motion.div>
    </Box>
  );
}
