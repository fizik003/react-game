import React, { useContext } from 'react';
import cn from 'classnames';

import './Game.scss';
import { Card } from '../';
import PlayFigure from '../PlayFigure';
import { globalStateContext } from '../../context/globalStateContext';
import Button from '../Button';
import { set } from 'mongoose';

interface GameInterface {
  className?: string;
}

const Game = ({ className }: GameInterface): JSX.Element => {
  const { setState, state } = useContext(globalStateContext);

  const againBtnClickHandler = () => {
    if (setState) {
      setState(prevState => ({ ...prevState, botFigure: '', userFigure: '' }));
    }
  };

  const restartBtnClickHandler = () => {
    if (setState) {
      setState(prevState => ({ ...prevState, score: [0, 0] }));
    }
  };

  return (
    <div className={cn('game', className)}>
      <Card className="game__card ">
        <div className="card__wrapper">
          <div className="card__scoreboard">
            <span className="card__scoreboard-text">{state?.score[0]}</span>:
            <span className="card__scoreboard-text">{state?.score[1]}</span>
          </div>
          <div className="card__game-place">
            <div className="card__place-user">
              <div className="card__name">
                <span>yuru</span>
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
                <span>Vasiliy</span>
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
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Game;
