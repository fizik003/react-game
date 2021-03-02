import React, { useContext, useState } from 'react';
import cn from 'classnames';

import './Game.scss';
import { Card } from '../';
import PlayFigure from '../PlayFigure';
import { globalStateContext } from '../../context/globalStateContext';
import Button from '../Button';

interface GameInterface {
  className?: string;
}

const animationChoice = () => {};

const Game = ({ className }: GameInterface): JSX.Element => {
  const { currentFigure } = useContext(globalStateContext);
  if (currentFigure) {
    animationChoice();
  }

  const { setBotChoice, setCurrentFigure } = useContext(globalStateContext);

  const againBtnClickHandler = () => {
    if (setBotChoice && setCurrentFigure) {
      setBotChoice('');
      setCurrentFigure('');
    }
  };

  return (
    <div className={cn('game', className)}>
      <Card className="game__card ">
        <div className="card__wrapper">
          <div className="card__scoreboard">
            <span className="card__scoreboard-text">1</span>:
            <span className="card__scoreboard-text">2</span>
          </div>
          <div className="card__game-place">
            <div className="card__place-user">
              <div className="card__user-name">
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
              <div className="card__bot-name">
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
            >
              Again
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Game;
