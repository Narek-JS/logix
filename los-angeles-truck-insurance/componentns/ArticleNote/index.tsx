import { SubTitleLineIcon } from '@/public/assets/svgs/SubTitleLineIcon';
import { Conditional } from '../Conditional';
import classes from './index.module.css';

interface IProps {
    type?: 'border';
    title?: string;
    maxWidth?: number;
    minWidth?: number;
    children: React.ReactNode;
};

const ArticleNote: React.FC<IProps> = ({
    type, title, maxWidth, minWidth, children
}) => (
    <div
        className={classes.articleNote}
        style={{
            ...(maxWidth && { maxWidth: `${maxWidth}px` }),
            ...(minWidth && { minWidth: `${minWidth}px` })
        }}
    >
        <Conditional condition={title}>
            <p className={classes.title}>
                <SubTitleLineIcon />
                <span>{title}</span>
            </p>
        </Conditional>
        <Conditional
            condition={type === 'border'}
            fallback={() => children}
        >
            <div className={classes.border}>
                { children }
            </div>
        </Conditional>
    </div>
);

export { ArticleNote };