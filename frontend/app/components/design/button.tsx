import { type ComponentProps, forwardRef } from 'react';
import { Slot } from './slot';

export type ButtonVariant = 'solid-fill' | 'outline' | 'text';
export type ButtonSize = 'lg' | 'md' | 'sm' | 'xs';

export const buttonBaseStyle = `
  inline-flex items-center justify-center
  font-medium
  transition-colors
  cursor-pointer
  hover:cursor-pointer
  hover:underline
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2
  disabled:pointer-events-none disabled:opacity-50
`;

export const buttonVariantStyle: { [key in ButtonVariant]: string } = {
  'solid-fill': `
    border-2
    border-blue-900
    bg-blue-900
    text-white
    hover:bg-blue-800
    hover:border-blue-800
    active:bg-blue-950
    active:border-blue-950
    disabled:bg-gray-300
    disabled:border-gray-300
    disabled:text-gray-500
  `,
  outline: `
    border-2
    border-blue-900
    bg-white
    text-blue-900
    hover:bg-blue-50
    hover:text-blue-800
    active:bg-blue-100
    active:text-blue-950
    disabled:bg-white
    disabled:text-gray-300
    disabled:border-gray-300
  `,
  text: `
    text-blue-900
    underline
    hover:bg-blue-50
    hover:text-blue-800
    active:bg-blue-100
    active:text-blue-950
    focus-visible:bg-yellow-200
    disabled:bg-transparent
    disabled:text-gray-300
  `,
};

export const buttonSizeStyle: { [key in ButtonSize]: string } = {
  lg: 'min-w-34 h-14 rounded-lg px-6 py-3 text-lg font-semibold',
  md: 'min-w-24 h-12 rounded-lg px-4 py-2 text-base font-semibold',
  sm: 'min-w-20 h-9 rounded-md px-3 py-1 text-sm font-medium',
  xs: 'min-w-16 h-7 rounded px-2 py-0.5 text-xs font-medium',
};

export type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  size: ButtonSize;
  hidden?: boolean;
} & (
  | ({ asChild?: false } & ComponentProps<'button'>)
  | { asChild: true; children: React.ReactNode }
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { asChild, children, className, variant = 'solid-fill', size, hidden, ...rest } = props;

  const classNames = `${buttonBaseStyle} ${buttonSizeStyle[size]} ${
    buttonVariantStyle[variant]
  } ${hidden ? 'invisible' : ''} ${className ?? ''}`;

  if (asChild) {
    return (
      <Slot className={classNames} {...rest}>
        {children}
      </Slot>
    );
  }

  const handleDisabled = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <button
      className={classNames}
      onClick={props['aria-disabled'] ? handleDisabled : props.onClick}
      disabled={props['aria-disabled'] === true || props['aria-disabled'] === 'true'}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';