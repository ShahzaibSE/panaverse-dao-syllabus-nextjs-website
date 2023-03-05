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
import { AboutProfile } from "./model";

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
          <Heading
            fontSize={["lg", "xl", "2xl"]}
            size="md"
          >
            {name}
          </Heading>
        </Container>
      </CardHeader>
      <CardBody>
        <Container>
          <Text
            fontSize={["xs", "sm", "md", "lg"]}
          >
            {description}
          </Text>
        </Container>
      </CardBody>
    </Card>
  );
};

export function SpecializedCourseContainer(
  props: any
) {
  // Drawer State.
  const { isOpen, onOpen, onClose } =
    useDisclosure();
  const btnRef = useRef();
  //
  const { name, description, course_outline } =
    props;
  return (
    <Box>
      <Card
        w={["sm", "md"]}
        h={["sm", "md"]}
        p={10}
      >
        <CardHeader>
          <Heading size="md"> {name} </Heading>
        </CardHeader>
        <CardBody>
          <Text noOfLines={[4, 5]}>
            {description}
          </Text>
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
        course={{
          name,
          description,
          course_outline,
        }}
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
export const speciliazed_courses: Array<Course> =
  [
    {
      route: "web3_metaverse",
      name: "Web 3.0(Blockchain)  and  Metaverse",
      description:
        "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
      course_outline: [
        {
          cardTitle:
            "Blockchain and Metaverse Theory",
          url: "https://www.amazon.com/Metaverse-How-Will-Revolutionize-Everything/dp/1324092033/ref=tmm_hrd_swatch_0",
          cardSubtitle: `
        A blockchain is a type of distributed database or ledger—one of today’s top tech trends—which means the power to update a blockchain is distributed between the nodes, or participants, of a public or private computer network. This is known as distributed ledger technology, or DLT.
        Nodes are incentivized with digital tokens or currency to make updates to blockchains.

        The term "metaverse" was first used in Neal Stephenson's iconic cyberpunk novel Snow Crash, published in 1992. 
        But, what is the Metaverse? The Metaverse (always capitalized in Stephenson's fiction) is described as a shared "imaginary realm" that is "made available to the public across the worldwide fiber-optics network" and projected onto virtual reality goggles in the novel.
        Therefore, the phrase can apply to digital settings that have been enhanced with virtual reality (VR) or augmented reality (AR). 
        `,
        },
        {
          cardTitle:
            "Smart Contract Development in Solidity",
          url: "https://github.com/panaverse/defi-dapps-solidity-smart-contracts",
          cardSubtitle: `Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. 
        They typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary's involvement or time loss.`,
        },
        {
          cardTitle:
            "Dapp Development using Ethers.js and Next.js 13",
          url: "https://github.com/panaverse/dapps-nextjs",
          cardSubtitle: `Decentralized applications or dApps have become the backbone of the growing Web3 ecosystem. 
        From DeFi to gaming, e-commerce, social media and even enterprise, dApps have enabled numerous services, 
        creating utility and value for Web3 users.`,
        },
        {
          cardTitle: "Tokenomics",
          cardSubtitle: `Tokenomics is an important concept to consider when making an investment decision because ultimately a project that has smart and well-designed incentives to buy and hold tokens for the long haul is more likely to outlast and do better than a project that hasn't built an ecosystem around its token. 
          A well-built platform often translates into higher demand over time as new investors flock to the project, which, in turn, boosts prices.`,
        },
        {
          cardTitle:
            "Blockchain Project: Create a Token and Launch ICO/IEO/IDO",
          cardSubtitle:
            "The ICO ('Initial Coin Offering') industry has been booming, and it's completely reinventing the way new startups kickstart themselves. Understand the difference between IDO vs. IEO vs. ICO while working on projects",
        },
        {
          cardTitle:
            "Open Metaverse Web Development",
          cardSubtitle:
            "Open Metaverse Learning Repo",
          cardDetailedText: `Metaverse development is still in its early stages, and many platforms are working on it. 
        The next major thing in website development and design would be the Metaverse, a virtual reality platform. 
        This would make it possible for designers to produce more lifelike, realistic, and engaging consumer designs. 
        The Metaverse would enable programmers to construct more dynamic and immersive web designs. `,
          url: "https://github.com/panaverse/metaverse-web",
        },
        {
          cardDetailedText: `you will learn how to make the created 3D model work properly in any program such as game engines. By the end of this book, you will be able to efficiently create any type of 3D asset from scratch for use in any type of situation: from still renders, to animation, to games.`,
          cardTitle:
            "Blender 3D asset Creation for the Metaverse (Remote Zoom Class)",
          cardSubtitle:
            "Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.",
        },
      ],
    },
    {
      route: "artificial_intelligence",
      name: "Artificial Intelligence (AI) Specialization",
      description:
        "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      course_outline: [
        {
          cardTitle:
            "Introduction to Machine Learning, Data Science, and AI, AI for Everyone",
          cardSubtitle: `Artificial intelligence is the simulation of human intelligence processes by machines, 
        especially computer systems. Specific applications of AI include expert systems, natural language processing, 
        speech recognition and machine 
        vision.`,
          url: "https://www.coursera.org/learn/ai-for-everyone",
        },
        {
          cardTitle:
            "Building Next-Gen Intelligent Apps with OpenAI’s Powerful Models We will cover GPT-4, ChatGPT, etc. and Next.js 13",
          cardSubtitle: `ChatGPT is an artificial intelligence chatbot developed by OpenAI and launched in November 2022. 
        It is built on top of OpenAI's GPT-3 family of large language models and has been fine-tuned using both supervised and 
        reinforcement learning techniques.`,
          url: "https://towardsdatascience.com/gpt-4-is-coming-soon-heres-what-we-know-about-it-64db058cfd45",
        },
        {
          cardTitle:
            "Python Crash Course  for TypeScript Developers",
          cardSubtitle: `Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. 
        It supports multiple programming paradigms, including structured, object-oriented and functional programming.`,
          url: "https://www.amazon.com/Python-Crash-Course-2nd-Edition/dp/1593279280/ref=sr_1_5",
        },
        {
          cardTitle:
            "Deep Learning with Tensorflow",
          cardSubtitle: `TensorFlow is a free and open-source software library for machine learning and artificial intelligence. 
        It can be used across a range of tasks but has a particular focus on training and inference of deep neural networks.`,
          url: "https://www.amazon.com/Learning-Python-Second-Fran%C3%A7ois-Chollet/dp/1617296864/ref=sr_1_2",
        },
        {
          cardTitle:
            "Machine Learning Engineering for Production (MLOps) using Terraform for CDK",
          cardSubtitle: `MLOps or ML Ops is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently. 
        The word is a compound of "machine learning" and the continuous development practice of DevOps in the software field.`,
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
          cardSubtitle: `Kubernetes is an open-source container orchestration system for automating software deployment, scaling, and management. Originally designed by Google, the project is now maintained by the Cloud Native Computing Foundation. 
        The name Kubernetes originates from Greek, meaning 'helmsman' or 'pilot'.`,
          url: "https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_3",
        },
        {
          cardTitle:
            "Cloud Development Kit for Kubernetes",
          cardSubtitle: `cdk8s is an open-source software development framework for defining Kubernetes applications and reusable abstractions using familiar programming languages and rich object-oriented APIs. 
        cdk8s apps synthesize into standard Kubernetes manifests which can be applied to any Kubernetes cluster.`,
          url: "https://cdk8s.io/",
        },
        {
          cardTitle: "CDK for Terraform",
          cardSubtitle: `Terraform is an open-source infrastructure-as-code software tool created by HashiCorp. 
        Users define and provide data center infrastructure using a declarative configuration language known as HashiCorp Configuration Language, or optionally JSON.`,
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
          cardSubtitle: `
        Image result for alexa skill development
        The Alexa Skills Kit (ASK) is a software development framework that enables you to create content, called skills. 
        Skills are like apps for Alexa. 
        With an interactive voice interface, Alexa gives users a hands-free way to interact with your skill.`,
        },
        {
          cardTitle: "Alexa with Matter Protocol",
          url: "https://developer.amazon.com/en-US/alexa/matter",
          cardSubtitle: `
        Alexa supports the following three connection options for Matter devices: You can connect your device directly to Alexa with Matter over Wi-Fi. 
        You can connect Alexa Connect Kit (ACK) devices to Alexa with the ACK SDK for Matter. The SDK supports Matter over Wi-Fi.1`,
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
          cardSubtitle: `The C Programming Language is a computer programming book written by Brian Kernighan and Dennis Ritchie, the latter of whom originally designed and implemented the language, as well as co-designed the Unix operating system with which development of the language was closely intertwined.`,
        },
        {
          cardTitle:
            "The C Reference Book: The C programming language, Embedded Programming book: Internet of things with ESP8266",
          url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
          cardSubtitle: `The C Programming Language is a computer programming book written by Brian Kernighan and Dennis Ritchie, the latter of whom originally designed and implemented the language, as well as co-designed the Unix operating system with which development of the language was closely intertwined.`,
        },
        {
          cardTitle:
            "Introduction to C Part 1 (Weeks 3B, 4, and 5)",
          cardSubtitle:
            "C environment Setup for (Windows, Linux, and Mac OS systems)",
          url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
        },
        {
          cardTitle:
            "C Programming Part 2 (Weeks 6 and 7)",
          cardSubtitle:
            "C environment Setup for (Windows, Linux, and Mac OS systems)",
          url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
        },
        {
          cardTitle:
            "Introduction to Embedded systems Part 1 (Weeks 8)",
          cardSubtitle:
            "Basic Electronics and Introduction to microcontrollers",
          url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
        },
        {
          cardTitle:
            "Introduction to Embedded systems Part 2 (Weeks 9-12)",
          cardSubtitle:
            "Chapters 2-5 of “Internet of things with ESP8266",
          url: "https://drive.google.com/drive/folders/1CZFxLSFoo9rl3le7KRuhUwLEV6h4xLXN?usp=sharing",
        },
        {
          cardTitle:
            "Introduction to Embedded systems Part 2 (Weeks 9-12)",
          cardSubtitle:
            "Chapters 2-5 of “Internet of things with ESP8266",
          url: "https://www.rust-lang.org/what/embedded",
        },
        {
          cardTitle:
            "Embedded Programming using Rust (Extra Weeks in the Course)",
          cardSubtitle:
            "Chapters 2-5 of “Internet of things with ESP8266",
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
          cardTitle: "Python for biologists",
          cardSubtitle:
            "This course will focus on learning the basics of the Python programming language through genomics examples.",
          url: "https://www.pythonforbiologists.org/",
        },
        {
          cardTitle: "Bioinformatics with Python",
          cardSubtitle:
            "In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data.",
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
          cardSubtitle:
            "This course will focus on learning the basics of the networking and preparing for the new Cisco Certified Network Associate (CCNA) exam. This comprehensive course focuses on the solutions and technologies needed to implement and administer a broad range of modern networking and IT infrastructure.",
          url: "https://www.amazon.com/CCNA-200-301-Official-Guide-Library/dp/1587147149/ref=sr_1_1",
        },
        {
          cardTitle:
            "NPA-361: Network Programmability and Automation",
          cardSubtitle:
            "Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer.",
          url: "https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3",
        },
      ],
    },
  ];

export const about_profile_details: Array<AboutProfile> =
  [
    {
      title: "President Arif Alvi",
      description: `Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018 
    to present. Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental 
    Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. 
    He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and 
    in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’. 
    President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. 
    He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), 
    Pakistan Association of Orthodontists (2005).`,
      imageUrl: "assets/president-arif-alvi.jpeg",
    },
    // {
    //   title: "Chairman Zia Khan",
    //   description: `CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. 
    //   Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. 
    //   Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. 
    //   Mentored and trained hundreds of thousands of developers. 
    //   Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. 
    //   Certified Public Accountant and Certified Management Accountant in USA.`,
    //   imageUrl: "assets/zia-khan.jpeg",
    // },
  ];
