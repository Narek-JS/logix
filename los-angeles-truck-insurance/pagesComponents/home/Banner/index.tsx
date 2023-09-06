import { Container } from "@/componentns/Container";
import { FormQuote } from "@/pagesComponents/formQuote";
import { ArrowIcon } from "@/public/assets/svgs/ArrowIcon";
import Link from "next/link";
import Image from 'next/image';
import classes from './index.module.css';

const Banner: React.FC = () => {
    return (
        <section className={classes.banner}>
            <Image 
                alt='home Banner Image'
                src='/assets/images/homeBanner.png'
                width={1920}
                height={720}
                className={classes.bannerImage}
            />
            <Container> 
                <div className={classes.bannerContent}>
                    <div className={classes.umbrellaWrapper}>
                        <div className={classes.description}>
                            <h1 className={classes.title}>
                                <span>Welcome to</span> Los Angeles Truck <span>Insurance</span>
                            </h1>
                            <h2 className={classes.subTitle}>
                                <span>Reliable Commercial </span>
                                <span>Truck Insurance </span>
                                <span>Agency </span>
                            </h2>
                            <p className={classes.text}>
                                Los Angeles Truck Insurance is the number one truck insurance company in the U.S. We work with truckers and truck owners on a daily basis to help them keep their trucks and cargo safe. No matter what you and your people need, Los Angeles Truck Insurance is the perfect place to find it. Contact us today to find out why we're the best in the business!
                            </p>
                            <Link href='/about-us' className={classes.link}>
                                <ArrowIcon color="#154BA1"/>
                                <span> READ MORE ABOUT COMPANY </span>
                            </Link>
                        </div>
                    </div>
                    <div className={classes.formWrapper}>
                        <FormQuote />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { Banner };