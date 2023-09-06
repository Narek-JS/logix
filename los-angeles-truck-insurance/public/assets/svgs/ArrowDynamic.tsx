const ArrowDynamic: React.FC<React.SVGProps<SVGSVGElement> & { rotate?: number }> = ({
    rotate, ...props
}) => (
    <svg
        {...props}
        style={rotate ? { transform: `rotate(${rotate}deg)` } : {}}
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="10"
        viewBox="0 0 15 10"
        fill="none"
    >
        <path
            d="M13.5 1L7.23913 9L1.5 0.999999"
            stroke="#FFC822"
            strokeWidth="2"
            strokeLinejoin="round"
        />
    </svg>

);

export { ArrowDynamic };