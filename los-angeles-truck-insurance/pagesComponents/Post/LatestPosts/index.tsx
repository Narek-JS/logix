import { PostCard } from '@/pagesComponents/PostCard';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import classes from './index.module.css';
import Link from 'next/link';

interface IProps {
    latestPosts: Array<Record<string, any>>;
    category: "blogs" | "news";
};

const LatestPost: React.FC<IProps> = ({ latestPosts, category }) => {
    return (
        <div className={classes.latestNews}>
            <Link href={`/${category === 'blogs' ? 'news' : 'blogs'}`} className={classes.newsTitle}>
                <ArrowIcon color='#FFC822'/>
                Latest { category === 'blogs' ? "News" : "Blogs"} 
            </Link>
            <div className={classes.wrapperNewCards}>
                { latestPosts.map((news, index) => (
                    <PostCard
                        category={category === 'blogs' ? "news" : "blogs"}
                        date={news?.created_at || ''}
                        title={news?.slug || ''}
                        description={news?.body || ''}
                        imagePath={news?.image || ''}
                        link={news?.slug || ''}
                        key={index}
                        type='shadow'
                    />
                ))}
            </div>
        </div>
    );
};

export { LatestPost };