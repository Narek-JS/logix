import { WhiteSmallArrowIcon } from '@/public/assets/svgs/WhiteSmallArrowIcon';
import { CalendarIcon } from '@/public/assets/svgs/CalendarIcon';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import { Conditional } from '@/componentns/Conditional';
import { formatDate } from '@/helper/time';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './index.module.css';

type CategoryType = 'blogs' | 'news';

interface IProps {
    type?: 'shadow';
    width?: string;
    maxWidth?: string;
    category: CategoryType;
    imagePath: string;
    date: string;
    title: string;
    description: string;
    link: string;
};

const PostCard: React.FC<IProps> = (props) => {
    return (
        <div
            className={classNames('postCard', classes.postCard, {
                [classes.shadowCard]: props.type
            })}
            style={{
                ...(props.width && { width: props.width }),
                ...(props.maxWidth && { maxWidth: props.maxWidth })
            }}
        >   
            <div
                className={classes.wrapperImage}
                style={{
                    ...(props.maxWidth && { maxWidth: props.maxWidth })
                }}
            >
                <Image
                    alt='post Image'
                    src={props.imagePath}
                    width={390}
                    height={240}
                    className={classes.image}
                    style={{
                        ...(props.maxWidth && { maxWidth: props.maxWidth })
                    }}
                />
            </div>
            <div className={classes.dateNode}>
                <p>{props.category}</p>
                <div className={classes.date}>
                    <CalendarIcon />
                    <span>{formatDate(props.date)}</span>
                </div>
            </div>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.description}>{props.description}</p>
            <Link href={props.link} className={classes.link}>
                <Conditional
                    condition={props.type}
                    fallback={() => (
                        <i className={classes.wrapperIcon}>
                            <WhiteSmallArrowIcon />
                        </i>
                    )}
                >
                    <ArrowIcon color='#FFC822'/>
                </Conditional>
                <span>Continue Reading</span>
            </Link>
        </div>
    );
};

export { PostCard };