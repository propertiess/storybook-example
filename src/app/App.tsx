import React from 'react';

import { Button } from '@/shared/ui/Button';
import { Checkbox } from '@/shared/ui/Checkbox';
import { Input } from '@/shared/ui/Input';

export const App = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className='container flex flex-col gap-5 pt-4 px-4'>
      <Button>btn</Button>
      <Checkbox
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <Input placeholder='Text' />
    </div>
  );
};
