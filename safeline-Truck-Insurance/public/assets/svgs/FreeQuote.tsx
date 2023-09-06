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
        <g clipPath="url(#clip0_244_10400)">
            <circle
                cx="15"
                cy="15"
                r="13.5"
                fill="#29AAE2"
                stroke="#FDFDFF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="20 20"
            />
                <path
                    d="M22 11L14.6957 19L8 11"
                    stroke="#FDFDFF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                </g>
            <defs>
            <clipPath id="clip0_244_10400">
            <   rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);

export { FreeQuote };