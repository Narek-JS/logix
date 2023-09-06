
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectMenus } from '@/store/manu';
import { GetQuoteIcon } from '@/public/assets/svgs/GetQuoteIcon';
import { createPortal } from 'react-dom';
import { useHydration } from "@/hooks/useHydration";
import { openForm as openFormAction, selectQouteFormStatus } from "@/store/quoteForm";
import { socialIcons } from '@/constants/socialIcons';
import PopUp from "@/componentns/PopUp";
import useWindowSize from '@/hooks/useWindowSize';
import classNames from 'classnames';
import classes from './index.module.css';

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
            { data?.social.map((social, index) => {
                const IconComponent = socialIcons[social.title];
                return IconComponent && <IconComponent key={index} />
            })}

            <div className={classes.getQuote} onClick={openForm}>
                <p>Get A FREE Quote</p>
                <GetQuoteIcon />
            </div>

            {(hydration && isOpen) && createPortal(
                <PopUp />,
                document.getElementById('protal')!
            )}
        </div>
    );
};

export { SocialLinks };