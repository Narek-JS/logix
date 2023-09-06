import classNames from 'classnames';
import classes from './index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

const Cost = () => {
    const content = [
        {
            subTitle: 'Nationwide vehicle shipping services with New York City Car Transport!',
            descriptionTextes: [
                'New York City Car Transport offers nationwide shipping of many kinds of over-sized /overweight vehicles. We ship across all 50 states, including Hawaii and Alaska. Regardless of where your vehicle is, you can get it shipped at a reasonable time at a reasonable price.',
                'Our professionally trained drivers share the same commitment to safety. New York City Car Transport offers full coverage insurance with every order. When you ship with us, you’ll get the best service in the country.'
            ],
            link: {
                text: 'Get Quote',
                url: '/'
            },
            imagePath: '/assets/images/heavyHaulingService1.png'
        },
        {
            subTitle: 'Customer Service',
            title: 'Indianapolis Car Transport',
            descriptionTextes: [
                'New York City Car Transport provides excellent customer service. Our qualified employees will satisfy the requirements of every demanding customer.',
                'Get fast and efficient information on your shipping from our customer service. Our biggest goal is to make our customers happy and satisfied with our service.'
            ],
            link: {
                text: 'Contact Us',
                url: '/'
            },
            imagePath: '/assets/images/heavyHaulingService2.png'
        }
    ];
    return (
        <section className={classes.section}>
            <Container>
                <div className={classes.content}>
                    { content.map((item, index) => (
                        <div key={index} className={classNames(classes.block, {
                            [classes.reversBlock]: Number(index) % 2 !== 0
                        })}>
                            <div className={classes.contentNode}>
                                <p className={classes.subTitle}>
                                    <span className={classes.row}/>
                                    {item.subTitle}
                                </p>
                                { item.title && (
                                    <h2 className={classes.title}>
                                        {item.title}
                                    </h2>
                                )}
                                <div className={classNames(classes.description, {
                                    [classes.mb30]: Boolean(item.link)
                                })}>
                                    { item.descriptionTextes.map((text, textIndex) => (
                                        <p key={textIndex} className={classes.text}>{text}</p>
                                    ))}
                                </div>
                                { item?.link && (
                                    <Link href={item.link.url} className={classes.link}>{item.link.text}</Link>
                                )}
                            </div>
                            <div className={classes.imageNode}>
                                <Image
                                    src={item.imagePath} // data?.logo || "/assets/images/logo.png"
                                    alt={`Image About Company ${index}`}
                                    className={classes.image}
                                    width={390}
                                    height={284}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export { Cost };