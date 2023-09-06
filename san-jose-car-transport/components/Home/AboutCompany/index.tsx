
import { Container } from '@/components/ui/container';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import { ArrowRightRed } from '@/public/assets/svgs/ArrowRightRed';
import Image from 'next/image';
import Link from 'next/link';
import classes from './index.module.css';

const AboutCompany: React.FC = () => {

    const services = [
        {
            serviceTitle: 'Full Coverage Insurance:',
            serviceDescription: 'We always make sure that safety comes first. We secure every vehicle e always make sure that safety coe always make sure that safety comes first. We secure every vehicle we ship and offer more peace of minmes first. We secure every vehicle we ship and offer more peace of minwe ship and offer more peace of mind to our customers by offering full coverage insurance.',
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
                <div className={classes.relative}>
                    <div className={classes.firstNode}>
                        <div className={classes.firstNodeRight}>
                            <div className={classes.imageBg} />
                            <div className={classes.imageBorder} />
                            <Image
                                src={"/assets/images/aboutCompanyHome.png"}
                                alt="Vehicle Car Image"
                                className={classes.image}
                                width={604}
                                height={411}
                            />
                        </div>
                        <div className={classes.fistNodeLeft}>
                            <h2 className={classes.title}>San Jose Car Transport Never Disappoints!</h2>
                            <div className={classes.text}>
                                <p>Wichita Car <Link href={'/asdsad'}>asdsd</Link> Transport started as a small family company back in 2006. We have kept growing and improving with the help of our talented crew and our loyal customers. At first, we only delivered inside the state, but now, we can reach any point in the US. Even including Alaska and Hawaii. We have been in the business for so long that we know all the best carriers and fastest routes.</p>
                                <p>Besides, our reputation precedes us. And both individual customers and big companies keep coming to us because they know we are the auto shipping company they can trust. We are always learning and enhancing our wide variety of services for our clients.</p>
                                <button className={classes.redMoreBtn}><ArrowIcon /> Read More</button>
                            </div>
                        </div>
                    </div>
                    <h3 className={classes.subtitle}>Best in class service</h3>
                    <h2 className={classes.title}>Featured Services</h2>
                    <div className={classes.seccondNode}>
                        { services.map((service, index) => (
                            <div className={classes.box} key={index}>
                                <div className={classes.boxFirstLine}>
                                    <Image
                                        src={service.serviceIcon}
                                        alt="icon"
                                        className={classes.icon}
                                        width={30}
                                        height={24}
                                    />
                                    <p>{service.serviceTitle}</p>
                                </div>

                                <p className={classes.description}>
                                    {service.serviceDescription}
                                </p>

                                <Link href='/' className={classes.link}>
                                    <ArrowRightRed /> Continue Reading
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
           </Container>
        </section>
    );
};

export { AboutCompany };