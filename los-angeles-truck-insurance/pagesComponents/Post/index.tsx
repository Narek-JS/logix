import { Fragment } from 'react';
import { CalendarIcon } from '@/public/assets/svgs/CalendarIcon';
import { FbSmollGreenIcon } from '@/public/assets/svgs/FbSmollGreenIcon';
import { TwitterIconSmollGreenIcon } from '@/public/assets/svgs/TwitterIconSmollGreenIcon';
import { LinkdinIconSmallGreen } from '@/public/assets/svgs/LinkdinIconSmallGreen';
import { GmailSmallIconGreen } from '@/public/assets/svgs/GmailSmallIconGreen';
import { formatDate } from '@/helper/time';
import { Responses } from './Responses';
import { RelatedPosts } from './RelatedPosts';
import { Comment } from './Comment';
import { LatestPost } from './LatestPosts';
import { LINKS_FROM_MENU_TITLES } from '@/constants/menuLinks';
import { useAppSelector } from '@/store/hooks';
import { selectMenus } from '@/store/manu';
import { useGetLatestNewsQuery } from '@/store/latestNews';
import { useGetLatestBlogsQuery } from '@/store/latestBlogs';
import { Container } from '@/componentns/Container';
import { PostCard } from '../PostCard';
import {
    FacebookShareButton,
    TwitterShareButton,
    PinterestShareButton,
    LinkedinShareButton
} from 'next-share'
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import classes from './index.module.css';

interface Iprops {
    data: Record<string, any>;
    category: "news" | "blogs"
};

const Post: React.FC<Iprops> = ({ data, category }) => {
    const { data: dataLatestBlogs } = useGetLatestNewsQuery(category === 'blogs' ? 3 : 2);
    const { data: dataLatestNews } = useGetLatestBlogsQuery(category === 'news' ? 3 : 2);
    const { data: menu } = useAppSelector(selectMenus);

    if(!data) return null;

    return (
        <Fragment>
            <Head>
                <title key={1}>
                    {menu?.contactInfo?.[LINKS_FROM_MENU_TITLES[category]].title}
                    | San Francisco { category === "blogs" ? "Blog" : "News"}
                </title>,
                <meta key={2}
                    property="og:title"
                    data-hid="og:title"
                    data-n-head="ssr"
                    content={`San Francisco Website ${menu?.contactInfo?.[LINKS_FROM_MENU_TITLES[category]].title}`}
                />
            </Head>
            <section>
                <Container>
                    <div className={classes.postSection}>
                        <div className={classes.postContent}>
                            <div className={classes.wrapperImage}>
                                <Image
                                    src={data.post.image}
                                    alt={`hero ${ category === "blogs" ? "Blog" : "News"} image`}
                                    className={classes.postImage}
                                    width={780}
                                    height={520}
                                />
                                <div className={classes.wrapperSocial}>
                                    <div className={classes.calendarSlice}>
                                        <CalendarIcon color='#FFC822'/>
                                        <span className={classes.defaultText}>
                                            {formatDate(data.post.created_at)}
                                        </span>
                                        <div className={classes.verticalRow}/>
                                        <span className={classes.calendarSlicePostText}>
                                            <Link href={menu?.contactInfo?.[LINKS_FROM_MENU_TITLES[category]].url || ''}>
                                                {menu?.contactInfo?.[LINKS_FROM_MENU_TITLES[category]].title}
                                            </Link>
                                        </span>
                                    </div>
                                    <div className={classes.socialSlice}>
                                        <span className={classes.shareText}>Share</span>
                                        <FacebookShareButton
                                            url='https://www.facebook.com/ColumbusCarTransport'
                                        >
                                            <FbSmollGreenIcon />
                                        </FacebookShareButton>
                                        <TwitterShareButton
                                            url='https://twitter.com/ColumbusCarTRSP'
                                        >
                                            <TwitterIconSmollGreenIcon /> 
                                        </TwitterShareButton>
                                        <LinkedinShareButton
                                            url='https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.columbusautotransport.com%2Fstate-budget-considered-on-better-school-safety%2F'
                                        >
                                            <LinkdinIconSmallGreen />
                                        </LinkedinShareButton>
                                        <PinterestShareButton
                                            url='https://www.pinterest.com/columbuscartransport'
                                            media='next-share is a social share buttons for your next React apps.'
                                        >
                                            <GmailSmallIconGreen />
                                        </PinterestShareButton>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.postBody}>
                                <p dangerouslySetInnerHTML={{ __html: data.post.body }}/>
                            </div>
                        </div>
                        { (category === "blogs" ? dataLatestNews : dataLatestBlogs)?.data &&
                            <LatestPost
                                latestPosts={((category === "blogs" ? dataLatestNews : dataLatestBlogs)).data}
                                category={category}
                            />
                        }
                    </div>
                </Container>
            </section>
            {Boolean(data.post.comment && data.post.comment.length) && (
                <section>
                    <Container>
                        <Responses comment={data.post.comment} />
                    </Container>
                </section>
            )}
            <section>
                <Container>
                    <div className={classes.wrapperMightAlso}>
                        <div className={classes.contentBlocksWrapper}>
                            <h3 className={classes.contentBlocksTitle}>
                                You <span>Might</span> Also <span>Like</span>
                            </h3>
                            <div className={classes.contentBlocks}>
                                { (category === "blogs" ? dataLatestBlogs : dataLatestNews)?.data?.map((news, index) => ( 
                                    <PostCard
                                        category={category}
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
                        <div className={classes.relatedPosts}>
                            { Boolean(data.relatedPosts.length) && (
                                <RelatedPosts relatedPosts={data.relatedPosts}/>
                            )}
                            <Comment />
                        </div>
                    </div>
                </Container>
            </section>
        </Fragment>
    );
};

export { Post };