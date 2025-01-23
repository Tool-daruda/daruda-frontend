import type { SVGProps } from 'react';

const SvgImg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={19} height={20} fill="none" {...props}>
    <g filter="url(#img_svg__a)">
      <path
        fill="#4D4ECD"
        d="M6.912 7.778a.98.98 0 0 1 1.505-.94l9.603 6.224c.733.475.524 1.6-.331 1.78l-4.348.915a.98.98 0 0 0-.571.357L10.04 19.62c-.536.69-1.639.385-1.745-.483z"
      />
    </g>
    <g filter="url(#img_svg__b)">
      <path
        fill="#F77B1B"
        fillRule="evenodd"
        d="M6.257 4.615c.086.4-.38.687-.698.43l-3.397-2.75a.434.434 0 0 1 .046-.707L4.685.065a.434.434 0 0 1 .652.278zM4.719 6.852c.389.129.4.675.016.818L.642 9.203a.434.434 0 0 1-.586-.398L0 5.897a.434.434 0 0 1 .57-.42zm3.725-2.015a.434.434 0 0 0 .725.38l3.202-2.973a.434.434 0 0 0-.094-.702L9.702.19a.434.434 0 0 0-.631.322z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="img_svg__a"
        width={12.689}
        height={14.189}
        x={6.904}
        y={6.678}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={1.127} dy={0.867} />
        <feGaussianBlur stdDeviation={0.958} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
        <feBlend in2="shape" result="effect1_innerShadow_40003656_28493" />
      </filter>
      <filter
        id="img_svg__b"
        width={13.55}
        height={9.924}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={1.04} dy={0.693} />
        <feGaussianBlur stdDeviation={0.867} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.46 0" />
        <feBlend in2="shape" result="effect1_innerShadow_40003656_28493" />
      </filter>
    </defs>
  </svg>
);
export default SvgImg;
