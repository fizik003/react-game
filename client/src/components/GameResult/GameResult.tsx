import React from 'react';
import cn from 'classnames';

import './GameResult.scss';

interface GameResultInterface {
  classNames?: string;
}

const GameResult = ({ classNames }: GameResultInterface) => {
  return <div className={cn('game-result', classNames)}></div>;
};

export default GameResult;
