import { NoteBlueIcon } from '@/public/assets/svgs/NoteBlueIcon';
import { ReactNode } from 'react';
import classes from './index.module.css';
import classNames from 'classnames';

type WrapeChidrenType = () => ReactNode;

interface IProps {
    width?: number;
    children: ReactNode;
    underChildren?: WrapeChidrenType;
    topChildren?: WrapeChidrenType;
    beforeChildren?: WrapeChidrenType;
    afterChildren?: WrapeChidrenType;
};

const Note: React.FC<React.HTMLProps<HTMLDivElement> & IProps> = ({
    width,
    children,
    underChildren,
    topChildren,
    beforeChildren,
    afterChildren,
    ...props
}) => {
    const underElms = underChildren && underChildren();
    const topElms = topChildren && topChildren();
    const beforeContentElms = beforeChildren && beforeChildren();
    const afterContentElms = afterChildren && afterChildren();

    const isGap = beforeContentElms || afterContentElms;

    return (
        <div
            className={classes.note}
            {...props}
            {...(width && { style: { maxWidth: width + 'px' } })}
        >
            {topElms}
            <div className={classNames(classes.noteChildrens, {
                [classes.gap10]: isGap
            })}>
                {beforeContentElms}
                <div className={classes.textNode}>
                    <NoteBlueIcon />
                    <p className={classNames({[classes.gap10]: isGap})}>{children}</p>
                </div>
                {afterContentElms}
            </div>
            {underElms}
        </div>
    )
};

export { Note };