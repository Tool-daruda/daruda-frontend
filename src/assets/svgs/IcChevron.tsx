import * as React from 'react';
import type { SVGProps } from 'react';

const SvgIcChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M18.107 14.684c.367.346 1.036.42 1.494.163.459-.256.533-.744.166-1.09l-8.777-8.29a.8.8 0 0 0-.326-.314A1.3 1.3 0 0 0 10 5a1.3 1.3 0 0 0-.664.152.8.8 0 0 0-.326.315L.233 13.756c-.367.347-.293.835.166 1.091s1.127.183 1.494-.163L10 7.027z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIcChevron;
