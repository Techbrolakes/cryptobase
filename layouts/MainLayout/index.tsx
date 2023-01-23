import React from 'react';
import Menu from './Menu';

interface IProps {
    children: React.ReactNode;
}
const MainLayout: React.FC<IProps> = ({ children }: IProps) => {
    return (
        <>
            <div className="app ">
                <div className="sidebar min-h-screen">
                    <Menu />
                </div>
                <div className="main">{children}</div>
            </div>
        </>
    );
};

export default MainLayout;
