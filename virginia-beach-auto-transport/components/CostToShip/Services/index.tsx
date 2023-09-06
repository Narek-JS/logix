import { Container } from '@/components/ui/container';
import { CarService } from '@/components/CarService';
import classes from './index.module.css';
import classNames from 'classnames';
import Link from 'next/link';

const Services = () => {
    const carServices = [
        {
            title: 'Dealer Auto Transport',
            description: 'We all know how difficult it is to find the right car for you, which will meet all of your needs and suit your taste.',
            imagePath: '/assets/images/carMovingsImg1.png',
            link: {
                text: 'Read More',
                url: '/'
            }
        },
        {
            title: 'Dealer Auto Transport',
            description: 'We all know how difficult it is to find the right car for you, which will meet all of your needs and suit your taste.',
            imagePath: '/assets/images/carMovingsImg2.png',
            link: {
                text: 'Read More',
                url: '/'
            }
        },
        {
            title: 'Dealer Auto Transport',
            description: 'We all know how difficult it is to find the right car for you, which will meet all of your needs and suit your taste.',
            imagePath: '/assets/images/carMovingsImg3.png',
            link: {
                text: 'Read More',
                url: '/'
            }
        },
        {
            title: 'Dealer Auto Transport',
            description: 'We all know how difficult it is to find the right car for you, which will meet all of your needs and suit your taste.',
            imagePath: '/assets/images/carMovingsImg4.png',
            link: {
                text: 'Read More',
                url: '/'
            }
        },
    ];
    return (
        <section className={classes.carMovingServicesSection}>
            <Container>
                <div className={classes.content}>
                    <div className={classes.lineNode}>
                        <div className={classes.contentNode}>
                            <p className={classes.subTitle}>
                                <span className={classes.row}/>
                                New York City Car Transport will ship your vehicle at an affordable price!
                            </p>
                            <div className={classes.description}>
                                <p className={classes.text}>New York City Car Transport offers you all kinds of auto shipping services at an affordable price. We provide you with Door-to-door as well as open and enclosed car shipping services. Our company ships vehicles across 50 states of the United States, including Hawaii and Alaska.</p>
                                <p className={classes.text}>But, if your car transport is urgent, you can choose our expedited option. We also provide services for classic, exotic and vintage cars. Whether a student or a snowbird, we offer the auto transport service for your situation.</p>
                            </div>
                        </div>
                        <div className={classes.imagesNode}>
                            { carServices.slice(0, 2).map((service, index) => (
                                <CarService key={index} {...service}/>
                            ))}
                        </div>
                    </div>
                    <div className={classNames(classes.lineNode, classes.lineNodeRevers)}>
                        <div className={classes.contentNode}>
                            <p className={classes.subTitle}>
                                <span className={classes.row}/>
                                New York City Car Transport
                            </p>
                            <div className={classes.description}>
                                <p className={classes.text}>Our company can help you with military equipment transport and corporate relocation or deliver a car from an auction or dealership. Besides, all the kinds of private vehicles, we can help you with corporate relocation.</p>
                                <p className={classes.text}>Moreover, we deliver a car from an auction or a dealership. We have transport services for snowbirds and can help them escape the winter with our special offers. You can get a free quote online, which will be valid within 7 days of your receipt. You can also call our live agents to get a quote</p>
                            </div>
                            <Link href='contact-us' className={classes.link}>Contact Us</Link>
                        </div>
                        <div className={classes.imagesNode}>
                            { carServices.slice(2, carServices.length).map((service, index) => (
                                <CarService key={index} {...service}/>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export { Services };