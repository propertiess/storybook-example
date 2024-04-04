import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  /**
   * add border red
   */
  error?: boolean;
};

export const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { className, error, ...rest },
  ref,
) {
  return (
    <input
      className={clsx(
        'rounded-lg border bg-main placeholder:text-opacity-80 hover:border-primary focus:border-primary outline-none py-[0.375rem] px-[0.75rem] transition-all duration-300',
        error
          ? 'border-red-500/70 hover:border-red-500 focus:border-red-500'
          : 'border-white/10',
        className,
      )}
      ref={ref}
      {...rest}
    />
  );
});
