import React from 'react';
import type { NextPage } from 'next';
import { Box, Button, Heading, useColorMode } from '@chakra-ui/react';

const Home: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box>
            <h1>Next Starter Project</h1>
            <Heading>Head</Heading>{' '}
            <Button onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}</Button>
        </Box>
    );
};

export default Home;
