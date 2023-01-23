import React from 'react';
import type { NextPage } from 'next';
import { Box, Button, Heading, Text, useColorMode } from '@chakra-ui/react';
import MainLayout from '@/layouts/MainLayout';
import PageHead from '@/common/PageHead';

const Home: NextPage = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const bg = { dark: 'gray.800', light: 'gray.200' };
    return (
        <MainLayout>
            <PageHead title="Home of crypto" />
            <section className="min-h-screen">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum eveniet, sapiente fugiat aut et
                aspernatur adipisci ea blanditiis aperiam eos voluptate alias necessitatibus eligendi vero autem
                repudiandae accusamus libero.
            </section>
        </MainLayout>
    );
};

export default Home;
