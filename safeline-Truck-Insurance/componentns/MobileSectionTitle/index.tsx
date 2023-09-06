import classes from './index.module.css';
import classNames from 'classnames';

interface IProps {
    title: string;
    position?: 'center' | 'start'
};

const MobileSectionTitle: React.FC<IProps> = ({ title, position }) => {

    return (
        <div className={classNames(classes.wrapperTitle, {
            [classes.center]: position === 'center'
        })}>
            <h2 className={classes.title}>{title}</h2>
        </div>
    );
};

export { MobileSectionTitle };