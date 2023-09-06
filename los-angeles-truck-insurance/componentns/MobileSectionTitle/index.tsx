import { PAGES } from '@/constants/pages';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classes from './index.module.css';
import classNames from 'classnames';

interface IProps {
    title: string;
    position?: 'center' | 'start'
};

const MobileSectionTitle: React.FC<IProps> = ({ title, position }) => {
    const { pathname } = useRouter(); 

    const currentPageName = useMemo(() => {
        const pagesList = Object.values(PAGES);
        return pagesList.find(({ url }) => pathname === url)?.name;
    }, [pathname]);

    return (
        <div className={classNames(classes.wrapperTitle, {
            [classes.center]: position === 'center'
        })}>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.linkWrapper}>
                <Link href={PAGES.home.url}>{"Home >>"}</Link>
                <span>{currentPageName}</span>
            </p>
        </div>
    );
};

export { MobileSectionTitle };