import PageHead from '@/common/PageHead';
import MainLayout from '@/layouts/MainLayout';
import { NextPage } from 'next';
import React from 'react';

const Coins: NextPage = () => {
    return (
        <>
            <PageHead title="Coins" />
            <MainLayout>
                <h1>Coins Page</h1>
            </MainLayout>
        </>
    );
};

export default Coins;
