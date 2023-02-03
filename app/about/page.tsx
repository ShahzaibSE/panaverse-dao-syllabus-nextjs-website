"use client";
import React from "react";
import { Card, Text, Heading, Flex, Stack, Box, Wrap } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <Flex>
      <header>
        <Header />
      </header>
      <main>
        <Box>
          <Text as="b">About Us</Text>
        </Box>
      </main>
      <footer>
        <Wrap mt="auto">
          <Footer />
        </Wrap>
      </footer>
    </Flex>
  );
}
