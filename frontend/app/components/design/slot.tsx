import { Children, type HTMLAttributes, type ReactNode, cloneElement, isValidElement } from 'react';

type SlotProps = HTMLAttributes<HTMLElement> & {
  children?: ReactNode;
};

export const Slot = (props: SlotProps) => {
  const { children, ...rest } = props;

  // https://react.dev/reference/react/isValidElement
  // https://react.dev/reference/react/cloneElement
  if (isValidElement(children)) {
    const child = children as React.ReactElement<any, any>;
    return cloneElement(child, {
      ...rest,
      ...(child.props as object),
      className: `${rest.className ?? ''} ${child.props.className ?? ''}`,
    });
  }

  if (Children.count(children) > 1) {
    Children.only(null);
  }

  return null;
};