import React from 'react';

export const CheckIcon = ({
  fill,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={18}
    height={18}
    viewBox='0 0 32 32'
    {...props}
  >
    <path
      d='M11.941 28.877 0 16.935l5.695-5.695 6.246 6.246L26.305 3.123 32 8.818z'
      style={{
        fill: fill || '#030104',
      }}
    />
  </svg>
);
