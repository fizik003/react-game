import React, { useContext, useState } from 'react';
import cn from 'classnames';

import './Game.scss';
import { Card, GameResult, Button, PlayFigure } from '../';
import { globalStateContext } from '../../context/globalStateContext';

import win from '../../img/win.png';
import lose from '../../img/lose.png';
import draw from '../../img/draw.png';
import { clearLocalStorage } from '../../services/localStorage.service';

const img: { [ket: string]: string } = {
  user: win,
  bot: lose,
  draw: draw,
};

interface GameInterface {
  className?: string;
}

const Game = ({ className }: GameInterface): JSX.Element => {
  const { setState, state } = useContext(globalStateContext);
  let imgSrc: string;

  if (state && setState) {
    imgSrc = img[state?.whoWin];
  }

  const againBtnClickHandler = () => {
    if (setState) {
      setState(prevState => ({ ...prevState, botFigure: '', userFigure: '' }));
    }
  };

  const restartBtnClickHandler = () => {
    if (setState) {
      setState(prevState => ({
        ...prevState,
        score: [0, 0, 0],
        userFigure: '',
        botFigure: '',
      }));
    }
  };

  const newGameClickHandler = () => {
    if (setState) {
      setState(prevState => ({
        ...prevState,
        lastGame: [],
        score: [0, 0, 0],
        userName: '',
        userStatId: '',
      }));
      clearLocalStorage();
    }
  };

  return (
    <div className={cn('game', className)}>
      <Card className="game__card ">
        <GameResult
          classNames="game__result"
          imgSrc={img[state ? state.whoWin : '1']}
        />

        <div className="card__wrapper">
          <div className="card__scoreboard">
            <span className="card__scoreboard-text">{state?.score[0]}</span>:
            <span className="card__scoreboard-text">{state?.score[1]}</span>
          </div>
          <div className="card__game-place">
            <div className="card__place-user">
              <div className="card__name">
                <span>{state?.userName}</span>
              </div>
              <div className="card__figures">
                <PlayFigure
                  clickable
                  className="card__figures-item card__figures-item_red "
                  kinfOfFigure="paper"
                />
                <PlayFigure
                  clickable
                  className="card__figures-item"
                  kinfOfFigure="rock"
                />
                <PlayFigure
                  clickable
                  className="card__figures-item"
                  kinfOfFigure="scissors"
                />
              </div>
            </div>
            <div className="card__place-bot">
              <div className="card__name">
                <span>Computer</span>
              </div>
              <div className="card__figures">
                <PlayFigure
                  className="card__figures-item card__figures-itemS "
                  kinfOfFigure="paper"
                />
                <PlayFigure
                  className="card__figures-item"
                  kinfOfFigure="rock"
                />
                <PlayFigure
                  className="card__figures-item"
                  kinfOfFigure="scissors"
                />
              </div>
            </div>
          </div>
          <div className="card__btns">
            <Button
              classNames="card__btns-again"
              onClick={againBtnClickHandler}
              type="btn-warning"
              disabled={state?.startBotChoice}
            >
              Again
            </Button>
            <Button
              classNames="card__btns-restart"
              type="btn-warning"
              onClick={restartBtnClickHandler}
              disabled={state?.startBotChoice}
            >
              Restart
            </Button>
            <Button
              classNames="card__btns-negame w-100 mt-2"
              type="btn-warning"
              onClick={newGameClickHandler}
              disabled={state?.startBotChoice}
            >
              New game
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Game;
