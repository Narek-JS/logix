import { NextPage } from 'next';
import { Fragment } from 'react';
import { Note } from '@/componentns/Note';
import { Video } from '@/componentns/Video';
import { metaTags } from '@/constants/metaTags';
import { Container } from '@/componentns/Container';
import { PostCard } from '@/pagesComponents/PostCard';
import { useGetLatestNewsQuery } from '@/store/latestNews';
import { useGetLatestBlogsQuery } from '@/store/latestBlogs';
import Head from 'next/head';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './index.module.css';
import { YoutubChanel } from '@/pagesComponents/YoutubChanel';

const randomNums = {
    blogsCount: Math.floor(Math.random() * 7) + 4,
    newsCount: Math.floor(Math.random() * 7) + 4
};

const ThankYou: NextPage = () => {
    const { data: dataLatestBlogs } = useGetLatestNewsQuery(randomNums.blogsCount);
    const { data: dataLatestNews }  = useGetLatestBlogsQuery(randomNums.newsCount);

    const data = Array.isArray(dataLatestBlogs?.data) && Array.isArray(dataLatestNews?.data) ? [
        dataLatestBlogs.data[dataLatestBlogs.data.length - 1],
        dataLatestNews.data[dataLatestNews.data.length - 1],
        dataLatestBlogs.data[dataLatestBlogs.data.length - 2],
    ] : [];
    return (
        <Fragment>
            <Head>{metaTags.thankYou}</Head>
            <section className={classes.thankYouSection}>
                <Container>
                    <Note>
                        Thank you for your insurance quote request. We will get back with you very shortly with the most competitive pricing.
                        In the meantime, feel free to call us directly at <span>(213) 634-3292</span> and one of our
                        live agents will be able to assist you with all your insurance needs!
                    </Note>
                </Container>  
            </section>
            <YoutubChanel mobile={true}/>
            <section className={classes.imageNode}>
                <Container>
                    <Image
                        alt='Thank You Image'
                        src='/assets/images/thankYouImg.png'
                        width={1220}
                        height={900}
                        className={classes.thankYouImage}
                    />
                </Container>
            </section>
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
        </Fragment>
    );
};

export default ThankYou;


