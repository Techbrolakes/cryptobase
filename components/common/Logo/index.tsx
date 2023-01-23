import { Heading } from '@chakra-ui/react';
import React from 'react';
import constants from '@config/constants';
import { useRouter } from 'next/router';

const { CLIENT_ROUTES } = constants;
const Logo: React.FC = () => {
    const router = useRouter();
    return (
        <>
            <Heading onClick={() => router.push(CLIENT_ROUTES.home)} className="p-2">
                CryptoBase
            </Heading>
        </>
    );
};

export default Logo;
