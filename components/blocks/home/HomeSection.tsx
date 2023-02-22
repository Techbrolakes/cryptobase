import React from 'react';
import CryptoList from './CryptoList';
import CryptoNews from './CryptoNews';
import CryptoStats from './CryptoStats';

const HomeSection: React.FC = () => {
    return (
        <div className="space-y-10 lg:space-y-20 mb-12">
            <CryptoStats />
            <CryptoList />
            <CryptoNews />
        </div>
    );
};

export default HomeSection;
