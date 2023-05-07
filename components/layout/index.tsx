import React from 'react';
// import Navbar from './Navbar';
// import ZFooter from './ZFooter';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

interface Props {
    children?: React.ReactNode | string;
    title?: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
    const { t } = useTranslation();

    return (
        <React.Fragment>
            <Head>
                <title>{title || t('mainTitle')}</title>
            </Head>
            <header>{/* <Navbar /> */}</header>
            <main>{children}</main>
            {/* <ZFooter /> */}
        </React.Fragment>
    );
};

export default Layout;
