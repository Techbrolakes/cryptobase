import React from 'react';
import type { NextPage } from 'next';
import { Box, Button, Heading, Text, useColorMode } from '@chakra-ui/react';

const Home: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = { dark: 'gray.800', light: 'gray.200' };
    return (
        <Box bg={bg[colorMode]} className="min-h-screen">
            <div className="space-y-4 p-6">
                <Text textStyle="h1">Head</Text>
                <Text textStyle="h3">Head</Text>
                <Text textStyle="p">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, magnam fugit praesentium saepe,
                    ducimus provident vel inventore laborum cum maiores pariatur minima nesciunt obcaecati, in eligendi
                    officiis nihil debitis porro? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                    debitis corporis animi beatae voluptates non tempora nihil deleniti. Eaque odio corporis explicabo
                    ipsam perferendis quisquam velit, ad architecto recusandae temporibus.
                </Text>
                <Heading>CryptoBase</Heading>
                <Button onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}</Button>
            </div>
        </Box>
    );
};

export default Home;
