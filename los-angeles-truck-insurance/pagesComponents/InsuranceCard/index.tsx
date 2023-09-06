import { SmallRightYelloArrow } from '@/public/assets/svgs/SmallRightYelloArrow';
import Link from 'next/link';
import Image from 'next/image';
import classes from './index.module.css';

interface IProps {
    imagePath: string;
    title: string;
    description: string;
    link: string;
};

const InsuranceCard: React.FC<IProps> = ({
    imagePath,
    title,
    description,
    link
}) => (
    <div className={classes.insuranceCard}>
        <div className={classes.imageWrapper}>
            <Image
                alt='Insurance type of Image'
                src={imagePath}
                width={100}
                height={100}
                className={classes.image}
            />
            <div className={classes.row} />
        </div>
        <div className={classes.content}>
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.description}>{description}</p>
            <Link href={link} className={classes.link}>
                <SmallRightYelloArrow />
                <span>Read More</span>
            </Link>
        </div>
    </div>
);

export { InsuranceCard };