import { WhiteSmallArrowIcon } from '@/public/assets/svgs/WhiteSmallArrowIcon';
import Link from 'next/link';
import Image from 'next/image';
import classes from './index.module.css';

interface IProps {
    imagePath: string;
    title: string;
    description: string;
    link: string;
};

const InsuranceCardService: React.FC<IProps> = ({
    imagePath,
    title,
    description,
    link
}) => (
    <Link href={link} className={classes.insuranceCard}>
        <Image
            alt='Insurance type of Image'
            src={imagePath}
            width={100}
            height={100}
            className={classes.image}
        />
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.description}>{description}</p>
        <button className={classes.btn}>
            <i className={classes.wrapperIcon}><WhiteSmallArrowIcon /></i>
            <span>Read More</span>
        </button>
    </Link>
);

export { InsuranceCardService };