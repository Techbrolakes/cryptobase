import React from 'react';
import { Box } from '@chakra-ui/react';
import BottomBar from './BottomBar';
import SideBar from './SideBar';

interface IProps {
    children: React.ReactNode;
}
const MainLayout: React.FC<IProps> = ({ children }: IProps) => {
    // const { colorMode, toggleColorMode } = useColorMode();
    // const bg = { dark: 'gray.800', light: 'gray.200' };

    return (
        <Box>
            <div className="app">
                <div className="sidebar">
                    <SideBar />
                </div>
                <div className="main">{children}</div>
            </div>
            <div className="bottom">
                <BottomBar />
            </div>
        </Box>
    );
};

export default MainLayout;
