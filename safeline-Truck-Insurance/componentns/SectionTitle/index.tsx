import classNames from 'classnames';
import classes from './index.module.css';

interface IProps {
    children: React.ReactNode;
    position?: 'center' | 'start',
    size?: number,
    color?: string,
};

const SectionTitle: React.FC<IProps> = ({
    children,
    position = '',
    size,
    color
}) => (
    <h2
        style={{
            ...(size && { fontSize: `${size}px` }),
            ...(color && { "-webkit-text-stroke": `1.5px ${color}` })
        }}
        className={classNames(classes.sectionTitle, classes[position])}
    >
        {children}
    </h2>
);

export { SectionTitle };