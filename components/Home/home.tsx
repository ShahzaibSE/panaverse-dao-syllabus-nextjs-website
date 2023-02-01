"use client";
import React from "react";
//
import Header from "../Header";
import Footer from "../Footer";
//
import { Box, Wrap, Flex } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box>
      <header>
        <Wrap>
          <Header />
        </Wrap>
      </header>
      <main>
        <Flex>
          <div>Home</div>
        </Flex>
      </main>
      <footer>
        <Wrap>
          <Footer />
        </Wrap>
      </footer>
    </Box>
  );
}
