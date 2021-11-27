import React from "react";
import {Link as ReactRouterDom} from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Link,
  Stack,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons";

const DrawerExample = (props) => {
  // function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <HamburgerIcon ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </HamburgerIcon>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Stack
              direction="column"
              alignItems="left"
            >
              <Link as={ReactRouterDom} to="/" onClick={onClose}>List</Link>
              <Link as={ReactRouterDom} to="/Upload" onClick={onClose}>Upload</Link>
            </Stack>
          </DrawerBody>

          {/* <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerExample;