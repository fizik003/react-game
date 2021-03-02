import React, { ReactNode } from 'react';
import cn from 'classnames';

import './Button.scss';

interface ButtonInterface {
  children?: ReactNode | string;
  classNames?: string;
  onClick?(): void;
}

const Button = ({ classNames, children, onClick }: ButtonInterface) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn('btn btn-primary', classNames)}
    >
      {children}
    </button>
  );
};

export default Button;
