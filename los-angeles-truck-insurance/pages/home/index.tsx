import { metaTags } from "@/constants/metaTags";
import { NextPage } from "next";
import { Fragment } from "react";
import { Banner } from "@/pagesComponents/home/Banner";
import { Container } from "@/componentns/Container";
import { TEST_all_insurances, TEST_insurances_service_links } from "@/constants/TEST_insurances";
import { InsuranceCard } from "@/pagesComponents/InsuranceCard";
import { Note } from "@/componentns/Note";
import { PostCard } from "@/pagesComponents/PostCard";
import { useGetLatestBlogsQuery } from "@/store/latestBlogs";
import { useGetLatestNewsQuery } from "@/store/latestNews";
import { HelpSection } from "@/pagesComponents/HelpSection";
import { SectionTitle } from "@/componentns/SectionTitle";
import { ArticleNote } from "@/componentns/ArticleNote";
import { WhiteSmallArrowIcon } from "@/public/assets/svgs/WhiteSmallArrowIcon";
import { SmallRightYelloArrow } from "@/public/assets/svgs/SmallRightYelloArrow";
import { YoutubChanel } from "@/pagesComponents/YoutubChanel";
import Head from "next/head";
import classNames from "classnames";
import classes from './index.module.css';
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
    const { data: dataLatestNews }  = useGetLatestNewsQuery(2);
    const { data: dataLatestBlogs } = useGetLatestBlogsQuery(2);

    return (
        <Fragment>
            <Head>{metaTags.home}</Head>
            <Banner />
            <section className={classes.insuranceServices}>
                <Container>
                    <h2 className={classes.insuranceServicesSubTitle}>Los Angeles Truck Insurance</h2>
                    <SectionTitle
                        color="#FFC822"
                        size={40}
                        mediaSize={{ screen: 430, size: 25 }}
                    >
                        What Services Does Los Angeles Truck Insurance Offer?
                    </SectionTitle>
                    <div className={classes.insuranceServiceNode}>
                        <ArticleNote
                            title="Who We Are"
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
            <section className={classes.insuranceServiceLinksSection}>
                <Container>
                    <div className={classes.insuranceServiceLinks}>
                        { TEST_insurances_service_links.map(({
                            id, image, title, link, description
                        }) => (
                            <div
                                key={id}
                                className={classes.insuranceServiceLink}
                            >
                                <Image
                                    alt="service Link Image"
                                    src={image}
                                    width={290}
                                    height={200}
                                />
                                <p>
                                    <i><WhiteSmallArrowIcon /></i>
                                    <span>{title}</span>
                                </p>
                                <div className={classes.insuranceServiceLinkContent}>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                    <Link href={link}>
                                        <SmallRightYelloArrow />
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
            <YoutubChanel />
            <section className={classes.attachmentNode}>
                <Container>
                    <SectionTitle position="center" size={40}>
                        <span>Our </span>Insurance <span>Services</span>
                    </SectionTitle>
                    <div className={classes.cardsNode}>
                        { TEST_all_insurances.map(cardFields => (
                            <InsuranceCard
                                key={cardFields.id}
                                {...cardFields}
                            />
                        ))}
                    </div>
                </Container>
            </section>
            <section className={classes.articleSection}>
                <Container>
                    <Note beforeChildren={() => (
                        <SectionTitle>
                            Stay <span>Updated</span>
                        </SectionTitle>
                    )}>
                        Keep yourself updated with the latest blogs and news related to Los Angeles Truck Insurance and truck industry
                    </Note>
                    <div className={classes.latesArticles}>
                        <div className={classNames(classes.postGroups, {
                            [classes.postGroupsReverse]: dataLatestBlogs?.data?.length < dataLatestNews?.data?.length
                        })}>
                            <div className={classes.postGroup}>
                                <Link href='/blogs' className={classes.postGroupTitle}><span>Latest</span> Blogs</Link>
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
                                <Link href='/news' className={classes.postGroupTitle}><span>Latest</span> News</Link>
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