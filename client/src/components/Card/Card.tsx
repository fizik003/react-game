import React, { ReactNode } from 'react';
import cn from 'classnames';

import 'Card.scss';

interface CardInterface {
  cardTitle?: string;
  children?: ReactNode;
  className?: string;
}

const Card = ({ cardTitle, children, className }: CardInterface) => {
  return (
    <div className={cn('card-title', className)} style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className={cn('card-title', { 'd-none': !cardTitle })}>
          {cardTitle}
        </h5>
        {children}
      </div>
    </div>
  );
};

export default Card;
