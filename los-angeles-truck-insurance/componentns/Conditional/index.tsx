interface IProps {
    condition: any;
    fallback?: () => React.ReactNode,
    children: React.ReactNode
};

const Conditional: React.FC<IProps> = ({
    condition,
    fallback,
    children
}) => {
    if(Boolean(condition)) {
        return <>{children}</>;
    } else if (fallback) {
        return <>{fallback()}</>;
    };

    return null;
};

export { Conditional };