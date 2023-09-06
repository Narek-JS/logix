import { NextPage } from 'next';
import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { useGetLatestNewsQuery } from '@/store/latestNews';
import { useGetLatestBlogsQuery } from '@/store/latestBlogs';
import { Container } from '@/componentns/Container';
import { PostCard } from '@/pagesComponents/PostCard';
import { YoutubChanel } from '@/pagesComponents/YoutubChanel';
import Head from 'next/head';
import classes from './index.module.css';
import { ArticleNote } from '@/componentns/ArticleNote';
import Image from 'next/image';
import { SectionTitle } from '@/componentns/SectionTitle';

const randomNums = {
    blogsCount: Math.floor(Math.random() * 7) + 4,
    newsCount: Math.floor(Math.random() * 7) + 4
};

const AboutUs: NextPage = () => {
    const { data: dataLatestBlogs } = useGetLatestNewsQuery(randomNums.blogsCount);
    const { data: dataLatestNews }  = useGetLatestBlogsQuery(randomNums.newsCount);

    const data = Array.isArray(dataLatestBlogs?.data) && Array.isArray(dataLatestNews?.data) ? [
        dataLatestBlogs.data[dataLatestBlogs.data.length - 1],
        dataLatestNews.data[dataLatestNews.data.length - 1],
        dataLatestBlogs.data[dataLatestBlogs.data.length - 2],
    ] : [];

    return (
        <Fragment>
            <Head>{metaTags.aboutUs}</Head>
            <section className={classes.aboutUs}>
                <Container>
                    <div className={classes.insuranceServiceNode}>
                        <ArticleNote
                            type='border'
                            maxWidth={724}
                            minWidth={350}
                        >
                            <p>
                                Los Angeles Truck Insurance offers reliable, convenient, and affordable commercial truck insurance.
                                Our mission is to provide you with quality insurance without the hassle.
                                We make sure you receive the proper coverage to protect your truck.
                            </p>
                            <p>
                                We help guide trucking businesses, motor carriers, and owner-operators in order for them to
                                obtain the right coverage to protect them under any circumstance. For over a decade, our
                                excellent service and skilled agents have made us one of the leading providers for
                                commercial truck insurance in the state of California.
                            </p>
                        </ArticleNote>
                        <Image
                            alt="insurance Service Image"
                            src='/assets/images/insuranceServiceImage.png'
                            width={436}
                            height={262}
                            className={classes.insuranceServiceImage}
                        />
                    </div>
                    <SectionTitle size={28}>
                        <span>About us:</span> Los Angeles <span>Truck</span> Insurance <span>Coverages</span>
                    </SectionTitle>
                    <div className={classes.insuranceServiceNode}>
                        <ArticleNote>
                            <p>
                                Our popularity comes from our excellent staff of skilled agents and our customer service is some of the best in the business.
                                We treat you like a partner and always work to put your best interests forward.
                                We search high and low for the best and most effective coverage for your trucking business.
                                Your protection from accidents, no matter the size, is what drives us to excel in the industry!
                            </p>
                            <p>
                                When you call or visit our office, you will always be greeted with a skilled agent who listens to your needs.
                                They have the knowledge and experience to handle any questions you may have in regards to protecting your truck.
                                We are expert navigators of the insurance landscape. We have climbed every mountain, and swam every river
                                to understand how to specifically serve your insurance requirements.
                            </p>
                        </ArticleNote>
                    </div>
                </Container>
            </section>
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
        </Fragment>
    );
};

export default AboutUs;