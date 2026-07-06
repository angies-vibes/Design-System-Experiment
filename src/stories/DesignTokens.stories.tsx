import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ReactNode } from 'react';

import { DesignTokens } from './DesignTokens';

const withTheme =
  (theme: 'light' | 'dark') =>
  (Story: () => ReactNode) => (
    <div data-theme={theme}>
      <Story />
    </div>
  );

const meta = {
  title: 'Design System/Foundations/Tokens',
  component: DesignTokens,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DesignTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  decorators: [withTheme('light')],
};

export const Dark: Story = {
  decorators: [withTheme('dark')],
};
