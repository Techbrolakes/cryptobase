import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '@/layouts/MainLayout';
import PageHead from '@/common/PageHead';
import HomeSection from '@/blocks/home/HomeSection';

const Home: NextPage = () => {
    return (
        <MainLayout>
            <PageHead title="Home of crypto" />
            <HomeSection />
        </MainLayout>
    );
};

export default Home;
