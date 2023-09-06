import { BingIcon } from "@/public/assets/svgs/BingIcon";
import { FbIcon } from "@/public/assets/svgs/FbIcon";
import { GoogleIcon } from "@/public/assets/svgs/GoogleIcon";
import { PinterestIcon } from "@/public/assets/svgs/PinterestIcon";
import { TwitterIcon } from "@/public/assets/svgs/TwitterIcon";
import { YelpIcon } from "@/public/assets/svgs/YelpIcon";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectMenus } from '@/store/manu';
import { createPortal } from 'react-dom';
import { useHydration } from "@/hooks/useHydration";
import { openForm as openFormAction, selectQouteFormStatus } from "@/store/quoteForm";
import { ArrowIcon } from "@/public/assets/svgs/ArrowIcon";
import PopUp from "@/componentns/PopUp";
import useWindowSize from '@/hooks/useWindowSize';
import classNames from 'classnames';
import classes from './index.module.css';

export const socialIcons = {
    'Facebook': FbIcon,
    'Twitter': TwitterIcon,
    'Pinterest': PinterestIcon,
    'Google': GoogleIcon,
    'Bing': BingIcon,
    'Yelp': YelpIcon
};

const SocialLinks = () => {
    const { width } = useWindowSize();
    const { data } = useAppSelector(selectMenus);
    const hydration = useHydration();
    const dispatch = useAppDispatch();
    const isOpen = useAppSelector(selectQouteFormStatus);

    if(Number(width) <= 768) return null;

    const openForm = () => dispatch(openFormAction());

    return (
        <div className={classNames(classes.socialLinks)}>
            <div className={classes.getQuote} onClick={openForm}>
                <p>
                    <span>Get A Quote</span>
                    <ArrowIcon type="quote" rotate={-90} />
                </p>
            </div>

            { data?.social.map((social, index) => {
                const IconComponent = socialIcons[social.title];
                return IconComponent && <IconComponent key={index} />
            })}

            {(hydration && isOpen) && createPortal(
                <PopUp />,
                document.getElementById('protal')!
            )}
        </div>
    );
};

export { SocialLinks };