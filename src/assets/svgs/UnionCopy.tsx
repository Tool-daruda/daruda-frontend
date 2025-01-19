import type { SVGProps } from 'react';

const SvgUnionCopy = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M11.781 10.368a1 1 0 1 0 2 .042l.199-9.369a1 1 0 0 0-1.021-1.02l-9.37.198a1 1 0 0 0 .043 2l6.877-.146L.31 12.27a1 1 0 1 0 1.414 1.414L11.927 3.483z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgUnionCopy;
