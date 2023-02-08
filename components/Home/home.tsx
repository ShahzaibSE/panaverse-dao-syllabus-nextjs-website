"use client";
import React from "react";
import { motion } from "framer-motion";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
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
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { wrap } from "module";

const CourseContainer = (props: any) => {
  const { name, description, colorName } = props;
  return (
    <Card p={10} maxW="md" maxH="lg" backgroundColor={colorName}>
      <CardHeader>
        <Container>
          <Heading fontSize={["lg", "xl", "2xl"]} size="md">
            {name}
          </Heading>
        </Container>
      </CardHeader>
      <CardBody>
        <Container>
          <Text fontSize={["xs", "sm", "md", "lg"]}>{description}</Text>
        </Container>
      </CardBody>
    </Card>
  );
};

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

export default function HomePage() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <Box>
      <Box
        bgGradient="linear(135deg, #8BC6EC 0%, #9599E2 100%)"
        maxH={["lg", "xl"]}
        py={20}
        px={10}
      >
        <Flex>
          <Stack direction="column">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box pt={[10, 20]} px={[10, 20]}>
                <Container>
                  <Heading textAlign="left" fontSize={["lg", "xl", "2xl"]}>
                    Certified Web 3.0 and Metaverse Developer
                  </Heading>
                </Container>
              </Box>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
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
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Box px={[10, 20]} py={10}>
                <Container>
                  <Button
                    colorScheme="green"
                    size={["md", "lg"]}
                    rightIcon={<InfoIcon />}
                  >
                    Explore Course
                  </Button>
                </Container>
              </Box>
            </motion.div>
          </Stack>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box my={10} mx={10}>
              <Image src="assets/piaic-logo.png" alt="PIAIC" h={[200, 400, 600]}/>
            </Box>
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
      </Box>
      <Box my={10}>
        <Flex direction="column">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box p={20}>
              <Heading
                textAlign="center"
                fontSize={["xl", "2xl", "3xl", "4xl"]}
              >
                Core <span color="blue">Courses</span>
              </Heading>
            </Box>
          </motion.div>
          <Box>
            <Flex justify={"center"} alignItems="center">
              <Stack direction={["column", "row"]}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CourseContainer
                    name="Quarter I (Core)"
                    description="CS-101: Object-Oriented Programming using TypeScript"
                    colorName="red.200"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CourseContainer
                    name="Quarter II (Core)"
                    description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud 
                  Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                    colorName="yellow.200"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <CourseContainer
                    name="Quarter III (Core)"
                    description="$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development"
                    colorName="green.200"
                  />
                </motion.div>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
