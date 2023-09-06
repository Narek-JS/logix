export const GetQuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({...props}) => (
    <svg
        {...props}
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <rect
            x="1.5" 
            y="1.5" 
            width="37" 
            height="37" 
            fill="#FFC822"
        />
        <path
            d="M9 28L20.4783 12L31 28" 
            stroke="#FDFDFF" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
        />
        <rect
            x="1.5" 
            y="1.5" 
            width="37" 
            height="37" 
            stroke="#FDFDFF" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="20 20"
        />
    </svg>
)