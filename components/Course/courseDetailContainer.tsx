"use client";
import {
  Box,
  Wrap,
  Flex,
  Text,
  SimpleGrid,
  Stack,
  Heading,
  Button,
  Container,
  Image,
  Spacer,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  AspectRatio,
  WrapItem,
  Center,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
} from "@chakra-ui/react";

import React from "react";

export default function SpecializedCourseContainer(props: any) {
  const { name, description } = props;
  return (
    <Card>
      <CardHeader>
        <Heading size="md"> {name} </Heading>
      </CardHeader>
      <CardBody>
        <Text>{description}</Text>
      </CardBody>
      <CardFooter>
        <Button>Learn More</Button>
      </CardFooter>
    </Card>
  );
}
