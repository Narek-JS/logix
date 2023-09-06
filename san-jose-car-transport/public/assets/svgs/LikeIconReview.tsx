export const LikeIconReview: React.FC<{ color?: string }> = ({ color = '#99BAC9' }) => (
    <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M24.6844 13.6783C25.2094 12.9846 25.5 12.1346 25.5 11.2502C25.5 9.84709 24.7156 8.51897 23.4531 7.77834C23.1281 7.5877 22.7581 7.48737 22.3813 7.48772H14.8875L15.075 3.64709C15.1188 2.71897 14.7906 1.83772 14.1531 1.16584C13.8403 0.834681 13.4628 0.571197 13.0441 0.391672C12.6254 0.212148 12.1743 0.120398 11.7188 0.122093C10.0938 0.122093 8.65625 1.21584 8.225 2.78147L5.54062 12.5002H5.53125V25.8752H20.2906C20.5781 25.8752 20.8594 25.819 21.1187 25.7065C22.6062 25.0721 23.5656 23.619 23.5656 22.0065C23.5656 21.6127 23.5094 21.2252 23.3969 20.8502C23.9219 20.1565 24.2125 19.3065 24.2125 18.4221C24.2125 18.0283 24.1562 17.6408 24.0438 17.2658C24.5688 16.5721 24.8594 15.7221 24.8594 14.8377C24.8531 14.444 24.7969 14.0533 24.6844 13.6783ZM0.5 13.5002V24.8752C0.5 25.4283 0.946875 25.8752 1.5 25.8752H3.53125V12.5002H1.5C0.946875 12.5002 0.5 12.9471 0.5 13.5002Z"
            fill={color}
        />
    </svg>
)