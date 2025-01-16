import * as React from 'react';
import type { SVGProps } from 'react';

const SvgUnion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={8} fill="none" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M8.95 1.514A.75.75 0 0 0 7.73.642l-3.58 5.01-1.889-2.52a.75.75 0 1 0-1.2.9l2.495 3.326a.75.75 0 0 0 .247.22.75.75 0 0 0 .973-.22z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnion;
