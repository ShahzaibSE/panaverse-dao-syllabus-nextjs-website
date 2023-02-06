"use client";
import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
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
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const CourseContainer = () => {
  return (
    <Card>
      <CardHeader></CardHeader>
    </Card>
  );
};

export default function HomePage() {

  return (
    <Box>
      <Box
        bgGradient="linear(135deg, #8BC6EC 0%, #9599E2 100%)"
        minHeight="40%"
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
          <Spacer />
        </Flex>
      </Box>
      <Box>
        <Flex direction="row" justify="center" align="center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Box p={20}>
              <Heading textAlign="center" fontSize={["lg", "xl", "2xl"]}>
                Core Courses
              </Heading>
            </Box>
          </motion.div>
        </Flex>
      </Box>
    </Box>
  );
}
