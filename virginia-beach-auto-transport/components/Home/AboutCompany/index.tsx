import { ArrowRightRed } from '@/public/assets/svgs/ArrowRightRed';
import { Container } from '@/components/ui/container';
import { SatisfiedClientsIcon } from '@/public/assets/svgs/SatisfiedClientsIcon';
import { CornerIcon } from '@/public/assets/svgs/CornerIcon';
import Link from 'next/link';
import Image from 'next/image';
import classes from './index.module.css';
import classNames from 'classnames';

const AboutCompany: React.FC = () => {

    const services = [
        {
            serviceTitle: 'Full Coverage Insurance:',
            serviceDescription: 'We always make sure that safety comes first. We secure every vehicle we ship and offer more peace of mind to our customers by offering full coverage insurance.',
            serviceIcon: '/assets/images/serviceSmallIcon1.png'
        },
        {
            serviceTitle: 'Shipping Methods:',
            serviceDescription: 'We offer: door-to-door, expedited, open and enclosed car transportation for any type of vehicle (vans, SUVs, motorcycles, exotic cars, boats), heavy hauling and military vehicles and equipment shipping.',
            serviceIcon: '/assets/images/serviceSmallIcon2.png'
        },
        {
            serviceTitle: 'Nationwide Shipping',
            serviceDescription: 'We ship your vehicle safely and efficiently to anywhere in the U.S. This includes Hawaii and Alaska.',
            serviceIcon: '/assets/images/serviceSmallIcon3.png'
        },
        {
            serviceTitle: 'Best car transport company',
            serviceDescription: 'We’ll work with you and your schedule to ensure that you get your vehicle wherever you want it, whenever you need it.',
            serviceIcon: '/assets/images/serviceSmallIcon4.png'
        },
        {
            serviceTitle: 'Cost To Ship A Car',
            serviceDescription: 'How much will it cost? We strive to give you the best rates possible. For more answers on questions about shipping costs, fill the Quote or call our agents.',
            serviceIcon: '/assets/images/serviceSmallIcon5.png'
        },
        {
            serviceTitle: 'Reasonable Rates',
            serviceDescription: 'We offer excellent, competitive pricing for all your long-distance hauling needs. In fact, we offer a stellar price beat guarantee. If you get a lower quote, we’ll do our best to match. Affordable is a Virginia Beach Auto Transport guarantee!',
            serviceIcon: '/assets/images/serviceSmallIcon6.png'
        }
    ];

    return (
        <section className={classes.aboutCompany}>
            <Container>
                <p className={classes.typeSection}>Auto Transportation</p>
                <div className={classes.content}>
                    <div className={classes.node}>
                        <h3 className={classes.title}>Top Quality Service That You Deserve!</h3>
                        <div className={classes.textNode}>
                            <p>Book your upcoming car shipment with the field’s leader in hassle-free auto transportation within the entire United States, including Hawaii and Alaska</p>
                            <p>For instance, we provide door-to-door, expedited, and both open and enclosed car transportation for any type of vehicle (vans, SUVs, motorcycles, exotic cars, boats, and many more). We are also one of the few active shipping companies that can provide heavy hauling. Furthermore, we take pride in assisting individuals and companies by shipping military vehicles and equipment</p>
                            <Link href={'/'}>
                                <ArrowRightRed />
                                Read More
                            </Link>
                        </div>
                        <div className={classes.imageWrapper}>
                            <Image
                                src='/assets/images/autoTransportImage.png'
                                alt="Calculated Step image"
                                className={classes.image}
                                width={60}
                                height={60}
                            />
                            <div className={classes.imageContent}>
                                <div className={classes.satisfiedClients}>
                                    <SatisfiedClientsIcon />
                                    <div className={classes.satisfiedClientsContent}>
                                        <p className={classes.bold}>5,000 +</p>
                                        <p>Satisfied Clients</p>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.underCoprner}>
                                <div className={classes.cornerIcon}>
                                    <CornerIcon />
                                </div>
                                <span>
                                    Golden years we’ve passed!
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.node}>
                        <div className={classes.textNode}>
                            { services.map((service, index) => (
                                <div className={classes.serviceNode} key={index}>
                                    <div className={classes.serviceTitle}>
                                        <Image
                                            src={service.serviceIcon}
                                            alt='icon About Company'
                                            className={classes.serviceIcon}
                                            width={40}
                                            height={32}
                                        />
                                        <p>{service.serviceTitle}</p>
                                    </div>
                                    <p className={classes.serviceDescription}>
                                        {service.serviceDescription}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className={classNames(classes.textNode, classes.bgWhite)}>
                            <div className={classes.contacts}>
                                <p>Give us a call at <Link href={'tel:3454736547'}>(757) 366-2142</Link> or get a free quote online on our website. Let our professional team ship your vehicle for you!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { AboutCompany };