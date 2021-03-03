import React, { useContext, useEffect, useState } from 'react';
import useSound from 'use-sound';
import cn from 'classnames';

import paper from '../../img/paper.png';
import rock from '../../img/rock.png';

import scissors from '../../img/scissors.png';
import selectSound from '../../audio/select.mp3';
import hoverSound from '../../audio/hover_select.mp3';
import resultSound from '../../audio/result.mp3';
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

  const { state, setState } = useContext(globalStateContext);

  const [playSelect] = useSound(selectSound, { volume: state?.volume });
  const [hoverSelect] = useSound(hoverSound, { volume: state?.volume });
  const [playResultSound] = useSound(resultSound, { volume: state?.volume });

  const [goCheck, setGoCheck] = useState(false);

  const clickHandler = () => {
    if (state && setState) {
      playSelect();
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

      if (botFigure === userFigure) {
        playResultSound();
        return setState(prevValue => ({
          ...prevValue,
          whoWin: 'draw',
          showResult: true,
          lastGame: [
            { dateGame: Date.now(), resultGame: 'draw' },
            ...state.lastGame,
          ],
        }));
      }
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
        lastGame: [
          {
            dateGame: Date.now(),
            resultGame: whoWin === 'user' ? 'win' : 'lose',
          },
          ...state.lastGame,
        ],
      }));
      playResultSound();
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
      onMouseEnter={() => hoverSelect()}
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
