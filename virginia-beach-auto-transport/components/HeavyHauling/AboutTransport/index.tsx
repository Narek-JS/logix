import Image from 'next/image';
import classes from './index.module.css';
import { Fragment } from 'react';
import classNames from 'classnames';

const AboutTransport = () => {
    const transports = [
        {
            textes: [
                'New York City Car Transport offers heavy hauling services. Heavy Haul is one of the specialized types of vehicle shipping that not every auto shipping company provides. First of all, it’s a huge responsibility that requires a higher level of quality.',
                'Only an experienced auto shipping company will be able to meet your demands. The heavy haul is complicated to deal with. When it comes to heavy haul, you have to choose the best company in the field to work with.'
            ],
            imagePath: '/assets/images/heavyHaulingCar1.png' 
        },
        {
            textes: [
                'New York City Car Transport offers high-quality Heavy Hauling. All you need to do is give us the load, tell us the location and wait for your load to arrive at the location safely and on time. Even though heavy vehicles are not easy to transport, it’s no problem for us.',
                'New York City Car Transport has all the necessary equipment for Heavy Hauling. Our professionals know how to handle any difficulties to provide a very efficient service. We are very attentive about any service we provide. Heavy Haul is not an exception.'
            ],
            imagePath: '/assets/images/heavyHaulingCar2.png' 
        }
    ];

    return (
        <Fragment>
            {transports.map((transport, index) => (
                <div className={classNames(classes.aboutTransportLine, {
                    [classes.revers]: Boolean(index % 2 !== 0)
                })} key={index}>
                    <div className={classes.textesNode}>
                        { transport?.textes?.map((text, textIndex) => (
                            <p key={textIndex} className={classes.text}>{text}</p>
                        ))}
                    </div>
                    <div className={classes.imagesNode}>
                        <Image
                            src={transport.imagePath}
                            alt="heavy Hauling Car"
                            className={classes.image}
                            width={595}
                            height={330}
                        />
                    </div>
                </div>
            ))}
        </Fragment>
    )
};

export { AboutTransport };
