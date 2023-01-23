import PageHead from '@/common/PageHead';
import MainLayout from '@/layouts/MainLayout';
import { NextPage } from 'next';
import React from 'react';

const Exchanges: NextPage = () => {
    return (
        <>
            <PageHead title="Exchanges" />
            <MainLayout>
                <h1>Exchanges Page</h1>
            </MainLayout>
        </>
    );
};

export default Exchanges;
