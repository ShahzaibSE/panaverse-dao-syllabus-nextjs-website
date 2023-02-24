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
  Card,
  CardBody,
  Image
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
              <Text
                as="p"
                textAlign={["justify"]}
                fontSize={["xs", "sm", "md", "lg"]}
              >
                {description}
              </Text>
              <Box>
                <Chrono mode="VERTICAL">
                  <div>
                    <div style={{ width: "250px", height: "250px" }}>
                      <Image
                        style={{ maxWidth: "100%", maxHeight: "100%" }}
                        alt="test"
                        src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                      />
                    </div>
                  </div>
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
                      fought in Dunkirk (Dunkerque), France, during the Second
                      World War, between the Allies and Nazi Germany.
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
              </Box>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
