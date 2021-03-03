import React, { useContext } from 'react';
import cn from 'classnames';
import { pulse } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import useSound from 'use-sound';

import './GameResult.scss';

import { globalStateContext } from '../../context/globalStateContext';

interface GameResultInterface {
  classNames?: string;
  imgSrc?: string | undefined;
}

const GameResult = ({ classNames, imgSrc }: GameResultInterface) => {
  const { setState, state } = useContext(globalStateContext);
  const showRes = state?.showResult ? true : false;
  if (setState && state && state.showResult) {
    setTimeout(
      () => setState(prevValue => ({ ...prevValue, showResult: false })),
      2500,
    );
  }

  const Pulse = styled.div`animation 1s ${keyframes`${pulse}`} infinite`;

  return (
    <div
      className={cn('game-result', classNames, { 'game-result_show': showRes })}
    >
      <Pulse className="game-result__animation">
        <img src={imgSrc} alt="" />
      </Pulse>
    </div>
  );
};

export default GameResult;
