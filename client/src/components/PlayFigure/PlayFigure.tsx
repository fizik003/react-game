import React, { useContext, useEffect, useState } from 'react';
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

  const [goCheck, setGoCheck] = useState(false);

  const { state, setState } = useContext(globalStateContext);

  const clickHandler = () => {
    if (state && setState) {
      const bot = Object.keys(figure)[Math.floor(Math.random() * 3)];
      setState(prevState => ({
        ...prevState,
        userFigure: kinfOfFigure,
        startBotChoice: true,
        botFigure: bot,
      }));

      setTimeout(() => {
        setState(prevState => ({
          ...prevState,
          startBotChoice: false,
        }));
        setGoCheck(true);
      }, 2000);
    }
  };
  useEffect(() => {
    if (goCheck) {
      checkWhoWin();
      setGoCheck(false);
    }
  }, [goCheck]);

  const checkWhoWin = () => {
    if (state && setState) {
      let [scoreUser, scoreBot] = state.score;
      let { botFigure, userFigure, whoWin } = state;
      if (botFigure === userFigure)
        return setState(prevValue => ({
          ...prevValue,
          whoWin: 'draw',
          showResult: true,
        }));
      const objCompare: { [key: string]: boolean } = {
        scissorsrock: false,
        scissorspaper: true,
        rockscissors: true,
        rockpaper: false,
        paperscissors: false,
        paperrock: true,
      };
      console.log(state.userFigure + state.botFigure);
      if (objCompare[userFigure + botFigure]) {
        scoreUser += 1;
        whoWin = 'user';
      } else {
        scoreBot += 1;
        whoWin = 'bot';
      }

      setState(prevState => ({
        ...prevState,
        score: [scoreUser, scoreBot],
        whoWin: whoWin,
        showResult: true,
      }));
    }
  };
  return (
    <div
      className={cn('figure', className, {
        clickable: clickable,
        'figure_user-active': clickable && state?.userFigure === kinfOfFigure,
        'figure_bot-active': !clickable && state?.botFigure === kinfOfFigure,
        figure_bot: !clickable,
        figure_animation: !clickable && state?.startBotChoice,
      })}
      onClick={clickHandler}
      style={{
        pointerEvents: state?.userFigure || !clickable ? 'none' : 'auto',
      }}
    >
      <img src={figure[kinfOfFigure]} alt="" />
    </div>
  );
};

export default PlayFigure;
