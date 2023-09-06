import { HelpSection } from "@/pagesComponents/HelpSection";
import { useDynamicSpace } from "@/hooks/useDynamicSpace";
import { Container } from "@/componentns/Container";
import { metaTags } from "@/constants/metaTags";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import { Conditional } from "@/componentns/Conditional";
import { MobileSectionTitle } from "@/componentns/MobileSectionTitle";
import { Note } from "@/componentns/Note";
import useWindowSize from "@/hooks/useWindowSize";
import Head from "next/head";
import Link from "next/link";
import classes from './index.module.css';

const QuoteRequest: NextPage = () => {
    const { width } = useWindowSize();
    const [ isOpenOnMobile, setIsOpenOnMobile ] = useState(false);
    const router = useRouter();
    const height = useDynamicSpace(1800, 280, 320, 1600);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleResize = () => {
            timeoutId.current !== null && clearTimeout(timeoutId.current);
            timeoutId.current = setTimeout(router.reload, 1000);
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
                        <MobileSectionTitle title="Quote Request"/>
                        <Conditional condition={isOpenOnMobile || Number(width) > 768}>
                            <iframe
                                src="https://www6.nowcerts.com/Pages/PdfForms/ReverseMapping.aspx?FormId=39759a66-94a2-4a9c-9137-a9f8d51fa4f3&isIframe=true&AgencyId=7afbe06d-baee-4933-8f50-ce1e2df0a6f0"
                                title="Los Angeles Truck Insurance"
                                height={height}
                                width='100%'
                            />
                        </Conditional>
                        <Conditional condition={Number(width) <= 768 && isOpenOnMobile === false}>
                            <Note underChildren={() => (
                                <button
                                    className={classes.noteBtn}
                                    onClick={() => setIsOpenOnMobile(true)}
                                >
                                    Anyway Open Mobile
                                </button>
                            )}>
                                <span className={classes.noteParagraph}>
                                    Hello If You Want to fill ‘
                                    <Link href='/'>Los Angeles Truck Insurance NEW QUOTE APPLICATION</Link> ‘,
                                    Please Open Desktop Version For This Site For Your Better Experience, Thank You!
                                </span>
                            </Note>
                        </Conditional>
                    </div>
                </Container>
                <HelpSection />
            </section>
        </>
    );
};

export default QuoteRequest;