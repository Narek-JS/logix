export const QuoteButtonIcon: React.FC<{ rotate?: number }> = ({ rotate = 0 }) => (
    <svg style={{rotate: `${rotate}deg`}} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradient_396_2491" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F83600"/>
                <stop offset="100%" stopColor="#FE8C00"/>
            </linearGradient>
            <clipPath id="clip0_396_2491">
                <rect width="30" height="30" fill="white"/>
            </clipPath>
        </defs>
        <g clipPath="url(#clip0_396_2491)">
            <circle cx="15" cy="15" r="15" fill="url(#gradient_396_2491)"/>
            <path d="M22 11L14.6957 19L8 11" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
    </svg>
);