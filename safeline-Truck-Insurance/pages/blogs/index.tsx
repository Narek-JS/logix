import { NextPage } from 'next';
import { Fragment, useEffect, useState } from 'react';
import { metaTags } from '@/constants/metaTags';
import { useGetBlogsQuery } from '@/store/blogs';
import { useHydration } from '@/hooks/useHydration';
import { useRouter } from 'next/router';
import { usePagination } from '@/hooks/usepagination';
import { Container } from '@/componentns/Container';
import { Conditional } from '@/componentns/Conditional';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import { CalendarIcon } from '@/public/assets/svgs/CalendarIcon';
import { useGetLatestNewsQuery } from '@/store/latestNews';
import { PostCard } from '@/pagesComponents/PostCard';
import { Redirect } from '@/componentns/Redirect';
import { Loading } from '@/componentns/Loading';
import { formatDate } from '@/helper/time';
import { SectionTitle } from '@/componentns/SectionTitle';
import { WhiteSmallArrowIcon } from '@/public/assets/svgs/WhiteSmallArrowIcon';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './index.module.css';

const Blogs: NextPage = () => {
    const hydration = useHydration();
    const { query: { page }, push } = useRouter();
    const [ blogs, setBlogs ] = useState<undefined | Record<string, any>>();
    const {
        currentPage,
        goToPage,
        nextPage,
        prevPage,
        getVisiblePages
    } = usePagination(
        blogs?.data?.pageCount || 1,
        hydration && Number(page) || 1
    );

    const { isLoading, data, error } = useGetBlogsQuery(String(currentPage), {
        skip: !hydration,
    });

    const { data: dataLatestNews } = useGetLatestNewsQuery(4);

    useEffect(() => goToPage(page ? Number(page) : 1), [page]);

    useEffect(() => {
        if(data !== undefined && isLoading === false && hydration) {
            setBlogs(data);
            push(`blogs/?page=${currentPage}`, undefined, { shallow: true });
        };
    }, [data]);

    const bannerPost = Array.isArray(data?.data?.posts) && data?.data?.posts.length ? data?.data?.posts[0] : null;

    if(error) return <Redirect to='404' />;

    if(isLoading) return <Loading type='fullPage'/>;

    return (
        <Fragment>
            <Head>{metaTags.blogs}</Head>
            <section className={classes.posts}>
                <Container>
                    <SectionTitle size={64}>
                        <span>Dive into</span> Engaging <span>Blog Posts</span>
                    </SectionTitle>
                    <Conditional condition={bannerPost}>
                        <div className={classes.banner}>
                            <Image
                                alt='banner Bloge Image'
                                src={bannerPost?.image}
                                width={973}
                                height={600}
                                className={classes.bannerImage}
                            />
                            <div className={classes.bannerContent}>
                                <div className={classes.contentNode}>
                                    <div className={classes.dateNode}>
                                        <Link href='/blogs'>Latest Blogs</Link>
                                        <p>
                                            <CalendarIcon />
                                            {formatDate(bannerPost?.created_at)}
                                        </p>
                                    </div>
                                    <h3 className={classes.bannerTitle}>{bannerPost?.title}</h3>
                                    <p
                                        className={classes.bannerDescription}
                                        dangerouslySetInnerHTML={{ __html: bannerPost?.body }}
                                    />
                                </div>
                                <Link className={classes.bannerLink} href={bannerPost?.slug || '/'}>
                                    <i className={classes.wrapperIcon}><WhiteSmallArrowIcon /></i>
                                    <span> Continue Reading </span>
                                </Link>
                            </div>
                        </div>
                    </Conditional>
                    <div className={classes.postsSlice}>
                        <Conditional condition={bannerPost && Array.isArray(data?.data?.posts)}>
                            { data?.data?.posts
                              .slice(1, data?.data?.posts.length - (Math.floor(data?.data?.posts.length / 2)))
                              .map(blog => <PostCard
                                key={blog.id}
                                category='blogs'
                                date={blog?.created_at}
                                description={blog?.body}
                                imagePath={blog?.image}
                                link={blog?.slug}
                                title={blog?.title}
                            />)}
                        </Conditional>
                    </div>
                </Container>
                <div className={classes.oppositeCategoryPosts}>
                    <Container>
                        <h2 className={classes.oppositeCategoryTitle}>
                            Explore Our News Section
                            <Link href='/news'>
                                <ArrowIcon color='#29AAE2'/>
                                More news
                            </Link>
                        </h2>
                        <div className={classes.oppositePosts}>
                            <Conditional condition={Array.isArray(dataLatestNews?.data) && dataLatestNews?.data.length}>
                                { dataLatestNews?.data.map(oppositePost => <PostCard
                                    category='news'
                                    key={oppositePost?.id}
                                    date={oppositePost?.created_at}
                                    description={oppositePost?.body}
                                    imagePath={oppositePost?.image}
                                    link={oppositePost?.slug}
                                    title={oppositePost?.title}
                                />)}
                            </Conditional>
                        </div>
                    </Container>
                </div>
                <Container>
                    <div className={classes.postsSlice}>
                        <Conditional condition={bannerPost && Array.isArray(data?.data?.posts)}>
                            { data?.data?.posts
                              .slice(data?.data?.posts.length - (Math.floor(data?.data?.posts.length / 2)), data?.data?.posts.length)
                              .map(blog => <PostCard
                                key={blog?.id}
                                category='blogs'
                                date={blog?.created_at}
                                description={blog?.body}
                                imagePath={blog?.image}
                                link={blog?.slug}
                                title={blog?.title}
                            />)}
                        </Conditional>
                    </div>

                    <div className={classes.paginationBtns}>
                        <Conditional condition={currentPage !== 1}>
                            <button className={classes.btn} onClick={prevPage}>
                                Previous
                            </button>
                        </Conditional>
                        { getVisiblePages().map((pageNumber) => (
                            <button
                                key={pageNumber}
                                className={classNames(classes.btn, {
                                    [classes.btnActive]: currentPage === pageNumber
                                })}
                                onClick={() => goToPage(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        ))}
                        <Conditional condition={currentPage !== blogs?.data?.pageCount}>
                            <button className={classes.btn} onClick={nextPage}>
                                Next
                            </button>
                        </Conditional>
                    </div>

                </Container>
            </section>
        </Fragment>
    );
};

export default Blogs;