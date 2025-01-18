import type { SVGProps } from 'react';

const SvgBlurLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={54} height={90} fill="none" {...props}>
    <path fill="url(#BlurLeft_svg__a)" d="M0 0h54v90H0z" transform="matrix(-1 0 0 1 54 0)" />
    <g filter="url(#BlurLeft_svg__b)">
      <path
        stroke="#ACACAC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M27.6 37.8 20.4 45l7.2 7.2"
      />
    </g>
    <defs>
      <linearGradient id="BlurLeft_svg__a" x1={30} x2={0} y1={45} y2={45} gradientUnits="userSpaceOnUse">
        <stop offset={0.6} stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0} />
      </linearGradient>
      <filter
        id="BlurLeft_svg__b"
        width={53.778}
        height={53.778}
        x={-2.889}
        y={18.111}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation={4.444} />
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_40003287_32041" />
        <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_40003287_32041" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgBlurLeft;
