import PageHead from '@/common/PageHead';
import React from 'react';

interface IProps {
    children: React.ReactNode;
}
const MainLayout: React.FC<IProps> = ({ children }: IProps) => {
    return (
        <>
            <PageHead title="Home of crypto" />
            <section className="flex min-h-screen justify-between">
                <div>sider</div>
                <div>{children}</div>
            </section>
        </>
    );
};

export default MainLayout;
