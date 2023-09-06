import { QuoteCloseIcon } from '@/public/assets/svgs/QuoteCloseIcon';
import { FormQuote } from '@/pagesComponents/formQuote';
import { useAppDispatch } from '@/store/hooks';
import { closeForm } from '@/store/quoteForm';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './index.module.css';

const PopUp: React.FC = () => { 
    const dispatch = useAppDispatch();

    return (
        <div className={classNames(classes.popup, 'popup')}>
            <div className={classes.imageContent}>
                <Image
                    alt='logo'
                    src='/assets/images/logo.png'
                    width={160}
                    height={60}
                    className={classes.logo}
                />
                <div className={classes.imageWrapper}>
                    <p><span>Trusted</span> Insurance Made For <span>Trucking</span></p>
                    <Image
                        alt='image get Quote'
                        src='/assets/images/popupImage.png'
                        width={400}
                        height={500}
                    />
                </div>
            </div>
            <div className={classes.form}>
                <QuoteCloseIcon
                    onClick={() => dispatch(closeForm())}
                    className={classes.closeIcon}
                />
                <FormQuote bgColor='#F4F7FB'/>
            </div>
        </div>
    );
};

export default PopUp;