import PageHead from '@/common/PageHead';
import MainLayout from '@/layouts/MainLayout';
import { NextPage } from 'next';
import React from 'react';

const Nfts: NextPage = () => {
    return (
        <>
            <PageHead title="Nfts" />
            <MainLayout>
                <h1>News Page</h1>
            </MainLayout>
        </>
    );
};

export default Nfts;
