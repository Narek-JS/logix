import { TopBar } from './TopBar';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectMenus } from '@/store/manu';
import { Container } from '@/componentns/Container';
import { useRouter } from 'next/router';
import { Search } from '@/pagesComponents/Search';
import {
    toogleSiteBar as toogleSiteBarAction,
    selectSiteBarStatus
} from '@/store/siteBar';
import Dropdown from '@/componentns/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import classNames from 'classnames';
import classes from './index.module.css';
import { CertificateCheckMarkIcon } from '@/public/assets/svgs/CertificateCheckMarkIcon';
import { PAGES } from '@/constants/pages';

const Header: React.FC = () => {
    const { pathname } = useRouter();
    const { data } = useAppSelector(selectMenus);
    const dispatch = useAppDispatch();

    const isOpen = useAppSelector(selectSiteBarStatus);

    const toggleSiteBar = () => dispatch(toogleSiteBarAction());

    return (
        <header className={classes.header}>
            <TopBar />
            <div className={classes.menu}>
                <Container>
                    <div className={classes.menuContent}>
                        <Link href='/'>
                            <Image
                                alt='Logo Image'
                                src='/assets/images/logo.png'
                                width={160}
                                height={60}
                                className={classes.logo}
                            />
                        </Link>
                        <ul className={classes.ul}>
                            { data?.items.map(item => (
                                !item.children?.length ? (
                                    <Link
                                        className={classNames({
                                            [classes.activeLink]: pathname === ('/' + item.url)
                                        })}
                                        key={item.id}
                                        href={item?.url || ''}
                                    >
                                        {item.title}
                                    </Link>
                                ) : (
                                    <Dropdown
                                        key={item.id}
                                        label={item.title || ''}
                                        items={item.children!.map(({ url, title }) => ({
                                            link: url!,
                                            label: title!
                                        }))}
                                    />
                                )
                            ))}
                            <Link
                                href={PAGES.certificate.url}
                                className={classes.certificateLink}
                            >
                                <CertificateCheckMarkIcon />
                                Certificate Request
                            </Link>
                        </ul>
                        <Search />
                        <div
                            className={classNames(classes.burger, {
                                [classes.isOpenBurger]: isOpen
                            })}
                            onClick={toggleSiteBar}
                        />
                    </div>
                </Container>
            </div>
        </header>
    );
};

export { Header };