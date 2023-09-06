import { Container } from '@/componentns/Container';
import { contactInfo, footerLinks } from '@/constants/TEST_footer';
import { ArrowIcon } from '@/public/assets/svgs/ArrowIcon';
import { NoteLineIcon } from '@/public/assets/svgs/NoteLineIcon';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './index.module.css';

const Footer: React.FC = () => {

    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.footerContent}>
                    { footerLinks.map((filed, index) => (
                        <div key={index} className={classes.linksGroup}>
                            <h5 className={classes.title}>
                                {filed.title && <NoteLineIcon />}
                                {filed.title}
                            </h5>
                            { filed.links.map(({ label, url }, i) => (
                                <Link
                                    href={url}
                                    key={i}
                                    children={label}
                                    className={classes.link}
                                />
                            ))}
                        </div>
                    ))}
                    <div className={classNames(classes.linksGroup, classes.contactGroup)}>
                        <h5 className={classes.title}>
                            <NoteLineIcon />
                            {contactInfo.title}
                        </h5>
                        <Image
                            alt='logo'
                            src='/assets/images/logo.png'
                            width={160}
                            height={60}
                            className={classes.logo}
                        />
                        <p className={classes.contact}>
                            <i>{ contactInfo.address.label }:</i>
                            <span>{contactInfo.address.url}</span>
                        </p>
                        <p className={classes.contact}>
                            <i>{ contactInfo.phone.label }:</i>
                            <span>{contactInfo.phone.url}</span>
                        </p>
                        <p className={classes.contact}>
                            <i>{ contactInfo.email.label }:</i> 
                            <span>{contactInfo.email.url}</span>
                        </p>
                    </div>
                </div>
                <div className={classes.termsNode}>
                    <span> © 2023 - Los Angeles Truck Insurance. All Rights Reserved. </span>
                    <div>
                        <Link href='/terms-and-conditions'>Terms And Conditions</Link>
                        <span>|</span>
                        <Link href='/privacy-policy'>Privacy Policy</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export { Footer };