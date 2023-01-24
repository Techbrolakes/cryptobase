import React from 'react';
import Lottie from 'lottie-react';
import bitcoin from '@/animations/bitcoin.json';

const Spinner: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col space-y-2 justify-center items-center">
            <Lottie animationData={bitcoin} className="w-48" />
            <p className="cb-text">Loading</p>
        </div>
    );
};

export default Spinner;
