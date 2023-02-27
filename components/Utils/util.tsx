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
  const { name, description } = props;
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
        course={{ name, description }}
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
    course_outline: {
      discipline_details: {
        discipline: {
          title: "Blockchain and Metaverse Theory",
          imageUrl: "assets/blockchain-in-metaverse.jpeg",
          theory1: {
            title:
              "The Metaverse: And How It Will Revolutionize Everything by Matthew Ball",
            link: "https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0",
          },
          theory2: {
            title: "Smart Contract Development in Solidity",
            link: "https://github.com/panaverse/defi-dapps-solidity-smart-contracts",
          },
          theory3: {
            title: "Dapp Development using Ethers.js and Next.js 13",
            link: "https://github.com/panaverse/dapps-nextjs",
          },
          theory4: {
            title: "Tokenomics",
            description:
              "Tokenomics is an important concept to consider when making an investment decision because ultimately a project that has smart and well-designed incentives to buy and hold tokens for the long haul is more likely to outlast and do better than a project that hasn't built an ecosystem around its token. A well-built platform often translates into higher demand over time as new investors flock to the project, which, in turn, boosts prices.",
          },
          theory5: {
            title: "Blockchain Project: Create a Token and Launch ICO/IEO/IDO",
            description:
              "The ICO ('Initial Coin Offering') industry has been booming, and it's completely reinventing the way new startups kickstart themselves. Understand the difference between IDO vs. IEO vs. ICO while working on projects",
          },
          theory6: {
            title: "Open Metaverse Web Development",
            descritpion: "Open Metaverse Learning Repo", 
            link: "https://github.com/panaverse/metaverse-web"
          },
          theory7: {
            title: "Blender 3D asset Creation for the Metaverse (Remote Zoom Class)",
            description: "Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse."
          }
        },
      },
    },
  },
  {
    route: "artificial_intelligence",
    name: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    course_outline: {
      discipline_details: {
        discipline: {
          title: "Smart Contract Development in Solidity",
          theory1: {
            title:
              "Solidity Programming Essentials - Second Edition By Ritesh Modi",
            link: "https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181",
          },
          solidity_repo: {
            title: "Solidity Learning Repo",
            link: "https://github.com/panaverse/dapps-nextjs",
          },
        },
      },
    },
  },
  {
    route: "cloud_computing",
    name: "Cloud-Native Computing Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    course_outline: {
      discipline_details: {
        discipline: {
          title: "Smart Contract Development in Solidity",
          solidity_essentials: {
            title:
              "Solidity Programming Essentials - Second Edition By Ritesh Modi",
            resource:
              "https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181",
          },
          solidity_repo: {
            title: "Solidity Learning Repo",
            resource: "https://github.com/panaverse/dapps-nextjs",
          },
        },
      },
    },
  },
  {
    route: "ambient_computing_iot",
    name: "Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    course_outline: {
      discipline_details: {
        discipline: {
          title: "Smart Contract Development in Solidity",
          solidity_essentials: {
            title:
              "Solidity Programming Essentials - Second Edition By Ritesh Modi",
            resource:
              "https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181",
          },
          solidity_repo: {
            title: "Solidity Learning Repo",
            resource: "https://github.com/panaverse/dapps-nextjs",
          },
        },
      },
    },
  },
  {
    route: "genomics_bioinformatics",
    name: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data.",
    course_outline: {
      discipline_details: {
        discipline: {
          title: "Smart Contract Development in Solidity",
          solidity_essentials: {
            title:
              "Solidity Programming Essentials - Second Edition By Ritesh Modi",
            resource:
              "https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181",
          },
          solidity_repo: {
            title: "Solidity Learning Repo",
            resource: "https://github.com/panaverse/dapps-nextjs",
          },
        },
      },
    },
  },
  {
    route: "network_programmability_automation",
    name: "Network Programmability and Automation Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, and delivery models.",
    course_outline: {
      discipline_details: {
        discipline: {
          title: "Smart Contract Development in Solidity",
          solidity_essentials: {
            title:
              "Solidity Programming Essentials - Second Edition By Ritesh Modi",
            resource:
              "https://www.packtpub.com/product/solidity-programming-essentials-second-edition/9781803231181",
          },
          solidity_repo: {
            title: "Solidity Learning Repo",
            resource: "https://github.com/panaverse/dapps-nextjs",
          },
        },
      },
    },
  },
];
