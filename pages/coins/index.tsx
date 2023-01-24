import CoinSection from '@/blocks/coins/CoinSection';
import PageHead from '@/common/PageHead';
import MainLayout from '@/layouts/MainLayout';
import { NextPage } from 'next';
import React from 'react';

const Coins: NextPage = () => {
    return (
        <>
            <PageHead title="Coins" />
            <MainLayout>
                <CoinSection />
            </MainLayout>
        </>
    );
};

export default Coins;
