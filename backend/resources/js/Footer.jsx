import { Box, Text } from '@chakra-ui/react'
import * as React from 'react'

const Footer = () => {
    return (
        <Box
        as="footer"
        role="contentinfo"
        mt="auto"
        // maxW="7xl"
        bg="teal.700"
        color="white"
        py="8"
        >
                <Text
                fontSize="sm" textAlign="center"
                >
                    &copy; {new Date().getFullYear()} @Haramaki0326 All rights reserved.
                </Text>
        </Box>
  );
};

export default Footer;
