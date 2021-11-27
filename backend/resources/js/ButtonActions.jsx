import React, { useState } from "react";
import {
  HStack,
  Button,
} from "@chakra-ui/react"

const ButtonActions = () => {
  return (
    <>
      <HStack
        // maxW='60%'
        // ml='1500px' my='200px' 
        my="50px"
        justify='center'
      >
        <Button type='submit' colorScheme='blue'>SUBMIT</Button>
        <Button>CANCEL</Button>
      </HStack>
    </>
  );
};

export default ButtonActions;
