import { Container } from '@/componentns/Container';
import { Video } from '@/componentns/Video';
import { StarIcon } from '@/public/assets/svgs/StarIcon';
import { LikeIcon } from '@/public/assets/svgs/LikeIcon';
import classNames from 'classnames';
import classes from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';

interface IFeetbackNode {
    canalIcon: string,
    link: string
};

interface IProps {
    sectionBg?: string;
};

const FeedbackNode: React.FC<IFeetbackNode> = ({ canalIcon, link }) => {

    const starCount = new Array(5).fill((function(_, i){return{key:i}})());

    return (
        <div className={classes.feedbackNode}>
            <div className={classes.noteBlock}>
                <Image
                    alt='Social Icon'
                    src={canalIcon}
                    width={168}
                    height={55}
                    className={classes.feedbackImg}
                />
                <div className={classes.groupStar}>
                    { starCount.map(StarIcon)}
                </div>
            </div>
            <Link href={link} className={classes.link}>
                <span>Give us your feedback</span>
                <i><LikeIcon /></i>
            </Link>
        </div>
    );
};

const YoutubChanel: React.FC<IProps> = ({ sectionBg }) => {
    const feedbacks = [
        {
            canalIcon: '/assets/images/YouTubeIcon.png',
            link: '',
            key: 1
        },
        {
            canalIcon: '/assets/images/GoogleIcon.png',
            link: '',
            key: 2
        },
        {
            canalIcon: '/assets/images/YahooIcon.png',
            link: '',
            key: 3
        },
    ];

    return (
        <section
            className={classes.youtubChanel}
            style={{
                ...(sectionBg && { background: sectionBg })
            }}
        >
            <Container>
                <div className={classes.parentBlock}>
                    <div className={classes.videoNode}>
                        <h2 className={classes.title}>
                            Truck Insurance Quote - <span>Bad Driving Record?</span> NO PROBLEM!!!
                        </h2>
                        <Video id='ZZp4697-OSk'/>
                    </div>
                    <div className={classes.feedbackNode}>
                        <h2 className={classNames(classes.title, classes.contentTitle)}>
                            Customer Reviews
                        </h2>
                        <div className={classes.feedbacks}>
                            { feedbacks.map(FeedbackNode)}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { YoutubChanel };