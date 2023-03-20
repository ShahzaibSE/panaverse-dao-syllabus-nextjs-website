"use client";
import React from 'react';
import {
    Box,
    Wrap,
    Flex,
    Text,
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
    WrapItem,
  } from "@chakra-ui/react";

export default function ContactPage() {
  return (
    <Box>
        <Card>
            <CardHeader>
                <Heading textAlign={"left"} fontSize={["lg", "xl", "2xl"]}>Contact Us</Heading>
            </CardHeader>
            <CardBody>
                <Flex p={10}>
                    <form>
                        
                    </form>
                </Flex>
            </CardBody>
        </Card>
    </Box>
  )
}
