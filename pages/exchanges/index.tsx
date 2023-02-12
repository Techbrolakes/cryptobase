import React from 'react';
import ExchangesSection from '@/blocks/exchanges/ExchangesSection';
import PageHead from '@/common/PageHead';
import MainLayout from '@/layouts/MainLayout';
import { NextPage } from 'next';

const Exchanges: NextPage = () => {
    return (
        <>
            <PageHead title="Exchanges" />
            <MainLayout>
                <ExchangesSection />
            </MainLayout>
        </>
    );
};

export default Exchanges;
