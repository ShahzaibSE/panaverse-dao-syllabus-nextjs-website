'use client';
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
  } from "@chakra-ui/react";

export const CourseContainer = (props: any) => {
    const { name, description, colorName } = props;
    return (
      <Card
        p={10}
        maxW="md"
        maxH="lg"
        backgroundColor={colorName}
        boxSize={["xs", "sm", "md"]}
      >
        <CardHeader>
          <Container>
            <Heading fontSize={["lg", "xl", "2xl"]} size="md">
              {name}
            </Heading>
          </Container>
        </CardHeader>
        <CardBody>
          <Container>
            <Text fontSize={["xs", "sm", "md", "lg"]}>{description}</Text>
          </Container>
        </CardBody>
      </Card>
    );
  };