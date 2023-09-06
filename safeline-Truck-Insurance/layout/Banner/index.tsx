import { useRouter } from 'next/router';
import { Container } from '@/componentns/Container';
import { PAGES } from '@/constants/pages';
import { useMemo } from 'react';
import useWindowSize from '@/hooks/useWindowSize';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import classes from './index.module.css';

const Banner: React.FC = () => {
    const { pathname } = useRouter();
    const { width } = useWindowSize();

    const title = useMemo(() => {
        const pagesList = Object.values(PAGES);
        return pagesList.find(({ url }) => pathname === url)?.name;
    }, [pathname]);

    if (pathname === '/' || pathname === '/certificate' || Number(width) <= 768) return null;

    return (
        <div className={classNames(classes.banner, 'banner')}>
            <Image
                alt='banner Image'
                src='/assets/images/banner.png'
                width={1800}
                height={200}
                className={classes.image}
            />
            <Container>
                <div className={classes.content}>
                    <p className={classes.title}>{title}</p>
                    <p className={classes.link}>
                        <Link href={PAGES.home.url}>{"Home >>"}</Link>
                        <span>{title}</span>
                    </p>
                </div>
            </Container>
        </div>
    );
};

export { Banner };
