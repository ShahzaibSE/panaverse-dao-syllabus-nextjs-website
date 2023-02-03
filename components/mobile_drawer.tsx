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

export default function MobileDrawer() {
  const data = ["About", "Contact Us", "Web3"];
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
            <Link key={i}>
              <Button variant="text"> {item} </Button>
            </Link>
          ))}
        </VStack>
      </DrawerBase>
    </Flex>
  );
}
