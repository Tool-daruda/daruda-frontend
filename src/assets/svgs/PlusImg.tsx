import * as React from 'react';
import type { SVGProps } from 'react';

const SvgPlusImg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={44} height={44} fill="none" {...props}>
    <path
      fill="#F0F2F2"
      fillRule="evenodd"
      d="M25 3a3 3 0 1 0-6 0v16H3a3 3 0 1 0 0 6h16v16a3 3 0 1 0 6 0V25h16a3 3 0 1 0 0-6H25z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgPlusImg;
