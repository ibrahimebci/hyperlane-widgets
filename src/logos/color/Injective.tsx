import * as React from 'react';
import { SVGProps } from 'react';

const SvgInjective = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="injective_svg__w-32"
    data-icon="logo"
    data-prefix="fab"
    viewBox="0 0 33.36 33.36"
    {...props}
  >
    <path
      fill="url(#injective_svg__a)"
      d="M4.04 5.76 4.7 5l.04-.03.08-.06.02-.03c.15-.14.31-.29.5-.42a6.73 6.73 0 0 1 9.04.47c2.84 2.66 2.59 6.95.32 9.8-2.86 4.25-7.8 10.18-.97 15.5 1.23.95 2.13 1.74 6 2.86-2.53.46-4.87.32-7.48-.35-1.84-1.04-4.74-3.27-5.73-6.28-1.5-4.57 2.63-11.39 4.61-14.02 2.74-3.64-1.69-7.57-4.94-3.18-1.7 2.3-4.68 8.78-3.64 13.59.6 2.73 1.4 4.71 4.6 7.44a14.7 14.7 0 0 1-1.72-1.19A16.86 16.86 0 0 1 4.04 5.76Z"
    />
    <path
      fill="url(#injective_svg__b)"
      d="m29.32 27.6-.65.76-.04.02-.07.07-.02.02a7.52 7.52 0 0 1-2.59 1.57 6.73 6.73 0 0 1-6.96-1.6c-2.84-2.67-2.59-6.96-.32-9.81 2.87-4.25 7.8-10.18.97-15.5-1.23-.95-2.14-1.74-6-2.86 2.53-.46 4.87-.32 7.48.35 1.84 1.04 4.74 3.27 5.73 6.28 1.5 4.56-2.63 11.39-4.61 14.02-2.74 3.63 1.68 7.57 4.94 3.17 1.7-2.29 4.67-8.77 3.64-13.58-.6-2.73-1.4-4.72-4.6-7.45.59.35 1.16.75 1.72 1.2a16.86 16.86 0 0 1 1.38 23.34Z"
    />
    <defs>
      <linearGradient
        id="injective_svg__a"
        x1={0}
        x2={33.36}
        y1={18.15}
        y2={18.15}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0082FA" />
        <stop offset={1} stopColor="#00F2FE" />
      </linearGradient>
      <linearGradient
        id="injective_svg__b"
        x1={0}
        x2={33.36}
        y1={15.21}
        y2={15.21}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0082FA" />
        <stop offset={1} stopColor="#00F2FE" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgInjective;
