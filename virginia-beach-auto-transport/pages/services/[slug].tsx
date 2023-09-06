import { Fragment } from 'react';
import { metaTags } from '@/constants/metaTags';
import { useRouter } from 'next/router';
import { Container } from '@/components/ui/container';
import { useScrollToView } from '@/hooks/useScrollToView';
import { HelpSection } from '@/components';
import Head from 'next/head';

export default function Services() {
  const { query: { slug } } = useRouter();
  const sectionRef = useScrollToView<HTMLParagraphElement>();
  return (
    <Fragment>
        <Head>{metaTags.home}</Head>
        <Container>
          <p
            ref={sectionRef}
            style={{
              color: 'blue',
              fontSize: '40px',
              margin: "40px auto", 
              textAlign: 'center'
            }}
          >
            here we need to paint current service
          </p> 
        </Container>
        <HelpSection />
    </Fragment>
  );
};
