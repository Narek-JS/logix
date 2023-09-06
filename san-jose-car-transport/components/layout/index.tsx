import React, { Fragment } from 'react';
import Head from 'next/head';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '@/store';
import { Header } from './Header';
import { Banner } from './Banner';
import { SideBarMenu } from './SideBarMenu';
import { Footer } from './Footer';
import { SocialLinks } from './SocialLinks';
import { useRouter } from 'next/router';

const queryClient = new QueryClient();

interface IProps {
  pageTitle?: string;
  children: React.ReactNode;
};

const Layout: React.FC<IProps> = ({ children, pageTitle = 'San Jose Car Transport' }) => {
    const { pathname, query } = useRouter();
    const isBanner =  ['/blogs', '/news', '/404', '/customer-reviews'].includes(pathname) || query.dynamicPage; 

    return (
        <Fragment>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <main>
                <ReduxProvider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <Header />
                        {!isBanner && <Banner />}
                        <SideBarMenu />
                        <SocialLinks />
                        {children}
                        <Footer />
                    </QueryClientProvider>
                </ReduxProvider>
            </main>
        </Fragment>
    )
};

export default Layout;