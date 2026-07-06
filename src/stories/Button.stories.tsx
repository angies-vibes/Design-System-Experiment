import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './Button';
import type { ButtonMode, ButtonProps, ButtonVariant, ButtonVisualState } from './Button';

const buttonVariants = ['primary', 'secondary'] as const satisfies ButtonVariant[];
const buttonStates = ['default', 'hover', 'pressed'] as const satisfies ButtonVisualState[];
const tokenModes = ['default', 'dark'] as const satisfies ButtonMode[];

const ButtonMatrix = (args: ButtonProps) => (
  <div
    style={{
      display: 'grid',
      gap: 20,
      justifyItems: 'start',
    }}
  >
    {buttonVariants.map((variant) => (
      <div
        key={variant}
        style={{
          alignItems: 'center',
          display: 'grid',
          gap: 16,
          gridTemplateColumns: '96px repeat(3, max-content)',
        }}
      >
        <strong
          style={{
            color: 'var(--text-primary)',
            fontFamily: 'var(--family-primary)',
            fontSize: 'var(--size-body)',
            fontWeight: 'var(--weight-medium)',
            textTransform: 'capitalize',
          }}
        >
          {variant}
        </strong>
        {buttonStates.map((visualState) => (
          <Button
            {...args}
            key={`${variant}-${visualState}`}
            variant={variant}
            visualState={visualState}
          />
        ))}
      </div>
    ))}
  </div>
);

const ButtonModeMatrix = (args: ButtonProps) => (
  <div
    style={{
      display: 'grid',
      gap: 24,
    }}
  >
    {tokenModes.map((mode) => (
      <section
        data-theme={mode}
        key={mode}
        style={{
          background: 'var(--section-primary)',
          border: '1px solid color-mix(in srgb, var(--text-primary), transparent 82%)',
          borderRadius: 'var(--radius-radius-04)',
          boxSizing: 'border-box',
          color: 'var(--text-primary)',
          display: 'grid',
          gap: 18,
          padding: 24,
        }}
      >
        <h2
          style={{
            fontFamily: 'var(--family-primary)',
            fontSize: 'var(--size-body)',
            fontWeight: 'var(--weight-medium)',
            lineHeight: 1.25,
            margin: 0,
            textTransform: 'capitalize',
          }}
        >
          {mode}
        </h2>
        <ButtonMatrix {...args} mode={mode} />
      </section>
    ))}
  </div>
);

const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'inline-radio',
      options: ['default', 'dark'],
    },
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    visualState: {
      control: 'inline-radio',
      options: ['default', 'hover', 'pressed'],
    },
  },
  args: {
    label: 'Book Now',
    mode: 'default',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    visualState: 'default',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    visualState: 'default',
  },
};

export const States: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <div
      style={{
        boxSizing: 'border-box',
        padding: 32,
      }}
    >
      <ButtonModeMatrix {...args} />
    </div>
  ),
  args: {
    label: 'Book Now',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Book Now',
    variant: 'primary',
  },
};
