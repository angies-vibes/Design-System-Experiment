import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import { Hero } from './Hero';

const withTheme =
  (theme: 'light' | 'dark') =>
  (Story: () => ReactNode) => (
    <div
      data-theme={theme}
      style={{
        background: 'var(--section-primary)',
        boxSizing: 'border-box',
        minHeight: '100vh',
        padding: 32,
      }}
    >
      <Story />
    </div>
  );

const meta = {
  title: 'Design System/Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [withTheme('light')],
  args: {
    mode: 'default',
  },
};

export const Dark: Story = {
  decorators: [withTheme('dark')],
  args: {
    mode: 'dark',
  },
};
