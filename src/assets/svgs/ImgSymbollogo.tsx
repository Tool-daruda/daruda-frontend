import type { SVGProps } from 'react';

const SvgImgSymbollogo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={110} height={121} fill="none" {...props}>
    <g filter="url(#img_symbollogo_svg__a)">
      <path
        fill="#4D4ECD"
        d="M40.506 46.072c-.59-4.833 4.73-8.156 8.815-5.509l56.261 36.465c4.295 2.784 3.071 9.373-1.938 10.428L78.171 92.82a5.74 5.74 0 0 0-3.346 2.09L58.84 115.453c-3.143 4.039-9.603 2.252-10.222-2.829z"
      />
    </g>
    <g filter="url(#img_symbollogo_svg__b)">
      <path
        fill="#F77B1B"
        fillRule="evenodd"
        d="M36.659 27.54c.505 2.346-2.22 4.021-4.086 2.512L12.67 13.945a2.543 2.543 0 0 1 .268-4.143L27.453.879a2.543 2.543 0 0 1 3.818 1.63zm-9.008 13.1c2.277.754 2.339 3.954.092 4.795l-23.977 8.98A2.543 2.543 0 0 1 .33 52.083L.004 35.048a2.543 2.543 0 0 1 3.343-2.463zm21.828-11.798c-.344 2.374 2.489 3.861 4.247 2.229L72.49 13.649a2.543 2.543 0 0 0-.55-4.116L56.854 1.617a2.543 2.543 0 0 0-3.698 1.887z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <filter
        id="img_symbollogo_svg__a"
        width={74.341}
        height={83.123}
        x={40.461}
        y={39.627}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={6.601} dy={5.078} />
        <feGaussianBlur stdDeviation={5.611} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
        <feBlend in2="shape" result="effect1_innerShadow_40003645_18923" />
      </filter>
      <filter
        id="img_symbollogo_svg__b"
        width={79.39}
        height={58.14}
        x={0.004}
        y={0.5}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={6.093} dy={4.062} />
        <feGaussianBlur stdDeviation={5.078} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.46 0" />
        <feBlend in2="shape" result="effect1_innerShadow_40003645_18923" />
      </filter>
    </defs>
  </svg>
);
export default SvgImgSymbollogo;
