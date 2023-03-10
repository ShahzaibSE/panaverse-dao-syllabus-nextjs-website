"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
// Components.
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home/home";
//
import { Box, Wrap, Flex, Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
