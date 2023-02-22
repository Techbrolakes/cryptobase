import React from 'react';
import Spinner from '@/common/Spinner/Index';
import { useGetAllNewsQuery } from '@/services/CoinNewsApi';
import YahooSection from './YahooSection';
import CoindeskSection from './CoindeskSection';
import CoinjournalSection from './CoinjournalSection';
import CointelegraphSection from './CointelegraphSection';
import CryptoninjasSection from './CryptoninjasSection';

const NewsSection: React.FC = () => {
    const { data, isFetching, isLoading } = useGetAllNewsQuery(100);

    console.log(data);

    if (isFetching && isLoading) return <Spinner />;
    return (
        <section className="p-4 lg:p-6 space-y-12 mb-20 lg:mb-20">
            <h1 className="cb-heading-four">NewsSection</h1>

            <CryptoninjasSection />
            <CointelegraphSection />
            <YahooSection />
            <CoindeskSection />
            <CoinjournalSection />
        </section>
    );
};

export default NewsSection;
