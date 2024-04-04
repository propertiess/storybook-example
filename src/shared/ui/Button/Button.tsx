import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  /**
   * What variant should be?
   */
  variant?: 'primary' | 'secondary';

  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * customize default styles
   */
  className?: string;
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  type = 'button',
  ...rest
}: Props) => {
  return (
    <button
      className={clsx(
        'rounded-lg text-[16px] font-semibold shadow focus:outline-0 opacity-90 hover:opacity-100 active:opacity-100 transition-all duration-300 w-fit',
        className,
        {
          'bg-primary hover:shadow hover:shadow-primary focus:shadow focus:shadow-secondary':
            variant === 'primary',
          'bg-secondary hover:shadow hover:shadow-secondary focus:shadow focus:shadow-secondary':
            variant === 'secondary',
          'py-2 px-2 text-sm': size === 'sm',
          'py-2 px-6': size === 'md',
          'py-4 px-8 text-lg': size === 'lg',
        },
      )}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};
