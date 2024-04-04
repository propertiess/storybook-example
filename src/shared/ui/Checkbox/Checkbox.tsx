import { CheckIcon } from '@/shared/assets/svg/CheckIcon';
import { InputHTMLAttributes, forwardRef } from 'react';

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> & {
  onChange?: () => void;
};

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  function Checkbox(props, ref) {
    return (
      <div className='relative border border-white w-fit p-1 rounded-md'>
        <CheckIcon fill={props.checked ? 'white' : 'transparent'} />
        <input
          {...props}
          type='checkbox'
          className='absolute top-0 left-0 opacity-0 w-full h-full'
          ref={ref}
        />
      </div>
    );
  },
);
