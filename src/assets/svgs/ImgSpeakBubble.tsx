import type { SVGProps } from 'react';

const SvgImgSpeakBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={224} height={97} fill="none" {...props}>
    <g filter="url(#img_speak_bubble_svg__a)">
      <path
        fill="#212121"
        fillRule="evenodd"
        d="M182.502 13.357a4 4 0 0 0-6.004 0l-10.205 11.59H28c-8.837 0-16 7.163-16 16v28c0 8.837 7.163 16 16 16h168c8.837 0 16-7.163 16-16v-28c0-8.837-7.163-16-16-16h-3.293z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="img_speak_bubble_svg__a"
        width={224}
        height={96.947}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset />
        <feGaussianBlur stdDeviation={6} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.829167 0 0 0 0 0.829167 0 0 0 0 0.829167 0 0 0 0.63 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_40004244_31242" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_40004244_31242" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SvgImgSpeakBubble;
