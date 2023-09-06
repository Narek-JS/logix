const ArrowDynamic: React.FC<React.SVGProps<SVGSVGElement> & { rotate?: number }> = ({
    rotate,
    ...props
}) => (
    <svg
        {...props}
        style={rotate ? { transform: `rotate(${rotate}deg)` } : {}}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="11"
        viewBox="0 0 16 11"
        fill="none"
    >
        <path
            d="M14 1L7.73913 9L2 0.999999"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinejoin="round"
        />
    </svg>

);

export { ArrowDynamic };