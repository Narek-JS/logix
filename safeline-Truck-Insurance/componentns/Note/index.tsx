import { NoteBlueIcon } from '@/public/assets/svgs/NoteBlueIcon';
import { Fragment, ReactNode } from 'react';
import classes from './index.module.css';
import Image from 'next/image';
import classNames from 'classnames';

interface IProps {
    width?: number;
    withImg?: boolean;
    classes?: typeof classes;
    children: ReactNode;
};

const Note: React.FC<React.HTMLProps<HTMLDivElement> & IProps> = ({
    width,
    children,
    withImg,
    classes: parentClasses,
    ...props
}) => {
    return (
        <div
            className={classNames(classes.note, {
                ...(parentClasses && {[parentClasses.note]: true }) 
            })}
            {...props}
            {...(width && { style: { maxWidth: width + 'px' } })}
        >
            <div className={classes.noteChildrens}>
                <div className={classes.textNode}>
                    { withImg && (
                        <div className={classes.noteLogo}>
                            <Image
                                alt='note Logo'
                                src='/assets/images/noteLogo.png'
                                width={224}
                                height={34}
                            />
                        </div>
                    )}
                    <NoteBlueIcon />
                    <p>{children}</p>
                </div>
            </div>
        </div>
    )
};

export { Note };