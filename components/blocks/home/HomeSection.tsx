import React from 'react';
import CryptoList from './CryptoList';
import CryptoStats from './CryptoStats';

const HomeSection: React.FC = () => {
    return (
        <div>
            <CryptoStats />
            <CryptoList />
        </div>
    );
};

export default HomeSection;
