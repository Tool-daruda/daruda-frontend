import type { SVGProps } from 'react';

const SvgIsBooked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={16} fill="none" {...props}>
    <path
      fill="#4D4ECD"
      d="M.625 1.5a1.5 1.5 0 0 1 1.5-1.5h10a1.5 1.5 0 0 1 1.5 1.5v12.783a1.5 1.5 0 0 1-2.3 1.27l-3.4-2.142a1.5 1.5 0 0 0-1.6 0l-3.4 2.141a1.5 1.5 0 0 1-2.3-1.269z"
    />
  </svg>
);
export default SvgIsBooked;
