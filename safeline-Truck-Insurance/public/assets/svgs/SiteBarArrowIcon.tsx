export const SiteBarArrowIcon: React.FC<React.SVGProps<SVGSVGElement> & { rotate?: number }> = ({
    rotate = 0,
    ...props
}) => ( 
    <svg
        style={{ transform: `rotate(${rotate}deg)`, transition: "all 0.2s" }}
        {...props}
        width="22"
        height="16"
        viewBox="0 0 22 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M20 2L10.6087 14L2 2"
            stroke="#012F59"
            strokeWidth="4"
            strokeLinejoin="round"
        />
    </svg>
)