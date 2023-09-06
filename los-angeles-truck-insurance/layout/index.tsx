import Head from 'next/head';
import React, { ReactNode, useEffect } from 'react';
import { Poppins } from 'next/font/google';
import { Header } from './Header';
import { useLayoutApis } from '@/hooks/useLayoutApis';
import { SocialLinks } from './SocialLinks';
import { FormQuote } from '@/pagesComponents/formQuote';
import { Conditional } from '@/componentns/Conditional';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selcetQouteFormMobileStatus } from '@/store/quoteForm';
import { selectSiteBarStatus } from '@/store/siteBar';
import { SiteBar } from './SiteBar';
import { Footer } from './Footer';
import { ScrollTopIcon } from './ScrollTopIcon';
import { Banner } from './Banner';
import { Loading } from '@/componentns/Loading';
import { selectLoading, setLoading } from '@/store/loading';

interface IProps {
  pageTitle?: string;
  children: React.ReactNode;
};

const ubuntuFont = Poppins({
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
    pageTitle = 'Los Angeles TRUCK INSURANCE'
}) => {
    const { isLoading } = useLayoutApis();
    const isOpenQouteForm = useAppSelector(selcetQouteFormMobileStatus);
    const isOpenSiteBar = useAppSelector(selectSiteBarStatus);
    const loading = useAppSelector(selectLoading);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(setLoading(isLoading));
    }, [isLoading]);

    return (
        <div className={ubuntuFont.className}>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Conditional condition={loading}>
                <Loading type='fullPage'/>
            </Conditional>
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
            <ScrollTopIcon />
            <Footer />
            <div id="protal" />
        </div>
    );
};

export default Layout;