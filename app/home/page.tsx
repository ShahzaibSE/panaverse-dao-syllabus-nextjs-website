'use client';
import React from "react";
//
import HomePage from "@/components/Home/home";
import { Flex, Box } from "@chakra-ui/react";
import Header from "@/components/Header";

export default function Home() {
  return (
    <Box>
      <Flex>
        <Header />
      </Flex>
      <Flex>
        <HomePage />
      </Flex>
    </Box>
  );
}
