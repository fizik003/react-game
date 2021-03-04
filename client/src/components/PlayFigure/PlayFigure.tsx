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
import { updateUserStat } from '../../services/fetchData.services';
import { StatInterface } from '../../../../src/types/stat.interface';
import { StatUpdateRequestInterface } from '../../interfaces/stat.interface';

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

  const [playSelect, { stop: stopSelect }] = useSound(selectSound, {
    volume: state?.volume,
  });
  const [hoverSelect, { stop: stopHoverSelect }] = useSound(hoverSound, {
    volume: state?.volume,
  });
  const [playResultSound, { stop: stopPlayResultSound }] = useSound(
    resultSound,
    { volume: state?.volume },
  );

  const [goCheck, setGoCheck] = useState(false);

  const clickHandler = () => {
    if (state && setState) {
      state.otherSounds && playSelect();
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

  const sendStatToServer = async (
    countWin: number,
    countLose: number,
    countDraw: number,
  ) => {
    if (state) {
      const { score, userStatId } = state;
      const date: StatUpdateRequestInterface = {
        countWin: countWin,
        countLose: countLose,
        countDraw: countDraw,
      };
      const updatedStat = await updateUserStat(userStatId, date);
    }
  };

  const checkWhoWin = () => {
    if (state && setState) {
      let [scoreUser, scoreBot, scoreDraw] = state.score;
      let { botFigure, userFigure, whoWin } = state;

      if (botFigure === userFigure) {
        if (state.otherSounds) {
          playResultSound();
        }
        sendStatToServer(scoreUser, scoreBot, scoreDraw + 1);
        return setState(prevValue => ({
          ...prevValue,
          whoWin: 'draw',
          showResult: true,
          score: [scoreUser, scoreBot, scoreDraw + 1],
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
      if (objCompare[userFigure + botFigure]) {
        scoreUser += 1;
        whoWin = 'user';
      } else {
        scoreBot += 1;
        whoWin = 'bot';
      }

      setState(prevState => ({
        ...prevState,
        score: [scoreUser, scoreBot, scoreDraw],
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

      sendStatToServer(scoreUser, scoreBot, scoreDraw);
      if (state.otherSounds) {
        playResultSound();
      }
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
      onMouseEnter={() => state?.otherSounds && hoverSelect()}
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
