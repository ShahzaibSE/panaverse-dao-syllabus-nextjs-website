"use client";
import { useState, useRef } from "react";
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
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { InfoIcon } from "@chakra-ui/icons";
import { Course } from "./model";
import CourseDetails from "./courseDetails";

export const CourseContainer = (props: any) => {
  const { name, description, colorName } = props;
  return (
    <Card
      p={10}
      maxW="md"
      maxH="md"
      backgroundColor={colorName}
      boxSize={["xs", "sm", "md"]}
    >
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

export function SpecializedCourseContainer(props: any) {
  // Drawer State.
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  //
  const { name, description, course_outline } = props;
  return (
    <Box>
      <Card w={["sm", "md"]} h={["sm", "md"]} p={10}>
        <CardHeader>
          <Heading size="md"> {name} </Heading>
        </CardHeader>
        <CardBody>
          <Text noOfLines={[4, 5]}>{description}</Text>
        </CardBody>
        <CardFooter>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              ref={btnRef}
              size={["md", "lg"]}
              rightIcon={<InfoIcon />}
              onClick={onOpen}
              {...props}
            >
              Learn More
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
      <CourseDetails
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
        course={{ name, description, course_outline }}
      />
    </Box>
  );
}

export function transformText(text: string) {
  try {
    let name_arr = text.split("");
    let firstChar = name_arr[0].toUpperCase();
    name_arr[0] = firstChar;
    let routeName = name_arr.join("");
    return routeName;
  } catch (err) {
    throw err;
  }
}

//
export const speciliazed_courses: Array<Course> = [
  {
    route: "web3_metaverse",
    name: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    course_outline: [
      {
        cardTitle: "Blockchain and Metaverse Theory",
        url: "https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0",
      },
      {
        cardTitle: "Smart Contract Development in Solidity",
        url: "https://github.com/panaverse/defi-dapps-solidity-smart-contracts",
      },
      {
        cardTitle: "Dapp Development using Ethers.js and Next.js 13",
        url: "https://github.com/panaverse/dapps-nextjs",
      },
      {
        cardTitle: "Tokenomics",
        cardDetailedText:
          "Tokenomics is an important concept to consider when making an investment decision because ultimately a project that has smart and well-designed incentives to buy and hold tokens for the long haul is more likely to outlast and do better than a project that hasn't built an ecosystem around its token. A well-built platform often translates into higher demand over time as new investors flock to the project, which, in turn, boosts prices.",
      },
      {
        cardTitle: "Blockchain Project: Create a Token and Launch ICO/IEO/IDO",
        cardDetailedText:
          "The ICO ('Initial Coin Offering') industry has been booming, and it's completely reinventing the way new startups kickstart themselves. Understand the difference between IDO vs. IEO vs. ICO while working on projects",
      },
      {
        cardTitle: "Open Metaverse Web Development",
        cardDetailedText: "Open Metaverse Learning Repo",
        url: "https://github.com/panaverse/metaverse-web",
      },
      {
        cardTitle:
          "Blender 3D asset Creation for the Metaverse (Remote Zoom Class)",
        cardDetailedText:
          "Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.",
      },
    ],
  },
  {
    route: "artificial_intelligence",
    name: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    course_outline: [
      {
        cardTitle:
          "Introduction to Machine Learning, Data Science, and AI, AI for Everyone",
        url: "https://www.coursera.org/learn/ai-for-everyone",
      },
      {
        cardTitle:
          "Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models We will cover GPT-4, ChatGPT, etc. and Next.js 13",
        url: "https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45",
      },
      {
        cardTitle: "Python Crash Course  for TypeScript Developers",
        url: "https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5",
      },
      {
        cardTitle: "Deep Learning with Tensorflow",
        url: "https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2",
      },
      {
        cardTitle:
          "Machine Learning Engineering for Production (MLOps) using Terraform for CDK",
        url: "https://betterprogramming.pub/a-comprehensive-guide-to-mlops-infrastructure-as-code-iac-ef4c97742351",
      },
    ],
  },
  {
    route: "cloud_computing",
    name: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    course_outline: [
      {
        cardTitle:
          "Kubernetes: Up and Running: Dive into the Future of Infrastructure 3rd Edition",
        url: "https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3",
      },
      {
        cardTitle: "Cloud Development Kit for Kubernetes",
        url: "https://cdk8s.io/",
      },
      {
        cardTitle: "CDK for Terraform",
        url: "https://developer.hashicorp.com/terraform/cdktf",
      },
    ],
  },
  {
    route: "ambient_computing_iot",
    name: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    course_outline: [
      {
        cardTitle: "Alexa Skill Developement",
        url: "https://developer.amazon.com/en-US/alexa",
      },
      {
        cardTitle: "Alexa with Matter Protocol",
        url: "https://developer.amazon.com/en-US/alexa/matter",
      },
      {
        cardTitle:
          "Introduction to the Internet of Things and Embedded Systems",
        url: "https://docs.google.com/presentation/d/14OcW4HfS2i1Db1uKOU6SrckFEFjhSLMgfnHYB3XlEZo/edit?usp=shar",
        cardSubtitle: `What is the Fourth Industrial Revolution? 
        What is IoT? 
        Embedded Systems 
        Hardware and Software for IoT 
        Edge and Cloud Computing 
        The future of IoT is AI 
        Blockchain in the Internet of Things? 
        IoT + AI + Blockchain: The Fourth Industrial Revolution has begun
        How will Matter change the IoT Infrastructure and address issues
        Metaverse and IoT
        `,
      },
      {
        cardTitle:
          "The C Reference Book: The C programming language Embedded Programming book: Internet of things with ESP8266",
        url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
      },
      {
        cardTitle:
          "The C Reference Book: The C programming language, Embedded Programming book: Internet of things with ESP8266",
        url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
      },
      {
        cardTitle: "Introduction to C Part 1 (Weeks 3B, 4, and 5)",
        cardSubtitle:
          "C environment Setup for (Windows, Linux, and Mac OS systems)",
        url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
      },
      {
        cardTitle: "C Programming Part 2 (Weeks 6 and 7)",
        cardSubtitle:
          "C environment Setup for (Windows, Linux, and Mac OS systems)",
        url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
      },
      {
        cardTitle: "Introduction to Embedded systems Part 1 (Weeks 8)",
        cardSubtitle: "Basic Electronics and Introduction to microcontrollers",
        url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
      },
      {
        cardTitle: "Introduction to Embedded systems Part 2 (Weeks 9-12)",
        cardSubtitle: "Chapters 2-5 of “Internet of things with ESP8266",
        url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
      },
      {
        cardTitle: "Introduction to Embedded systems Part 2 (Weeks 9-12)",
        cardSubtitle: "Chapters 2-5 of “Internet of things with ESP8266",
        url: "https://www.rust-lang.org/what/embedded",
      },
      {
        cardTitle:
          "Embedded Programming using Rust (Extra Weeks in the Course)",
        cardSubtitle: "Chapters 2-5 of “Internet of things with ESP8266",
        url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
      },
      {
        cardTitle: "Hardware Requirments",
        cardSubtitle: `Esp8266 (Node MCU),
        Jumper Wires,
        Bread Board,
        LEDs,
        Sensors: (Dht11, ultrasonic sensor, IR sensor)
        `,
      },
    ],
  },
  {
    route: "genomics_bioinformatics",
    name: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data.",
    course_outline: [
      {
        cardTitle:
          "Python for biologists",
        cardSubtitle: "This course will focus on learning the basics of the Python programming language through genomics examples.",
        url: "https://www.pythonforbiologists.org/",
      },
      {
        cardTitle: "Bioinformatics with Python",
        cardSubtitle: "In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.",
        url: "https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_1",
      },
    ],
  },
  {
    route: "network_programmability_automation",
    name: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, and delivery models.",
    course_outline: [
      {
        cardTitle:
          "NPA-351: CCNA 200-301 Certification",
        cardSubtitle: "This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.",
        url: "https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1",
      },
      {
        cardTitle: "NPA-361: Network Programmability and Automation",
        cardSubtitle: "Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.",
        url: "https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3",
      }
    ],
  },
];
