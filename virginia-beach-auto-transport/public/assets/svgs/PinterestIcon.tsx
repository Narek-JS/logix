import { LINKS } from "@/constants/links";
import Link from "next/link";

export const PinterestIcon:React.FC = () => ( 
    <Link
        aria-label={LINKS.to_pinterest.ariaLabel}
        target="_blank"
        href={LINKS.to_pinterest.url}
    >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_411_1580)">
                <circle cx="20" cy="20" r="20" fill="#E60023" />
                <path d="M7.5 20C7.5 25.3365 10.8448 29.8927 15.5521 31.6854C15.4375 30.7094 15.3156 29.1 15.5781 27.9708C15.8042 27 17.0375 21.7854 17.0375 21.7854C17.0375 21.7854 16.6656 21.0406 16.6656 19.9375C16.6656 18.2083 17.6677 16.9167 18.9167 16.9167C19.9792 16.9167 20.4917 17.7135 20.4917 18.6687C20.4917 19.7365 19.8115 21.3323 19.4604 22.8125C19.1677 24.051 20.0823 25.0615 21.3031 25.0615C23.5146 25.0615 25.2156 22.7292 25.2156 19.3625C25.2156 16.3823 23.074 14.3 20.0167 14.3C16.4771 14.3 14.399 16.9552 14.399 19.7C14.399 20.7698 14.8104 21.9156 15.325 22.5396C15.3689 22.5867 15.3999 22.6443 15.415 22.7069C15.4302 22.7695 15.4289 22.8349 15.4115 22.8969C15.3167 23.2906 15.1062 24.1354 15.0656 24.3083C15.0104 24.5354 14.8854 24.5844 14.649 24.474C13.0948 23.751 12.124 21.4792 12.124 19.6542C12.124 15.7281 14.975 12.124 20.3448 12.124C24.6615 12.124 28.0167 15.2 28.0167 19.3104C28.0167 23.599 25.3135 27.051 21.5594 27.051C20.2979 27.051 19.1135 26.3948 18.7073 25.6208C18.7073 25.6208 18.0833 27.9979 17.9323 28.5792C17.6385 29.7083 16.824 31.1375 16.3187 31.949C17.4833 32.3073 18.7188 32.5 20 32.5C26.9031 32.5 32.5 26.9031 32.5 20C32.5 13.0969 26.9031 7.5 20 7.5C13.0969 7.5 7.5 13.0969 7.5 20Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_411_1580">
                <rect width="40" height="40" fill="white" />
                </clipPath>
            </defs>
        </svg>
    </Link>
)