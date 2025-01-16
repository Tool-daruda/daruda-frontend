import type { SVGProps } from 'react';

const SvgIcBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" {...props}>
    <path
      stroke="#565959"
      strokeWidth={1.5}
      d="M5.625 5.5a1.5 1.5 0 0 1 1.5-1.5h10a1.5 1.5 0 0 1 1.5 1.5v12.783a1.5 1.5 0 0 1-2.3 1.27l-3.4-2.142a1.5 1.5 0 0 0-1.6 0l-3.4 2.141a1.5 1.5 0 0 1-2.3-1.269z"
    />
  </svg>
);
export default SvgIcBookmark;
