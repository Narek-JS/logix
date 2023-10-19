import { Posts } from '@/components/Posts';
import { metaTags } from '@/constants/metaTags';
import { Fragment } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Blogs: NextPage = () => {

    return (
        <Fragment>
          <Head>{metaTags.blogs}</Head>
          <Posts />
        </Fragment>
    );
};

export default Blogs;