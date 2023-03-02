"use client";
import React from "react";
import { Card, Text, Heading, Flex, Stack, Box, Wrap } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutPage from "@/components/About/about";

export default function About() {
  return (
    <Box>
      <main>
        <AboutPage />
      </main>
    </Box>
  );
}
