import { NextPage } from 'next';
import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { useDynamicSpace } from '@/hooks/useDynamicSpace';
import Link from 'next/link';
import Head from 'next/head';
import classes from './index.module.css';

const NotFound: NextPage = () => {
  const marginTop = useDynamicSpace(150, 1700, 320, 100000);
  const marginBottom = useDynamicSpace(100, 200, 320, 100000);

  return (
    <Fragment>
      <Head>{metaTags.notFound}</Head>
      <div
        className={classes.container}
        style={{
          marginTop: `${marginTop}px`,
          marginBottom: `${marginBottom}px`
        }}
      >
        <h1 className={classes.title}>404 - Page Not Found</h1>
        <p className={classes.message}>The page you&apos;re looking for could not be found.</p>
        <p className={classes.back}>
          Go back to 
          <Link href="/">
            <span className={classes.link}> the homepage</span>
          </Link>
        </p>
      </div>
    </Fragment>
  );
};

export default NotFound;


