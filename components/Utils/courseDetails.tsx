'use client';
import {useState} from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,Drawer, DrawerCloseButton, DrawerContent,
  Button, useDisclosure
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Course } from "./model";



export default function CourseDetails(props: any) {
  const {name, description} = props.course;

  return (
    <>
      <Drawer {...props}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{name}</DrawerHeader>
          <DrawerBody>
            <p>
             {description}
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
