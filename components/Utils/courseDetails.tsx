"use client";
import { useState } from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  Box,
  Flex,
  Text,
  Heading,
  Container,
  Image,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Course } from "./model";
import { Chrono } from "react-chrono";

export default function CourseDetails(props: any) {
  const { name, description } = props.course;

  return (
    <>
      <Drawer {...props}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {" "}
            <Heading textAlign={"justify"} fontSize={["lg", "xl", "2xl"]}>
              {name}
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction="column" justify="center">
              <Container>
              <Text
                as="p"
                textAlign={["justify"]}
                fontSize={["xs", "sm", "md", "lg"]}
              >
                {description}
              </Text>
              </Container>
            </Flex>
            <Chrono mode="VERTICAL">
              <Flex direction="column" justify="center">
                <Box>
                  <Heading
                    fontSize={["lg", "xl", "2xl"]}
                    textAlign={["justify", "center"]}
                  >
                    Blockchain and Metaverse Theory
                  </Heading>
                  {/* <Image
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    alt="test"
                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                  /> */}
                </Box>
                <Box>
                  <Text
                    as="p"
                    textAlign={["justify"]}
                    fontSize={["xs", "sm", "md", "lg"]}
                  >
                    The Metaverse: And How It Will Revolutionize Everything by Matthew Ball.
                  </Text>
                </Box>
                <Box></Box>
              </Flex>
              <div>
                <h3>This is a List</h3>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                </ul>
              </div>
              <div>
                <h3>Dunkirk</h3>
                <p>
                  The Battle of Dunkirk (French: Bataille de Dunkerque) was
                  fought in Dunkirk (Dunkerque), France, during the Second World
                  War, between the Allies and Nazi Germany.
                </p>
              </div>
              <div style={{ margin: "1rem" }}>
                <h3>Table</h3>
                <table>
                  <thead>
                    <tr>
                      <td>Column 1</td>
                      <td>Column 2</td>
                      <td>Column 3</td>
                      <td>Column 4</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Value 1</td>
                      <td>Value 2</td>
                      <td>Value 3</td>
                      <td>Value 4</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Chrono>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
