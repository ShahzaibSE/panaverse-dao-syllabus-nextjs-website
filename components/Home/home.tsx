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
//
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
import { InfoIcon } from "@chakra-ui/icons";
import { wrap } from "module";
import { CourseContainer } from "../util";

const responsiveSettings = [
  {
    breakpoint: 800,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
  },
  {
    breakpoint: 500,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
  },
];

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

export default function HomePage() {
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
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  //
  useEffect(() => {
    if (inView) {
      // controls.start("visible");
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);
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
      />
      <Flex
        bgGradient="linear(135deg, #8BC6EC 0%, #9599E2 100%)"
        maxH={["lg", "xl"]}
        py={20}
        px={10}
      >
        <Stack direction="column">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={customAnimations.zoomInAnimation}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Box pt={[10, 20]} px={[10, 20]}>
                <Container>
                  <Heading textAlign="left" fontSize={["lg", "xl", "2xl"]}>
                    Certified Web 3.0 and Metaverse Developer
                  </Heading>
                </Container>
              </Box>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={customAnimations.zoomInAnimation}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Box pt={10} px={[10, 20]}>
                <Container>
                  <Text
                    as="p"
                    textAlign="left"
                    fontSize={["xs", "sm", "md", "lg"]}
                  >
                    Consolidating Web 3.0, Metaverse, Artificial Intelligence
                    (AI), Cloud, Edge, Ambient Computing/IoT, Network
                    Automation, and Bioinformatics Technologies
                  </Text>
                </Container>
              </Box>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={customAnimations.zoomInAnimation}
            transition={{ duration: 0.5 }}
            ref={ref}
          >
            <Box px={[10, 20]} py={10}>
              <Container>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Button
                    colorScheme="green"
                    size={["md", "lg"]}
                    rightIcon={<InfoIcon />}
                  >
                    Explore Course
                  </Button>
                </motion.div>
              </Container>
            </Box>
          </motion.div>
        </Stack>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={customAnimations.zoomInAnimation}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Box
              my={10}
              mx={20}
              boxSize="xs"
              display={{ base: "none", md: "flex" }}
            >
              <Center>
                <Image
                  src="assets/piaic-logo.png"
                  alt="PIAIC"
                  h={400}
                  w={400}
                />
              </Center>
            </Box>
          </motion.div>
        </motion.div>
        {/* <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box my={10} mx={10} boxSize={["md", "lg", "xl"]} display={{ base: "none", md: "flex" }}>
                <Zoom scale={1.4} indicators={true} arrows={false}>
                  {images.map((each, index) => (
                    <div key={index} style={{ width: "100%" }}>
                      <Image
                        style={{ objectFit: "cover", width: "100%" }}
                        alt="Slide Image"
                        src={each}
                      />
                    </div>
                  ))}
                </Zoom>
              </Box>
            </motion.div> */}
      </Flex>
      <Flex direction="column" my={10}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={customAnimations.zoomInAnimation}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Box p={20}>
              <Heading textAlign="center" fontSize={["2xl", "3xl", "4xl"]}>
                Core{" "}
                <Text display="inline" color="blue.300">
                  Courses
                </Text>
              </Heading>
            </Box>
          </motion.div>
        </motion.div>
        <Box>
          <Flex justify={"center"} alignItems="center">
            <Stack direction={["column", "row"]}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={customAnimations.zoomInAnimation}
                transition={{ duration: 0.5 }}
                ref={ref}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <CourseContainer
                    name="Quarter I (Core)"
                    description="CS-101: Object-Oriented Programming using TypeScript"
                    colorName="red.200"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={customAnimations.zoomInAnimation}
                transition={{ duration: 0.5 }}
                ref={ref}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <CourseContainer
                    name="Quarter II (Core)"
                    description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud 
                  Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                    colorName="yellow.200"
                  />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={customAnimations.zoomInAnimation}
                transition={{ duration: 0.5 }}
                ref={ref}
              >
                <motion.div whileHover={{ scale: 1.1 }}>
                  <CourseContainer
                    name="Quarter III (Core)"
                    description="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
                    colorName="green.200"
                  />
                </motion.div>
              </motion.div>
            </Stack>
          </Flex>
        </Box>
      </Flex>
      <Flex direction="column" my={20}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={customAnimations.zoomInAnimation}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <Box pt={[10, 20]} px={10}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Heading
                as={"h3"}
                textAlign="center"
                fontSize={["xl", "2xl", "3xl"]}
                size="lg"
                lineHeight={2}
              >
                The Program in a Nutshell
              </Heading>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Heading
                as={"h3"}
                textAlign="center"
                fontSize={["lg", "xl", "2xl"]}
                size="sm"
                color={"blue.300"}
              >
                Earn While You Learn
              </Heading>
            </motion.div>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={customAnimations.zoomInAnimation}
          // animate={controls}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Box pt={10} px={10}>
              <Container>
                <Text
                  as="p"
                  textAlign={"justify"}
                  fontSize={["xs", "sm", "md", "lg"]}
                >
                  In this brand-new type of curriculum, students will learn how
                  to make money and boost exports in the classroom and will
                  begin doing so within six months of the program beginning. It
                  resembles a cross between a corporate venture and an
                  educational project.
                </Text>
              </Container>
            </Box>
          </motion.div>
        </motion.div>
      </Flex>
      <Flex direction={["column", "row"]} my={20}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={customAnimations.zoomInAnimation}
          // animate={controls}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <Box pt={10} px={10} mt={20}>
            <Heading
              as={"h3"}
              textAlign="left"
              fontSize={["xl", "2xl", "3xl"]}
              size="lg"
              lineHeight={2}
            >
              What is Web3?
            </Heading>
            <Text
              as="p"
              textAlign={"left"}
              fontSize={["xs", "sm", "md", "lg"]}
              py={10}
            >
              Web3 is an idea for a new iteration of the World Wide Web which
              incorporates concepts such as decentralization, blockchain
              technologies, and token-based economics.
            </Text>
            <UnorderedList>
              <ListItem>
                <Text
                  as="p"
                  fontSize={["xs", "sm", "md", "lg"]}
                  lineHeight={10}
                >
                  Web3 is decentralized.
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as="p"
                  fontSize={["xs", "sm", "md", "lg"]}
                  lineHeight={10}
                >
                  Web3 is permissionless.
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as="p"
                  fontSize={["xs", "sm", "md", "lg"]}
                  lineHeight={10}
                >
                  Web3 has native payments.
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as="p"
                  fontSize={["xs", "sm", "md", "lg"]}
                  lineHeight={10}
                >
                  Web3 is trustless.
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={customAnimations.zoomInAnimation}
          // animate={controls}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Box px={10} pt={10} mt={20}>
              <Image src="assets/working-on-laptop.avif" alt="What is Web3?" />
            </Box>
          </motion.div>
        </motion.div>
      </Flex>
      <Flex direction={["column", "row"]}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={customAnimations.zoomInAnimation}
          // animate={controls}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <Box pt={20} px={10}>
            <Heading
              as={"h3"}
              textAlign="left"
              fontSize={["xl", "2xl", "3xl"]}
              size="lg"
              lineHeight={2}
            >
              What is Metaverse?
            </Heading>
            <Text
              as="p"
              textAlign={"left"}
              fontSize={["xs", "sm", "md", "lg"]}
              py={10}
            >
              A massively scaled and interoperable network of real time rendered
              3D virtual worlds that can be experienced synchronously and
              persistently by an effectively unlimited number of users with an
              individual sense of presence, and with continuity of data.
            </Text>
            <UnorderedList>
              <ListItem>
                <Text
                  as="p"
                  fontSize={["xs", "sm", "md", "lg"]}
                  lineHeight={10}
                >
                  Addressing remote work challenges.
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as="p"
                  fontSize={["xs", "sm", "md", "lg"]}
                  lineHeight={10}
                >
                  Great tool for healthcare professionals.
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as="p"
                  fontSize={["xs", "sm", "md", "lg"]}
                  lineHeight={10}
                >
                  Providing the experience of virtual tours.
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as="p"
                  fontSize={["xs", "sm", "md", "lg"]}
                  lineHeight={10}
                >
                  Making online games more exciting.
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as="p"
                  fontSize={["xs", "sm", "md", "lg"]}
                  lineHeight={10}
                >
                  Virtual work and learning spaces.
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as="p"
                  fontSize={["xs", "sm", "md", "lg"]}
                  lineHeight={10}
                >
                  Virtual businesses and markets.
                </Text>
              </ListItem>
              <ListItem>
                <Text
                  as="p"
                  fontSize={["xs", "sm", "md", "lg"]}
                  lineHeight={10}
                >
                  Expansion of social media platforms.
                </Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={customAnimations.zoomInAnimation}
          // animate={controls}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Box px={10} py={20} mt={10} borderRadius={20}>
              <Image src="assets/the-metaverse.jpeg" alt="What is Metaverse?" />
            </Box>
          </motion.div>
        </motion.div>
      </Flex>
      <Flex direction={["column", "row"]} justify="center" align="center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={customAnimations.zoomInAnimation}
          // animate={controls}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <Box pt={10} px={10} mt={20}>
            <Container>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Heading
                  as={"h3"}
                  textAlign="center"
                  fontSize={["xl", "2xl", "3xl"]}
                  size="lg"
                  lineHeight={2}
                >
                  Shape Your{" "}
                  <Text as="b" display="inline" color={"red.300"}>
                    Future
                  </Text>
                </Heading>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Text
                  as="p"
                  textAlign={"justify"}
                  fontSize={["xs", "sm", "md", "lg"]}
                  py={10}
                >
                  This curriculum is intended for beginners who want to learn
                  software development from the ground up. The first three
                  quarters are shared by all specialties and are dedicated to
                  studying Object-Oriented Programming and cutting-edge
                  Full-Stack Web 2.0 development. It is going to be a
                  fifteen-month-long hybrid program that includes both onsite
                  and online classes and is divided into five quarters of 13
                  weeks each. The emphasis will be on hands-on learning by
                  educating students to produce projects. To accommodate
                  everyone, courses will be held primarily on weekends or after
                  6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid
                  teaching format, with core onsite classes complemented by
                  online Zoom laboratories and recorded videos.
                </Text>
              </motion.div>
            </Container>
          </Box>
        </motion.div>
      </Flex>
      <Flex direction={["column", "row"]}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={customAnimations.zoomInAnimation}
          // animate={controls}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <Box pt={10} px={10} mt={20}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Heading
                as={"h3"}
                textAlign="left"
                fontSize={["xl", "2xl", "3xl"]}
                size="lg"
                lineHeight={2}
              >
                The Outcome for Participants of the Program
              </Heading>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Text
                as="p"
                textAlign={"justify"}
                fontSize={["xs", "sm", "md", "lg"]}
                py={10}
              >
                The graduates of this program will own products (Full-Stack App
                Templates, AR and VR Experiences, and APIs) that are marketed
                globally by the Panaverse DAO and, if they like, will also be
                able to start off by offering services at a rate of $50 per hour
                ($96,000 per year). This would give Pakistani professionals and
                students a fantastic opportunity to better their financial
                situation while also giving the economy a much-needed boost by
                expanding software exports.
              </Text>
            </motion.div>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={customAnimations.zoomInAnimation}
          // animate={controls}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <motion.div whileHover={{ scale: 1.1 }}>
            <Box px={10} py={[10, 20]} mt={10} borderRadius={20}>
              <Image
                minW={[300, 400, 500]}
                minH={[300, 400, 500]}
                src="assets/web3-careers.webp"
                alt="Web3 Careers"
              />
            </Box>
          </motion.div>
        </motion.div>
      </Flex>
    </Box>
  );
}
