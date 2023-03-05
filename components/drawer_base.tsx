"use client";

import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Image,
  Center,
  Link
} from "@chakra-ui/react";
import NextLink from "next/link";


export default function DrawerBase({
  placement = "right",
  width,
  isOpen,
  children,
  onClose,
  btnRef,
  title = "Menu",
  footer,
  data
}: any) {
  const p = 15;
  return (
    <Flex w={width}>
      <Drawer
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent alignItems="center">
          <DrawerCloseButton alignSelf="end" mx={p} my={p} />
          <DrawerHeader my={p}>
            {/* <Text as="p"> {title} </Text> */}
            <Center>
            <Link as={NextLink} href="/">
              <Image
                src="assets/panaverse-logo/panaverse_transparent_small.png"
                alt="Panaverse DAO"
              />
              </Link>
            </Center>
          </DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
