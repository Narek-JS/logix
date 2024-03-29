import { LINKS } from "@/constants/links";
import Link from "next/link";

export const GoogleIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({...props}) => (
    <Link
        aria-label={LINKS.to_google.ariaLabel}
        target="_blank"
        href={LINKS.to_google.url}
    >
        <svg
            {...props}
            width="62"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M56.3307 25.9409H54.2498V25.8337H30.9998V36.167H45.5995C43.4696 42.1823 37.7462 46.5003 30.9998 46.5003C22.44 46.5003 15.4998 39.5602 15.4998 31.0003C15.4998 22.4405 22.44 15.5003 30.9998 15.5003C34.951 15.5003 38.5458 16.9909 41.2828 19.4257L48.5898 12.1187C43.9759 7.81878 37.8043 5.16699 30.9998 5.16699C16.7334 5.16699 5.1665 16.7339 5.1665 31.0003C5.1665 45.2668 16.7334 56.8337 30.9998 56.8337C45.2663 56.8337 56.8332 45.2668 56.8332 31.0003C56.8332 29.2682 56.6549 27.5774 56.3307 25.9409Z"
                fill="#FFC107"
            />
            <path
                d="M8.14502 18.9762L16.6326 25.2007C18.9291 19.5148 24.4911 15.5003 30.9998 15.5003C34.951 15.5003 38.5457 16.9909 41.2827 19.4257L48.5897 12.1187C43.9759 7.81878 37.8043 5.16699 30.9998 5.16699C21.0772 5.16699 12.4721 10.7689 8.14502 18.9762Z"
                fill="#FF3D00"
            />
            <path
                d="M31.0001 56.8332C37.6728 56.8332 43.7359 54.2796 48.32 50.1269L40.3246 43.3612C37.6438 45.3999 34.368 46.5026 31.0001 46.4999C24.2808 46.4999 18.5755 42.2155 16.4262 36.2363L8.00195 42.727C12.2774 51.0931 20.96 56.8332 31.0001 56.8332Z"
                fill="#4CAF50"
            />
            <path
                d="M56.3309 25.9402H54.25V25.833H31V36.1663H45.5997C44.5809 39.0292 42.7456 41.5309 40.3207 43.3622L40.3245 43.3596L48.32 50.1254C47.7542 50.6395 56.8333 43.9163 56.8333 30.9997C56.8333 29.2675 56.6551 27.5768 56.3309 25.9402Z"
                fill="#1976D2"
            />
        </svg>
    </Link>
);
