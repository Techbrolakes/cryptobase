import { CircularProgress, Text } from '@chakra-ui/react';
import React from 'react';

const Spinner: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col space-y-2 justify-center items-center">
            <CircularProgress isIndeterminate color="blue.300" />
            <Text as={'p'}>Loading</Text>
        </div>
    );
};

export default Spinner;
