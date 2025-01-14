import type { SVGProps } from 'react';

interface EllipseProps extends SVGProps<SVGSVGElement> {
  fillColor: string;
  strokeColor: string;
}

const SvgEllipse5276 = ({ fillColor, strokeColor, ...props }: EllipseProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <circle cx={10} cy={10} r={8} fill={fillColor} stroke={strokeColor} strokeWidth={4} />
  </svg>
);

export default SvgEllipse5276;
