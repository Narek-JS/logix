import { HelpSection } from "@/pagesComponents/HelpSection";
import { useDynamicSpace } from "@/hooks/useDynamicSpace";
import { Container } from "@/componentns/Container";
import { metaTags } from "@/constants/metaTags";
import { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import { Conditional } from "@/componentns/Conditional";
import { Note } from "@/componentns/Note";
import { ArrowIcon } from "@/public/assets/svgs/ArrowIcon";
import { SectionTitle } from "@/componentns/SectionTitle";
import useWindowSize from "@/hooks/useWindowSize";
import Head from "next/head";
import Link from "next/link";
import classes from './index.module.css';

const QuoteRequest: NextPage = () => {
    const { width } = useWindowSize();
    const [ isOpenOnMobile, setIsOpenOnMobile ] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const height = useDynamicSpace(1800, 280, 320, 1600);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleResize = () => {
            timeoutId.current !== null && clearTimeout(timeoutId.current);
            if(iframeRef.current) {
                iframeRef.current.src = 'https://www6.nowcerts.com/Pages/PdfForms/ReverseMapping.aspx?FormId=39759a66-94a2-4a9c-9137-a9f8d51fa4f3&isIframe=true&AgencyId=7afbe06d-baee-4933-8f50-ce1e2df0a6f0';
            };
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Head>{metaTags.quoteRequest}</Head>
            <section>
                <Container>
                    <div className={classes.form}>
                        <SectionTitle>
                            Quote <span>Request</span>
                        </SectionTitle>
                        <Conditional condition={isOpenOnMobile || Number(width) > 768}>
                            <iframe
                                ref={iframeRef}
                                src="https://www6.nowcerts.com/Pages/PdfForms/ReverseMapping.aspx?FormId=39759a66-94a2-4a9c-9137-a9f8d51fa4f3&isIframe=true&AgencyId=7afbe06d-baee-4933-8f50-ce1e2df0a6f0"
                                title="Safeline Truck Insurance"
                                height={height}
                                width='100%'
                                className={classes.iframe}
                            />
                        </Conditional>
                        <Conditional condition={Number(width) <= 768 && isOpenOnMobile === false}>
                            <Note classes={classes}>
                                <span className={classes.noteParagraph}>
                                    Hello If You Want to fill ‘
                                    <Link href='/'>Safeline Truck Insurance NEW QUOTE APPLICATION</Link> ‘,
                                    Please Open Desktop Version For This Site For Your Better Experience, Thank You!
                                </span>
                            </Note>
                            <button
                                className={classes.noteBtn}
                                onClick={() => setIsOpenOnMobile(true)}
                            >
                                <ArrowIcon />
                                Anyway Open Mobile Version
                            </button>
                        </Conditional>
                    </div>
                </Container>
                <HelpSection />
            </section>
        </>
    );
};

export default QuoteRequest;