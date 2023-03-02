"use client";
import { useState } from "react";
import {
  Flex,
  Text,
  Heading,
  Container,
  Image,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from "@chakra-ui/react";

export default function AboutDetails() {
  return (
    <Card size={"lg"}>
      <Card>
        <CardHeader>
          <Flex>
            <Flex
              flex="1"
              gap="4"
              alignItems="center"
              flexWrap="wrap"
              justify={"center"}
            >
              <Avatar
                name="President Arif Alvi"
                src="assets/president-arif-alvi.jpeg"
                size={["sm", "md", "lg"]}
              />
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex>
            <Flex justify={"center"} flexWrap="wrap"></Flex>
          </Flex>
        </CardBody>
      </Card>
    </Card>
  );
}
