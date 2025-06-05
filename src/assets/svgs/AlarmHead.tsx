import type { SVGProps } from 'react';

const SvgAlarmHead = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={353}
    height={64}
    fill="none"
    style={{
      marginBottom: '-0.9px',
      filter: 'drop-shadow(0 0 1.2rem rgb(211 211 211 / 63%))',
    }}
    {...props}
  >
    <path
      fill="#fff"
      d="M319.538.635a2 2 0 0 1 2.924 0l9.397 10.069q.161.173.273.364H337c8.836 0 16 7.164 16 16v36H0v-36c0-8.836 7.164-16 16-16h293.868q.112-.191.273-.364z"
    />
    <path stroke="#EBEBEB" d="M0 62.5h353" />
  </svg>
);
export default SvgAlarmHead;
