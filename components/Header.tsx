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
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Stack direction={["column", "row"]} spacing="24px">
      <Flex>
        <Image
          borderRadius="full"
          boxSize="150px"
          src="assets/panaverse_dao_logo.jpeg"
          alt="Panaverse DAO"
        />
      </Flex>
      <Flex></Flex>
    </Stack>
  );
}
