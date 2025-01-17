import type { SVGProps } from 'react';

const SvgFree = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" {...props}>
    <path
      fill="#F77B1B"
      fillRule="evenodd"
      d="M4 1.75h12A2.25 2.25 0 0 1 18.25 4v12A2.25 2.25 0 0 1 16 18.25H4A2.25 2.25 0 0 1 1.75 16V4A2.25 2.25 0 0 1 4 1.75M1 4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm13.5 5.83V8.569h-.9l.525-2.32h-1.392l-.425 2.32h-1.05l-.466-2.32H9.283l-.458 2.32H7.767l-.425-2.32H5.875L6.4 8.57h-.9v1.26h1.183l.892 3.92H8.95L10 8.56l1.05 5.19h1.375l.892-3.92zM8.275 11.31 8 9.83h.567zm3.808-1.481-.275 1.509-.3-1.51z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFree;
