export const AddIcon: React.FC<React.SVGProps<SVGSVGElement> & { remove?: boolean }> = ({remove, ...props}) => (
    <svg
        {...props}
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#clip0_432_9232)">
            <circle cx="16" cy="16" r="16" fill="#001D4A" fillOpacity="0.15"/>
            <path
                d={remove ? 'M17 25V17.2857H7V14.7143H14.2857V14.7143H25V17.2857H17' : "M14.7143 25V17.2857H7V14.7143H14.7143V7H17.2857V14.7143H25V17.2857H17.2857V25H14.7143Z"}
                fill="#001D4A"
                fillOpacity="0.8"
            />
        </g>
        <defs>
            <clipPath id="clip0_432_9232">
                <rect width="32" height="32" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);