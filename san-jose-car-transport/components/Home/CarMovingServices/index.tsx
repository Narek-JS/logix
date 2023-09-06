import { CarService } from '@/components/CarService';
import { Container } from '@/components/ui/container';
import classes from './index.module.css';

const CarMovingServices = () => {
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
        <section className={classes.carMovingsSection}>
            <Container>
                <h2 className={classes.subTitle}>Welcome To San Jose Car Transport and Auto Shipping Service Nationwide</h2>
                <p className={classes.description}>Looking to get your vehicle shipped? With San Jose Car Transport, you can ship your vehicle anywhere you want. We transport all types of vehicles to and from San Jose, California. Our auto transport company is one of a kind for the different types of services we offer along with our budget-friendly prices. We make sure to meet all your needs when it comes to getting your vehicle transported. We also ship to Alaska and Hawaii! With over 10 years of experience in the auto transportation field, we’ve managed to learn the best and safest routes to deliver vehicles as fast as possible. Here’s why you should give our company a try.</p>
                <div className={classes.services}>
                    { carServices.map((service, index) => (
                        <CarService key={index} {...service}/>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export { CarMovingServices };