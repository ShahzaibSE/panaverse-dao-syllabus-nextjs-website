'use client';
import React from 'react'
import { Card, Text, Heading, Flex, Stack, Box, CardBody } from '@chakra-ui/react'
import Header from '@/components/Header';

export default function AboutPage() {
  return (
    <Box>
      <Flex>
        <Header />
      </Flex>
      <Flex>
        <Card>
          <CardBody>
            <Heading>Please Contact Us</Heading>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  )
}
