"use client";
import React from "react";
import { Card, Text, Heading, Flex, Stack, Box, Wrap } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home/home";

export default function AboutPage() {
  return (
    <Box>
      {/* <header>
        <Header />
      </header> */}
      <main>
        <HomePage />
      </main>
      {/* <footer>
        <Footer/>
      </footer> */}
    </Box>
  );
}
