import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  // tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};
