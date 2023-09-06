import Head from 'next/head';
import React, { ReactNode } from 'react';
import { Ubuntu } from 'next/font/google';
import { Header } from './Header';
import { useLayoutApis } from '@/hooks/useLayoutApis';
import { Banner } from './Banner';
import { SocialLinks } from './SocialLinks';
import { FormQuote } from '@/pagesComponents/formQuote';
import { Conditional } from '@/componentns/Conditional';
import { useAppSelector } from '@/store/hooks';
import { selcetQouteFormMobileStatus } from '@/store/quoteForm';
import { selectSiteBarStatus } from '@/store/siteBar';
import { SiteBar } from './SiteBar';
import { Footer } from './Footer';
import { ScrollTopIcon } from './ScrollTopIcon';

interface IProps {
  pageTitle?: string;
  children: React.ReactNode;
};

const ubuntuFont = Ubuntu({
    weight: '400',
    subsets: ['latin'],
    style: 'normal'
});

const LayoutPortal: React.FC<{ children: ReactNode; condition: boolean }> = ({ children, condition }) => (
    <Conditional condition={condition}>
        <div className='layoutPortal'>
            {children}
        </div>
    </Conditional>
);

const Layout: React.FC<IProps> = ({
    children,
    pageTitle = 'Safeline-Insurance'
}) => {
    useLayoutApis();
    const isOpenQouteForm = useAppSelector(selcetQouteFormMobileStatus);
    const isOpenSiteBar = useAppSelector(selectSiteBarStatus);

    return (
        <div className={ubuntuFont.className}>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Header />
            <Banner />
            <SocialLinks />
            <LayoutPortal condition={isOpenQouteForm}>
                <FormQuote />
            </LayoutPortal>
            <LayoutPortal condition={isOpenSiteBar}>
                <SiteBar />
            </LayoutPortal>
            <main {...{ children }} />
            <Footer />
            <ScrollTopIcon />
            <div id="protal" />
        </div>
    );
};

export default Layout;