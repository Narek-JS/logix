import { Fragment } from 'react';
import { Container } from '@/components/ui/container';
import { metaTags } from '@/constants/metaTags';
import { ThankYouTextIcon } from '@/public/assets/svgs/ThankYouTextIcon';
import { VideoPlayer } from '@/components/VideoPlayer';
import { useScrollToView } from '@/hooks/useScrollToView';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import classes from './index.module.css';

export default function ThankYou() {
    const sectionRef = useScrollToView();

    return (
        <Fragment>
        <Head>{metaTags.thankYou}</Head>
        <section className={classes.section} ref={sectionRef}>
            <Container>
                <h1 className={classes.title}>Thank You!</h1>
                <div className={classes.content}>
                    <div className={classes.text}>
                        <ThankYouTextIcon />
                        <p>Thank you for your shipping quote request. We will get back to you very shortly with the most competitive pricing and truck space availability. In the meantime, feel free to call us directly at <Link href='tel:(408)-478-9788'>(408)-478-9788</Link> and one of our live agents will be able to assist you with all your shipping needs!</p>
                    </div>
                </div>
                <div className={classes.images}>
                    <div className={classes.videoNode}>
                        <VideoPlayer videoId='https://www.youtube.com/watch?v=0no0xp_TUT0&list=PL_K-aNP7pp601ZIUY7EiUCaBXOzJCBRNe&index=2'/>
                    </div>
                    <Image
                        src='/assets/images/thankYouImage.png'
                        alt='calculeted Center Icon'
                        className={classes.image}
                        width={468}
                        height={396}
                    />
                </div>
            </Container>
        </section>
        </Fragment>
    );
};
