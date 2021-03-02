import React, { useContext } from 'react';
import cn from 'classnames';

import paper from '../../img/paper.png';
import rock from '../../img/rock.png';
import scissors from '../../img/scissors.png';

import './PlayFigure.scss';
import { globalStateContext } from '../../context/globalStateContext';

interface PlayFigureInterface {
  className?: string;
  kinfOfFigure: 'paper' | 'rock' | 'scissors';
  clickable?: boolean;
}

const PlayFigure = ({
  kinfOfFigure,
  className,
  clickable = false,
}: PlayFigureInterface) => {
  const figure = {
    paper,
    rock,
    scissors,
  };

  const {
    setCurrentFigure,
    currentFigure,
    setStartBotChoice,
    startBotChoicie,
    setBotChoice,
    botChoice,
  } = useContext(globalStateContext);

  const clickHandler = () => {
    setCurrentFigure && setCurrentFigure(kinfOfFigure);
    if (setStartBotChoice) {
      setStartBotChoice(true);
      setTimeout(() => {
        setStartBotChoice(false);
        const bot = Object.keys(figure)[Math.floor(Math.random() * 3)];
        setBotChoice && setBotChoice(bot);
      }, 3000);
    }
  };
  return (
    <div
      className={cn('figure', className, {
        clickable: clickable,
        'figure_user-active': clickable && currentFigure === kinfOfFigure,
        'figure_bot-active': !clickable && botChoice === kinfOfFigure,
        figure_bot: !clickable,
        figure_animation: !clickable && startBotChoicie,
      })}
      onClick={clickHandler}
      style={{ pointerEvents: currentFigure || !clickable ? 'none' : 'auto' }}
    >
      <img src={figure[kinfOfFigure]} alt="" />
    </div>
  );
};

export default PlayFigure;
