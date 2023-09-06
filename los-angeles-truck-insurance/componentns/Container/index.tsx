
import { ReactNode } from 'react';
import classes from './index.module.css';

interface IProps {
    children: ReactNode;
};

const Container: React.FC<IProps> = ({ children }) => {

    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};

export { Container }