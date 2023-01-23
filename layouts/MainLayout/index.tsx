import React from 'react';
import BottomBar from './BottomBar';
import SideBar from './SideBar';

interface IProps {
    children: React.ReactNode;
}
const MainLayout: React.FC<IProps> = ({ children }: IProps) => {
    return (
        <>
            <div className="app">
                <div className="sidebar min-h-screen">
                    <SideBar />
                </div>
                <div className="main">{children}</div>
            </div>
            <div className="bottom">
                <BottomBar />
            </div>
        </>
    );
};

export default MainLayout;
