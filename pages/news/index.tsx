import NewsSection from '@/blocks/news/NewsSection';
import PageHead from '@/common/PageHead';
import MainLayout from '@/layouts/MainLayout';
import { NextPage } from 'next';
import React from 'react';

const Nfts: NextPage = () => {
    return (
        <>
            <PageHead title="Crypto News" />
            <MainLayout>
                <NewsSection />
            </MainLayout>
        </>
    );
};

export default Nfts;
