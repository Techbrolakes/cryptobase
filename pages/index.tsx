import React from 'react';
import type { NextPage } from 'next';
import { Box, Button, Heading, Text, useColorMode } from '@chakra-ui/react';

const Home: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box>
            <h1>Next Starter Project</h1>
            <Text textStyle="h1" color="text">
                Head
            </Text>
            <Heading>CryptoBase</Heading>
            <Button onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}</Button>
        </Box>
    );
};

export default Home;
