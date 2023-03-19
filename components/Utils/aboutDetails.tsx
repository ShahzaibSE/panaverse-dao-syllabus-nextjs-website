"use client";
import { useState } from "react";
import {
  Box,
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
import { AboutProfile } from "./model";

export default function AboutDetails(props: any) {
  const { title, description, imageUrl } = props;
  return (
    // <Card size={"lg"}>
      <Card size={"lg"}>
        <CardHeader>
          <Flex>
            <Flex
              flex="1"
              gap="4"
              alignItems="center"
              flexWrap="wrap"
              justify={"center"}
              px={10} pt={10}
            >
              <Avatar
                name={title}
                src={imageUrl}
                size="2xl"
              />
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody>
          <Flex
            justify={"center"}
            flexWrap="wrap"
            align={"center"}
            direction={["column", "row"]}
          >
            <Box px={10} pt={5} pb={10}>
              <Container>
                <Text
                  fontSize={[
                    "xs",
                    "sm",
                    "md",
                    "lg",
                  ]}
                  textAlign="justify"
                >
                  {description}
                </Text>
              </Container>
            </Box>
          </Flex>
        </CardBody>
      </Card>
    // </Card>
  );
}
