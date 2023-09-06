import { WhiteSmallArrowIcon } from '@/public/assets/svgs/WhiteSmallArrowIcon';
import Link from 'next/link';
import Image from 'next/image';
import classes from './index.module.css';

interface IProps {
    imagePath: string;
    umbrelaImgPath: string;
    title: string;
    link: string;
    linkTitle: string;
    linkDescription: string;
};

const InsuranceCard: React.FC<IProps> = ({
    imagePath,
    umbrelaImgPath,
    title,
    link,
    linkTitle,
    linkDescription
}) => (
    <div className={classes.insuranceCard}>
        <Image
            alt='Insurance type of Image'
            src={imagePath}
            width={390}
            height={315}
            className={classes.image}
        />
        <Image
            alt='umbrella image'
            src={umbrelaImgPath}
            width={222}
            height={222}
            className={classes.umbrelaImg}
        />
        <p className={classes.linkText}>
            <i className={classes.wrapperIcon}><WhiteSmallArrowIcon /></i>
            <span>{title}</span>
        </p>
        <div className={classes.hoverContent}>
            <h2>{linkTitle}</h2>
            <p>{linkDescription}</p>
            <Link href={link}>
            <i className={classes.wrapperIcon}><WhiteSmallArrowIcon /></i>
                Read More
            </Link>
        </div>
    </div>
);

export { InsuranceCard };