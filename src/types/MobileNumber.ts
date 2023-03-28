import { HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export type DropdownProps = HTMLAttributes<HTMLButtonElement>;

export interface MobileNumberProps {
  containerProps?: ContainerProps;
  dropdownProps?: DropdownProps;
  direction?: 'rtl' | 'ltr';
}
