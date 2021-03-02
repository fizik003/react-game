import React, { ReactNode } from 'react';
import cn from 'classnames';

import './Button.scss';

interface ButtonInterface {
  children?: ReactNode | string;
  classNames?: string;
  onClick?(): void;
  size?: 'btn-lg' | 'btn-sm' | null;
  type?: string;
  disabled?: boolean;
}

const Button = ({
  classNames,
  children,
  onClick,
  size,
  type = ' btn-primary',
  disabled,
}: ButtonInterface) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={cn('btn', size, type, classNames)}
    >
      {children}
    </button>
  );
};

export default Button;
