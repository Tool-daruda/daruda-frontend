import type { SVGProps } from 'react';

const SvgImgModalexit = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={52} height={70} fill="none" {...props}>
    <g filter="url(#img_modalexit_svg__a)">
      <path
        fill="#F77B1B"
        fillRule="evenodd"
        d="M21.388 15.532c.29 1.347-1.276 2.31-2.347 1.443L7.608 7.723a1.46 1.46 0 0 1 .154-2.38L16.1.217a1.46 1.46 0 0 1 2.194.937zm-5.173 7.526c1.308.434 1.343 2.271.052 2.755L2.495 30.97a1.46 1.46 0 0 1-1.973-1.34l-.188-9.785a1.46 1.46 0 0 1 1.92-1.415zm12.541-6.777c-.198 1.363 1.43 2.217 2.44 1.28L41.973 7.553a1.46 1.46 0 0 0-.315-2.364L32.992.642a1.46 1.46 0 0 0-2.124 1.084z"
        clipRule="evenodd"
      />
    </g>
    <g filter="url(#img_modalexit_svg__b)">
      <path
        fill="#B9B9F6"
        d="M24.252 28a3.5 3.5 0 0 1 3.5-3.5h19.25a4.667 4.667 0 0 1 4.667 4.667v23.625a4.667 4.667 0 0 1-4.667 4.666H28.919a4.667 4.667 0 0 1-4.667-4.666z"
      />
      <path
        fill="#4D4ECD"
        d="M24.252 27.35c0-2.209 2.36-3.616 4.304-2.565l14.832 8.017a4.67 4.67 0 0 1 2.447 4.105v24.39c0 3.535-3.776 5.787-6.885 4.106L26.7 58.781a4.67 4.67 0 0 1-2.448-4.105z"
      />
    </g>
    <defs>
      <filter
        id="img_modalexit_svg__a"
        width={45.605}
        height={33.398}
        x={0.334}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={3.5} dy={2.333} />
        <feGaussianBlur stdDeviation={2.917} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.46 0" />
        <feBlend in2="shape" result="effect1_innerShadow_40001890_18968" />
      </filter>
      <filter
        id="img_modalexit_svg__b"
        width={29.749}
        height={43}
        x={24.252}
        y={24.43}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dx={2.333} dy={1.458} />
        <feGaussianBlur stdDeviation={2.494} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.18 0" />
        <feBlend in2="shape" result="effect1_innerShadow_40001890_18968" />
      </filter>
    </defs>
  </svg>
);
export default SvgImgModalexit;
