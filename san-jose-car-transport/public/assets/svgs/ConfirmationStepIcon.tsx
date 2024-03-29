export const ConfirmationStepIcon: React.FC<{ color?: string }> = ({ color = '' }) => color ? (
    <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20 4.54V2C20 0.9 19.1 0 18 0H2C0.9 0 0.00999999 0.89 0.00999999 2V4.54C0.00999999 5.23 0.34 5.91 0.95 6.23C1.58 6.58 2 7.24 2 8C2 8.76 1.57 9.43 0.94 9.76C0.34 10.09 0 10.77 0 11.46V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V11.46C20 10.77 19.66 10.09 19.06 9.76C18.43 9.42 18 8.76 18 8C18 7.24 18.43 6.58 19.06 6.24C19.66 5.91 20 5.23 20 4.54ZM11 13.5H9V11.5H11V13.5ZM11 9H9V7H11V9ZM11 4.5H9V2.5H11V4.5Z"
            fill={color}
        />
    </svg>
) : (
    <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
        <linearGradient id="iconGradient" gradientTransform="rotate(180)">
            <stop offset="0%" stopColor="#F83600" />
            <stop offset="100%" stopColor="#FE8C00" />
        </linearGradient>
        </defs>
        <g clipPath="url(#clip0)">
        <path
            d="M20 4.54V2C20 0.9 19.1 0 18 0H2C0.9 0 0.00999999 0.89 0.00999999 2V4.54C0.00999999 5.23 0.34 5.91 0.95 6.23C1.58 6.58 2 7.24 2 8C2 8.76 1.57 9.43 0.94 9.76C0.34 10.09 0 10.77 0 11.46V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V11.46C20 10.77 19.66 10.09 19.06 9.76C18.43 9.42 18 8.76 18 8C18 7.24 18.43 6.58 19.06 6.24C19.66 5.91 20 5.23 20 4.54ZM11 13.5H9V11.5H11V13.5ZM11 9H9V7H11V9ZM11 4.5H9V2.5H11V4.5Z"
            fill={`url(#iconGradient)`}
        />
        </g>
        <defs>
        <clipPath id="clip0">
            <rect width="20" height="16" fill="linear-gradient(180deg, #F83600 0%, #FE8C00 100%)" />
        </clipPath>
        </defs>
    </svg>
);