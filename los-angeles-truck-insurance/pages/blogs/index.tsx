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
import { formatDate } from '@/helper/time';
import { WhiteSmallArrowIcon } from '@/public/assets/svgs/WhiteSmallArrowIcon';
import { setLoading } from '@/store/loading';
import { useAppDispatch } from '@/store/hooks';
import { ImageWithSkeleton } from '@/componentns/ImageWithSkeleton';
import { scrollToTop } from '@/helper/window';
import Head from 'next/head';
import Link from 'next/link';
import classNames from 'classnames';
import classes from './index.module.css';

const Blogs: NextPage = () => {
    const hydration = useHydration();
    const dispatch = useAppDispatch();
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

    useEffect(() => {
        dispatch(setLoading(isLoading));
    }, [isLoading]);

    useEffect(() => goToPage(page ? Number(page) : 1), [page]);

    useEffect(() => {
        if(data !== undefined && isLoading === false && hydration) {
            setBlogs(data);
            push(`blogs/?page=${currentPage}`, undefined, { shallow: true })
                .then(scrollToTop);
        };
    }, [data]);

    const bannerPost = Array.isArray(data?.data?.posts) && data?.data?.posts.length ? data?.data?.posts[0] : null;

    if(error) return <Redirect to='404' />;

    return (
        <Fragment>
            <Head>{metaTags.blogs}</Head>
            <section className={classes.posts}>
                <Container>
                    <Conditional condition={bannerPost}>
                        <div className={classes.banner}>
                            <ImageWithSkeleton
                                alt='banner Bloge Image'
                                src={bannerPost?.image}
                                width={700}
                                height={368}
                                className={classes.bannerImage}
                            />
                            <div className={classes.bannerContent}>
                                <div className={classes.contentNode}>
                                    <div className={classes.dateNode}>
                                        <h3>Blogs</h3>
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
                                    <i className={classes.wrapperIcon}>
                                        <WhiteSmallArrowIcon />
                                    </i>
                                    <span>Continue Reading</span>
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
                <div className={classNames('oppositeCategoryPosts', classes.oppositeCategoryPosts)}>
                    <Container>
                        <h2 className={classes.oppositeCategoryTitle}>
                            <p>
                                Explore <span>Our</span> News <span>Section</span>
                            </p>
                            <Link href='/news'>
                                <ArrowIcon color='#FFC822'/>
                                More News
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
                        <button className={classes.btn} onClick={prevPage}>
                            Previous
                        </button>
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
                        <button className={classes.btn} onClick={nextPage}>
                            Next
                        </button>
                    </div>

                </Container>
            </section>
        </Fragment>
    );
};

export default Blogs;