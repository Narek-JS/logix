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
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './index.module.css';

const ThankYou: NextPage = () => {
    const { data: dataLatestBlogs } = useGetLatestBlogsQuery(1);
    const { data: dataLatestNews  } = useGetLatestNewsQuery(2);

    return (
        <Fragment>
            <Head>{metaTags.thankYou}</Head>
            <section className={classes.thankYouSection}>
                <Container>
                    <h1 className={classes.title}>Thank You!</h1>
                    <Note width={940} className={classes.note}>
                        Thank you for your request! We will get back to you shortly with your quote.Meanwhile, feel free to contact us directly at <Link href='tel:(888) 821-3636' className={classes.blue}>(888) 821-3636</Link> to speak to a live agent!You can also send us an email at <span className={classes.blue}>info@safelineinsurance.com</span>.
                        Our business hours are Monday through Friday, 8:30 a.m. to 5 p.m. PST.
                    </Note>
                    <h2 className={classes.subTitle}>
                        Truck Insurance Quote <span>- Bad Driving Record?</span> NO PROBLEM!!!
                    </h2>
                    <div className={classes.videoNode}>
                        <Video id='ZZp4697-OSk'/>
                        <Image
                            alt='thank you imnage'
                            src='/assets/images/thankYouImage.png'
                            width={468}
                            height={458}
                            className={classes.image}
                        />
                    </div>

                    <div className={classNames(classes.postGroups, {
                        [classes.postGroupsReverse]: dataLatestBlogs?.data?.length < dataLatestNews?.data?.length
                    })}>
                        <div className={classes.postGroup}>
                            <p className={classes.postGroupTitle}>Latest Blogs</p>
                            <div className={classes.posts}>
                                { dataLatestBlogs?.data.map(blog => (
                                    <PostCard
                                        key={blog.id}
                                        date={blog?.created_at || ''}
                                        title={blog?.slug || ''}
                                        description={blog?.body || ''}
                                        imagePath={blog?.image || ''}
                                        link={blog?.slug || ''}
                                        category='blogs'
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={classes.postGroup}>
                            <p className={classes.postGroupTitle}>Latest News</p>
                            <div className={classes.posts}>
                                { dataLatestNews?.data.map(news => (
                                    <PostCard
                                        key={news.id}
                                        date={news?.created_at || ''}
                                        title={news?.slug || ''}
                                        description={news?.body || ''}
                                        imagePath={news?.image || ''}
                                        link={news?.slug || ''}
                                        category='news'
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>  
            </section>
        </Fragment>
    );
};

export default ThankYou;


