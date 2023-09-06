import { NextPage } from 'next';
import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { HelpSection } from '@/pagesComponents/HelpSection';
import { Banner } from '@/pagesComponents/certificate/Banner';
import { YoutubChanel } from '@/pagesComponents/YoutubChanel';
import { Container } from '@/componentns/Container';
import { PostCard } from '@/pagesComponents/PostCard';
import { useGetLatestNewsQuery } from '@/store/latestNews';
import { useGetLatestBlogsQuery } from '@/store/latestBlogs';
import Head from 'next/head';
import classes from './index.module.css';

const randomNums = {
    blogsCount: Math.floor(Math.random() * 7) + 4,
    newsCount: Math.floor(Math.random() * 7) + 4
};

const Certificate: NextPage = () => {
    const { data: dataLatestBlogs } = useGetLatestNewsQuery(randomNums.blogsCount);
    const { data: dataLatestNews }  = useGetLatestBlogsQuery(randomNums.newsCount);

    const data = Array.isArray(dataLatestBlogs?.data) && Array.isArray(dataLatestNews?.data) ? [
        dataLatestBlogs.data[dataLatestBlogs.data.length - 1],
        dataLatestNews.data[dataLatestNews.data.length - 1],
        dataLatestBlogs.data[dataLatestBlogs.data.length - 2],
    ] : [];

    return (
        <Fragment>
            <Head>{metaTags.certificate}</Head>
            <Banner />
            <YoutubChanel />
            <section className={classes.posts}>
                <Container>
                    <div className={classes.wrapperMightAlso}>
                        <h3 className={classes.contentBlocksTitle}>
                            You <span>Might</span> Also <span>Like</span>
                        </h3>
                        <div className={classes.contentBlocks}>
                            { data?.map((news, index) => ( 
                                <PostCard
                                    maxWidth='390px'
                                    width='31%'
                                    category={'blogs'}
                                    date={news?.created_at || ''}
                                    title={news?.slug || ''}
                                    description={news?.body || ''}
                                    imagePath={news?.image || ''}
                                    link={news?.slug || '' }
                                    key={index}
                                />
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
            <HelpSection />
        </Fragment>
    );
};

export default Certificate;