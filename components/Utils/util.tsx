"use client";
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
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { InfoIcon } from "@chakra-ui/icons";
import { Course } from "./model";

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
  const { name, description } = props;
  return (
    <Card
      w={["sm","md"]}
      h={["sm", "md"]}
      p={10}
    >
      <CardHeader>
        <Heading size="md"> {name} </Heading>
      </CardHeader>
      <CardBody>
        <Text noOfLines={[4,5]}>{description}</Text>
      </CardBody>
      <CardFooter>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button size={["md", "lg"]} rightIcon={<InfoIcon />} {...props}>
            Learn More
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
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
export const speciliazed_courses: Array<Course> =
  [
    {
      route: "web3_metaverse",
      name: "Web 3.0 (Blockchain) and Metaverse Specialization",
      description:
        "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    },
    {
      route: "artificial_intelligence",
      name: "Artificial Intelligence (AI) and Deep Learning Specialization",
      description:
        "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    },
    {
      route: "cloud_computing",
      name: "Cloud-Native Computing Specialization",
      description:
        "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    },
    {
      route: "ambient_computing_iot",
      name: "Ambient Computing and IoT Specialization",
      description:
        "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    },
    {
      route: "genomics_bioinformatics",
      name: "Genomics and Bioinformatics Specialization",
      description:
        "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data.",
    },
    {
      route: "network_programmability_automation",
      name: "Network Programmability and Automation Specialization",
      description:
        "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, and delivery models.",
    },
  ];
