import { metaTags } from "@/constants/metaTags";
import { NextPage } from "next";
import { Fragment } from "react";
import { Banner } from "@/pagesComponents/home/Banner";
import { Container } from "@/componentns/Container";
import { TEST_all_insurances, TEST_general_insurances } from "@/constants/TEST_insurances";
import { InsuranceCard } from "@/pagesComponents/InsuranceCard";
import { AboutUs } from "@/pagesComponents/home/AboutUs";
import { Note } from "@/componentns/Note";
import { PostCard } from "@/pagesComponents/PostCard";
import { useGetLatestBlogsQuery } from "@/store/latestBlogs";
import { useGetLatestNewsQuery } from "@/store/latestNews";
import { HelpSection } from "@/pagesComponents/HelpSection";
import { InsuranceCardService } from "@/pagesComponents/InsuranceCardService";
import { ArrowIcon } from "@/public/assets/svgs/ArrowIcon";
import { TEST_benefits } from "@/constants/TEST_benefits";
import { GreenCheckMar } from "@/public/assets/svgs/GreenCheckMark";
import { YoutubChanel } from "@/pagesComponents/YoutubChanel";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import classes from './index.module.css';

const Home: NextPage = () => {
    const { data: dataLatestNews }  = useGetLatestNewsQuery(2);
    const { data: dataLatestBlogs } = useGetLatestBlogsQuery(2);

    return (
        <Fragment>
            <Head>{metaTags.home}</Head>
            <Banner />
            <section className={classes.generalInsurances}>
                <Container>
                    <div className={classes.cardsNode}>
                        { TEST_general_insurances.map(cardFields => (
                            <InsuranceCard {...cardFields} key={cardFields.id}/>
                        ))}
                    </div>
                </Container>
            </section>
            <section className={classes.aboutUs}>
                <Container>
                    <AboutUs />
                </Container>
            </section>
            <section className={classes.amazonContracter}>
                <Container>
                    <div className={classes.amazonContent}>
                        <Image
                            alt=""
                            src={'/assets/images/Amazon.png'}
                            width={90}
                            height={40}
                        />
                        <Link href='/'>
                            <span>Amazon </span><span>Contractor </span><span> Owner-Operators </span><span> Insurance </span>
                        </Link>
                    </div>
                </Container>
            </section>
            <section className={classes.attachmentNode}>
                <Container>
                    <div className={classes.cardsNode}>
                        { TEST_all_insurances.map(cardFields => (
                            <InsuranceCardService
                                key={cardFields.id}
                                {...cardFields}
                            />
                        ))}
                    </div>
                </Container>
            </section>
            <section className={classes.benefits}>
                <Container>
                    <div className={classes.benefitsWrapper}>
                        <Image
                            alt="Benefits Image"
                            src='/assets/images/benefitsImage.png'
                            width={600}
                            height={500}
                            className={classes.benefitsImage}
                        />
                        <div className={classes.benefitsContent}>
                            <p className={classes.benefitsTitle}>Your Benefits</p>
                            <ul className={classes.benefitsList}>
                                { TEST_benefits.map((message, index) => (
                                    <li key={index}>
                                        <GreenCheckMar />
                                        { message }
                                    </li>
                                ))}
                            </ul>
                            <Link href='/about' className={classes.benefitsLink}>
                                <ArrowIcon />
                                READ MORE
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
            <YoutubChanel sectionBg='#F4F7FB' />
            <section className={classes.articleSection}>
                <Container>
                    <Note withImg={true}>
                        Keep yourself updated with the latest blogs and news related to SafeLine Truck Insurance and truck industry
                    </Note>
                    <div className={classes.latesArticles}>
                        <div className={classNames(classes.postGroups, {
                            [classes.postGroupsReverse]: dataLatestBlogs?.data?.length < dataLatestNews?.data?.length
                        })}>
                            <div className={classes.postGroup}>
                                <p className={classes.postGroupTitle}>Latest <span>Blogs</span></p>
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
                                <p className={classes.postGroupTitle}>Latest <span>News</span></p>
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
                    </div>
                </Container>
            </section>
            <HelpSection />
        </Fragment>
    );
};

export default Home;