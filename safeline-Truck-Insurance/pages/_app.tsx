import type { AppProps } from 'next/app';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import Layout from '@/layout';
import Head from 'next/head';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider store={store}>
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="view-transition"
            content="same-origin"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ReduxProvider>
  );
};
