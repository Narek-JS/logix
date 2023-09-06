import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { CalculatedFee } from '@/components/CalculatedFee';
import { HelpSection } from '@/components/HelpSection';
import { Container } from '@/components/ui/container';
import Head from 'next/head';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './index.module.css';
import Link from 'next/link';

export default function Quote() {
  return (
    <Fragment>
        <Head>{metaTags.quote}</Head>
        <section className={classes.qouteContentSection}>
            <Container>
                <div className={classes.listNode}>
                    <div className={classes.textNode}>
                        <h2>Quote</h2>
                        <div className={classes.block}>
                            <p>When you are looking to ship a car, getting quotes from different car carriers is one of the steps along the way. You need to compare the prices before you make a choice what car transport company you are going to ship with. As in any industry, in auto shipping, you get what you pay for. Don’t go for the lowest quote. A low price is just a way for unreliable auto haulers to get clients.</p>
                            <p>The highest prices are not a wise choice as well. Of course, it will make your auto transport happen a lot faster, but it will also leave you with a hole in your budget. It’s best to choose among average prices. And of course, company’s reputation and the quality of their services is what matters most of all.</p>
                        </div>
                    </div>
                    <div className={classes.imageNode}>
                        <Image
                            src={'/assets/images/quoteImg1.png'}
                            alt="quote image"
                            className={classes.image}
                            width={560}
                            height={500}
                        />
                    </div>
                </div>
                <div className={classNames(classes.listNode, classes.reversListNode)}>
                    <div className={classes.textNode}>
                        <h2>Get a Quote from San Jose Car Transport</h2>
                        <div className={classes.block}>
                            <p>It is simple to get a quote for our San Jose Auto Shipping! You just need to fill out the request form here on our website and we will contact you back shortly. In this request form, you will need to give us some information so we can estimate an accurate price for your San Jose Auto Transport. This information includes the make and model of your vehicle and its condition, as well as the locations (zip-codes) for pick-up and delivery. These are the major factors that influence the price.</p>
                            <p>It is also important what method of San Jose <Link href='/'>Car Shipping</Link> you will choose: Open or Enclosed. And of course, we will need your contact information to reach you back. You can also call our office during business hours. Our agents will be glad to assist you with a quote and answer all the questions you have about our San Jose <Link href='/'>Auto Transport</Link> services.</p>
                            <Link href='/'>San Jose Car Transport will be happy to transport for you!</Link>
                        </div>
                    </div>
                    <div className={classes.imageNode}>
                        <Image
                            src={'/assets/images/quoteImg2.png'}
                            alt="quote image"
                            className={classes.image}
                            width={560}
                            height={500}
                        />
                    </div>
                </div>
            </Container>  
        </section>
        <CalculatedFee />
        <HelpSection />
    </Fragment>
  );
};
