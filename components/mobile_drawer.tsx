"use client";

import React from "react";
import DrawerBase from "./drawer_base";
import {
  useDisclosure,
  Flex,
  Box,
  Button,
  VStack,
  Icon,
  HStack,
  Link,
} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import NextLink from "next/link";
import { transformText } from "./Utils/util";

export default function MobileDrawer() {
  const data = ["about", "contact", "course"];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();
  return (
    <Flex display={{ base: "flex", md: "none" }}>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon />
      </Button>

      <DrawerBase isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef}>
        <VStack alignItems="left">
          {data.map((item, i) => (
            <Link key={i} as={NextLink} href={`/${item}`} onClick={onClose}>
              <Button variant="text"> {transformText(item)} </Button>
            </Link>
          ))}
        </VStack>
      </DrawerBase>
    </Flex>
  );
}
