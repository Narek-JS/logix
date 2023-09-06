import { Container } from '@/componentns/Container';
import { footerLinks } from '@/constants/TEST_footer';
import { NoteLineIcon } from '@/public/assets/svgs/NoteLineIcon';
import { useAppSelector } from '@/store/hooks';
import { selectMenus } from '@/store/manu';
import { socialIcons } from '@/constants/socialIcons';
import { contactInfo } from '@/constants/TEST_contactInfo';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './index.module.css';

const Footer: React.FC = () => {
    const { data } = useAppSelector(selectMenus);

    return (
        <footer className={classes.footer}>
            <Container>
                <div className={classes.footerContent}>
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

                        <div className={classes.socialLinks}>
                            { data?.social.map((social, index) => {
                                const IconComponent = socialIcons[social.title];
                                return IconComponent && <IconComponent key={index} />
                            })}
                        </div>

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
                </div>
                <div className={classes.termsNode}>
                    <span> © 2023 - Safeline Truck Insurance. All Rights Reserved. </span>
                    <div>
                        <Link href='/contact-us'>Contact us</Link>
                        <span>|</span>
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