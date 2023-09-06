const FreeQuote: React.FC<React.SVGProps<SVGSVGElement> & { rotate?: number }> = ({
    rotate = 0,
    ...props
}) => (
    <svg
        {...props}
        style={{ transform: `rotate(${rotate}deg)`, transition: 'all .2s' }}
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
    >
        <rect
            x="1"
            y="1"
            width="28"
            height="28"
            rx="9"
            fill="#FFC822"
        />
        <path
            d="M15 8L9.2265 18L20.7735 18L15 8ZM16 23L16 17L14 17L14 23L16 23Z"
            fill="#154BA1"
        />
        <rect
            x="1"
            y="1"
            width="28" 
            height="28"
            rx="9"
            stroke="#154BA1"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
            strokeDasharray="4 4"
        />
    </svg>
);

export { FreeQuote };