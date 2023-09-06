import { useState } from 'react';
import { Search } from '@/pagesComponents/Search';
import { useGetMenusQuery } from '@/store/manu';
import { QuoteSiteBarIcon } from '@/public/assets/svgs/QuoteSiteBarIcon';
import { CertificateSiteBarIcon } from '@/public/assets/svgs/CertificateSiteBarIcon';
import { Conditional } from '@/componentns/Conditional';
import { SiteBarArrowIcon } from '@/public/assets/svgs/SiteBarArrowIcon';
import Link from 'next/link';
import classNames from 'classnames';
import classes from './index.module.css';

const SiteBar: React.FC = () => {
    const { data } = useGetMenusQuery('menus');
    const [ openChildGroupIndex, setOpenChildGroupIndex ] = useState<null | number>(null);

    const toogleLinkGroup = (index: number) => {
        if(openChildGroupIndex === index) return setOpenChildGroupIndex(null);
        setOpenChildGroupIndex(index);
    };

    return (
        <div className={classNames(classes.siteBar, 'siteBar')}>
            <Search />
            <Link href='/quote' className={classes.link}>
                <QuoteSiteBarIcon />
                Quote Request
            </Link>
            <Link href='/certificate-request' className={classes.link}>
                <CertificateSiteBarIcon />
                Certificate Request
            </Link>
            { data?.allItems.map((item, index) => (
                <Conditional
                    key={item.id}
                    condition={item?.children?.length}
                    fallback={() => (
                        <Link
                            key={item.id}
                            href={item.url || ''}
                            children={item.title}
                            className={classes.link}
                        />
                    )}
                >
                    <p className={classes.dropDownTitle} onClick={() => toogleLinkGroup(index)}>
                        {item.title}
                        <SiteBarArrowIcon rotate={index === openChildGroupIndex ? 180 : 0}/>
                    </p>
                    <div className={classNames(classes.dropDown, {
                        [classes.activeDropDown]: index === openChildGroupIndex
                    })}>
                        { item?.children?.map(childeItem => (
                            <Link
                                href={childeItem?.url || ''}
                                key={childeItem.id}
                                className={classes.link}
                            >
                                {childeItem.title}
                            </Link>
                        ))}
                    </div>
                </Conditional>
            ))}
        </div>
    );
};

export { SiteBar };