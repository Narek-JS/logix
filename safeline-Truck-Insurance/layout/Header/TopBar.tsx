import { Container } from '@/componentns/Container';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectMenus } from '@/store/manu';
import { Conditional } from '@/componentns/Conditional';
import { EarringIcon } from '@/public/assets/svgs/EarringIcon';
import { MailIcon } from '@/public/assets/svgs/MailIcon';
import { PAGES } from '@/constants/pages';
import { CertificateCheckMarkIcon } from '@/public/assets/svgs/CertificateCheckMarkIcon';
import { FilledEarringIcon } from '@/public/assets/svgs/FilledEarringIcon';
import { FreeQuote } from '@/public/assets/svgs/FreeQuote';
import { selcetQouteFormMobileStatus, toogleFormMobile } from '@/store/quoteForm';
import { QuoteIcon } from '@/public/assets/svgs/QuoteIcon';
import Link from 'next/link';
import classes from './index.module.css';

const TopBar: React.FC = () => {
    const { data } = useAppSelector(selectMenus);
    const dispatch = useAppDispatch();
    const isOpenQouteFormMobile = useAppSelector(selcetQouteFormMobileStatus); 
    const toogleQuoteForm = () => dispatch(toogleFormMobile());

    return (
        <div className={classes.topBar}>
            <Container>
                <div className={classes.topBarContent}>
                    <Link href={data?.topHeaderLeftItem?.url || ''}>
                        <Conditional
                            condition={data?.topHeaderLeftItem?.title === 'phone'}
                            fallback={() => <MailIcon />}
                        >
                            <EarringIcon />
                        </Conditional>
                        {data?.topHeaderLeftItem?.url}
                    </Link>

                    <nav>
                        { data?.topHeaderCenterItems.map(link => (
                            <Link
                                href={link?.url || ''}
                                key={link.id}
                                children={link.title}
                            />
                        ))}
                        <Link
                            href={PAGES.quoteRequest.url}
                            className={classes.certificateLink}
                        >
                            <QuoteIcon />
                            Quote Request
                        </Link>
                        <Link
                            href={PAGES.certificate.url}
                            className={classes.certificateLink}
                        >
                            <CertificateCheckMarkIcon />
                            Certificate Request
                        </Link>
                    </nav>

                    <Link href={data?.topHeaderRightItem?.url || ''}>
                        <Conditional
                            condition={data?.topHeaderRightItem?.title === 'Mail'}
                            fallback={() => <EarringIcon />}
                        >
                            <MailIcon />
                        </Conditional>
                        {data?.topHeaderRightItem?.url}
                    </Link>


                    {/* MOBILE */}
                    <Link
                        href={(
                            data?.topHeaderLeftItem?.title === 'phone' ?
                                data?.topHeaderLeftItem?.url :
                                data?.topHeaderRightItem?.url
                        ) || ''}
                        className={classes.phoneLink}
                    >
                        <FilledEarringIcon />
                        Call Now
                    </Link>

                    <div
                        className={classes.getQuote}
                        onClick={toogleQuoteForm}
                    >
                        <p>Get A Quote </p>
                        <FreeQuote rotate={isOpenQouteFormMobile ? 180 : 0}/>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export { TopBar };