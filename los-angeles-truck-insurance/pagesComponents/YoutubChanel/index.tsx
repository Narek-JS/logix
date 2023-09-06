import { Container } from '@/componentns/Container';
import { Video } from '@/componentns/Video';
import { StarIcon } from '@/public/assets/svgs/StarIcon';
import { LikeIcon } from '@/public/assets/svgs/LikeIcon';
import { LikeGroup } from '@/public/assets/svgs/LikeGroup';

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
    mobile?: boolean;
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
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                        <path
                            d="M28.1795 16.6781C28.7045 15.9843 28.9951 15.1343 28.9951 14.25C28.9951 12.8468 28.2107 11.5187 26.9482 10.7781C26.6232 10.5875 26.2532 10.4871 25.8764 10.4875H18.3826L18.5701 6.64685C18.6139 5.71872 18.2857 4.83747 17.6482 4.1656C17.3354 3.83444 16.9579 3.57095 16.5392 3.39143C16.1205 3.2119 15.6694 3.12015 15.2139 3.12185C13.5889 3.12185 12.1514 4.2156 11.7201 5.78122L9.03574 15.5H9.02637V28.875H23.7857C24.0732 28.875 24.3545 28.8187 24.6139 28.7062C26.1014 28.0718 27.0607 26.6187 27.0607 25.0062C27.0607 24.6125 27.0045 24.225 26.892 23.85C27.417 23.1562 27.7076 22.3062 27.7076 21.4218C27.7076 21.0281 27.6514 20.6406 27.5389 20.2656C28.0639 19.5718 28.3545 18.7218 28.3545 17.8375C28.3482 17.4437 28.292 17.0531 28.1795 16.6781ZM3.99512 16.5V27.875C3.99512 28.4281 4.44199 28.875 4.99512 28.875H7.02637V15.5H4.99512C4.44199 15.5 3.99512 15.9468 3.99512 16.5Z"
                            fill="#154BA1"
                        />
                    </svg>
                </i>
                <span>Give us your feedback</span>
            </Link>
        </div>
    );
};

const YoutubChanel: React.FC<IProps> = ({ sectionBg, mobile }) => {
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
                    <div className={classNames(classes.videoNode, {
                        [classes.withMobile]: mobile
                    })}>
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