import type { SVGProps } from 'react';

const SvgKakaoVector = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={22} fill="none" {...props}>
    <path
      fill="#000"
      fillOpacity={0.85}
      d="M12.001 0C5.372 0 0 4.237 0 9.466c0 3.402 2.276 6.386 5.693 8.053-.25.934-.91 3.388-1.04 3.912-.164.65.237.643.5.468.207-.138 3.288-2.23 4.618-3.13q1.085.162 2.228.163C18.626 18.932 24 14.695 24 9.466 24 4.236 18.628 0 12.001 0"
    />
  </svg>
);
export default SvgKakaoVector;
