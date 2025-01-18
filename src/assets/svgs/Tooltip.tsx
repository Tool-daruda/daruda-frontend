import type { SVGProps } from 'react';

const SvgTooltip = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none" {...props}>
    <circle cx={16} cy={15} r={11} fill="#565959" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M16 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 3a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTooltip;
