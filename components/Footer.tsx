"use client";

import React from "react";
import { Wrap, Text, WrapItem } from "@chakra-ui/react";

export default function Footer() {
  return (
    <footer>
      <Wrap style={{position:"fixed", bottom: 0}}>
        <WrapItem>
          <Text as="b">Footer</Text>
        </WrapItem>
      </Wrap>
    </footer>
  );
}
