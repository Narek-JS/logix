interface Iprops {
    rotate?: number;
    color?: string;
};

export const ArrowIcon: React.FC<Iprops> = ({ rotate = 0 }) => (
  <i>
    <svg
      style={{
        transform: `rotate(${rotate}deg)`,
        transition: "all .3s"
      }}
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 24L22 20L18 16"
        stroke="url(#paint0_linear_163_8264)"
        strokeWidth="1.59599"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="1.495"
        y="1"
        width="38"
        height="38"
        rx="19"
        stroke="url(#paint1_linear_163_8264)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_163_8264"
          x1="20"
          y1="16"
          x2="20"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F83600"/>
          <stop offset="1" stopColor="#FE8C00"/>
        </linearGradient>
        <linearGradient
          id="paint1_linear_163_8264"
          x1="20.495"
          y1="0"
          x2="20.495"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F83600"/>
          <stop offset="1" stopColor="#FE8C00"/>
        </linearGradient>
      </defs>
    </svg>
  </i>
);



