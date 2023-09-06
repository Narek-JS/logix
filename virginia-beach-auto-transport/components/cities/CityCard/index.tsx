import Image from 'next/image';
import classes from './index.module.css';
import Link from 'next/link';
import { ArrowCityIcon } from '@/public/assets/svgs/ArrowCityIcon';

interface IProps {
    imagePath: string;
    cityName: string;
    description: string;
};

const CityCard: React.FC<IProps> = ({ cityName, imagePath, description }) => {

    return (
        <div className={classes.cityCard}>
            <Image
                src={imagePath}
                alt="Calculated Step image"
                className={classes.image}
                width={60}
                height={60}
            />

            <div className={classes.content}>
                <p className={classes.cityName}>{cityName}</p>
                <p dangerouslySetInnerHTML={{ __html: description }} className={classes.description}/>
                <Link href='/' className={classes.link}>Read More <ArrowCityIcon /></Link>
            </div>
        </div>
    );
};

export { CityCard };