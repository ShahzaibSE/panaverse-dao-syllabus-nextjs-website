"use client";
import React from "react";
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
  AspectRatio,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

export default function HomePage() {
  return (
    <Box bgGradient="linear(135deg, #8BC6EC 0%, #9599E2 100%)" minHeight="40%">
      <Flex>
        <Stack direction="column">
          <Box pt={[10, 20]} px={[10, 20]}>
            <Container>
              <Heading textAlign="left" fontSize={["lg", "xl", "2xl"]}>
                Certified Web 3.0 and Metaverse Developer
              </Heading>
            </Container>
          </Box>
          <Box pt={10} px={[10, 20]}>
            <Container>
              <Text as="p" textAlign="left" fontSize={["xs", "sm", "md", "lg"]}>
                Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
                Cloud, Edge, Ambient Computing/IoT, Network Automation, and
                Bioinformatics Technologies
              </Text>
            </Container>
          </Box>
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
        </Stack>
        <Spacer />
      </Flex>
    </Box>
  );
}
