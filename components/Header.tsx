"use client";

import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
//
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Flex,
  Image,
  chakra,
  Button,
  Link,
  HStack,
} from "@chakra-ui/react";
import MobileDrawer from "./mobile_drawer";
//
import { transformText } from "./Utils/util";

const CTA = "Apply";

export default function Header() {
  const data = ["about", "course"];
  const router = useRouter();
  return (
    <chakra.header id="header">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Flex
          w="100%"
          px="6"
          py="5"
          align="center"
          justify="space-between"
        >
          <Link as={NextLink} href="/">
            <Image
              src="assets/panaverse_dao_no_background.png"
              h={["70px", "100px", "120px"]}
              alt="Panaverse DAO"
            />
          </Link>

          <HStack
            as="nav"
            spacing="5"
            display={{ base: "none", md: "flex" }}
          >
            {data.map((item: any, i: number) => (
              <Link
                key={i}
                fontSize={[
                  "xs",
                  "sm",
                  "md",
                  "lg",
                  "xl",
                ]}
                href={`/${item}`}
              >
                <Button variant="nav">
                  {" "}
                  {transformText(item)}{" "}
                </Button>
              </Link>
            ))}
          </HStack>
          <HStack>
            <Link
              href="https://www.piaic.org/"
              target={"_blank"}
            >
              <Button
                size={["sm", "md", "lg"]}
                colorScheme="telegram"
                rightIcon={<ExternalLinkIcon />}
              >
                {CTA}
              </Button>
            </Link>
            <MobileDrawer />
          </HStack>
        </Flex>
      </motion.div>
    </chakra.header>
  );
}
