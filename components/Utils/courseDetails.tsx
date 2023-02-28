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
  Divider,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Course } from "./model";
import { Chrono } from "react-chrono";

export default function CourseDetails(props: any) {
  const { name, description, course_outline } = props.course;

  return (
    <>
      <Drawer {...props}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {" "}
            <Heading textAlign={["center"]} fontSize={["lg", "xl", "2xl"]}>
              {name}
            </Heading>
          </DrawerHeader>
          <DrawerBody>
            <Flex direction="column" justify="center">
              <Box>
                <Text
                  px={10}
                  as="p"
                  textAlign={["justify", "center"]}
                  fontSize={["xs", "sm", "md", "lg"]}
                >
                  {description}
                </Text>
                <Divider py={5} />
              </Box>
            </Flex>
            <Chrono items={course_outline} mode="VERTICAL"/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
