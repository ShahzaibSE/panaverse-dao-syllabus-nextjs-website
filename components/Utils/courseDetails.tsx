'use client';
import {useState} from "react";
import {
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,Drawer, DrawerCloseButton, DrawerContent,
  Button, useDisclosure
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";



export default function CourseDetails(props: any) {

  return (
    <>
      <Drawer {...props}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Course Details</DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
