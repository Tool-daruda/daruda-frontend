import type { SVGProps } from 'react';

const SvgImgModalcheck = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={84} height={92} fill="none" {...props}>
    <g filter="url(#img_modalcheck_svg__a)">
      <path
        fill="#F77B1B"
        fillRule="evenodd"
        d="M33.901 25.01c.467 2.17-2.054 3.72-3.779 2.324L11.713 12.436a2.352 2.352 0 0 1 .248-3.832L25.386.35a2.352 2.352 0 0 1 3.531 1.509zm-8.329 12.12c2.107.697 2.163 3.656.085 4.435L3.48 49.87a2.352 2.352 0 0 1-3.176-2.158L0 31.957a2.352 2.352 0 0 1 3.092-2.278zm20.193-10.914c-.318 2.196 2.303 3.571 3.929 2.061l17.354-16.114a2.352 2.352 0 0 0-.507-3.807L52.586 1.034a2.352 2.352 0 0 0-3.42 1.745z"
        clipRule="evenodd"
      />
    </g>
    <g filter="url(#img_modalcheck_svg__b)">
      <path
        fill="#4D4ECD"
        fillRule="evenodd"
        d="M46.696 38.377a9.324 9.324 0 0 0-10.762 7.618l-4.809 28.112a9.324 9.324 0 0 0 7.619 10.763l28.111 4.808a9.324 9.324 0 0 0 10.763-7.618l4.808-28.112a9.324 9.324 0 0 0-7.618-10.762zm22.736 22.707a2.194 2.194 0 0 0-2.548-3.573L53.581 67l-5.07-7.217a2.194 2.194 0 1 0-3.59 2.523l6.34 9.024a2.194 2.194 0 0 0 3.069.525z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="img_modalcheck_svg__a"
        width={73.437}
        height={53.78}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={5.636} dy={3.757} />
        <feGaussianBlur stdDeviation={4.697} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.46 0" />
        <feBlend in2="shape" result="effect1_innerShadow_40001898_19041" />
      </filter>
      <filter
        id="img_modalcheck_svg__b"
        width={52.979}
        height={53.919}
        x={30.99}
        y={38.242}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={1.409} dy={2.348} />
        <feGaussianBlur stdDeviation={3.593} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0" />
        <feBlend in2="shape" result="effect1_innerShadow_40001898_19041" />
      </filter>
    </defs>
  </svg>
);
export default SvgImgModalcheck;
