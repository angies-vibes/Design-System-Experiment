import type { ButtonHTMLAttributes } from 'react';
import './button.css';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonVisualState = 'default' | 'hover' | 'pressed';
export type ButtonMode = 'default' | 'dark';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Token color mode */
  mode?: ButtonMode;
  /** Visual emphasis of the button */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Static visual state for documentation and visual review */
  visualState?: ButtonVisualState;
  label: string;
}

export const Button = ({
  mode = 'default',
  variant = 'primary',
  size = 'md',
  visualState = 'default',
  label,
  className,
  ...props
}: ButtonProps) => {
  const classes = [
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${size}`,
    `ds-button--${visualState}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={classes} data-theme={mode} {...props}>
      {label}
    </button>
  );
};
