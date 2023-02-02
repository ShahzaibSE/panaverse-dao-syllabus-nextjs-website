'use client';

import React from 'react'
import { Box, Text, Image } from "@chakra-ui/react";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";

const MenuToggle: any = ({ toggle, isOpen }: any) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

export default function Logo(props:any) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  )
}
