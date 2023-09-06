import classNames from 'classnames';
import classes from './index.module.css';
import useWindowSize from '@/hooks/useWindowSize';

type MediaSizeType = { size: number; screen: number };

interface IProps {
    children: React.ReactNode;
    position?: 'center' | 'start',
    size?: number,
    mediaSize?: MediaSizeType,
    color?: string,
};

const SectionTitle: React.FC<IProps> = ({
    children,
    position = '',
    size,
    mediaSize,
    color
}) => {
    const { width } = useWindowSize();

    return (
        <h2
            style={{
                ...(size && { fontSize: `${size}px` }),
                ...(mediaSize && { fontSize: `${Number(width) <= mediaSize.screen ? mediaSize.size : size}px` }),
                ...(color && { "-webkit-text-stroke": `1.5px ${color}` })
            }}
            className={classNames(classes.sectionTitle, classes[position])}
        >
            {children}
        </h2>
    );
};

export { SectionTitle };