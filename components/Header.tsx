"use client";

import React from "react";
//
import {
  Flex,
  Box,
  Text,
  Heading,
  Stack,
  Image,
  Card,
  CardBody,
  chakra,
  Button,
  Link,
  HStack,
} from "@chakra-ui/react";

const CTA = "Get Started";

export default function Header() {
  const data = ["About", "Contact Us", "Web3"];
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Image src="assets/panaverse-logo/panaverse80_80.jpg" h="50px" alt="Panaverse DAO"/>

        <HStack as="nav" spacing="5">
          {data.map((item: any, i: number) => (
            <Link key={i}>
              <Button variant="nav"> {item} </Button>
            </Link>
          ))}
        </HStack>
        <HStack>
          <Button>{CTA}</Button>
        </HStack>
      </Flex>
    </chakra.header>
  );
}
