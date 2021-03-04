import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import { globalStateContext, State } from './context/globalStateContext';
import { routes } from './components/routes';
import {
  getDataUser,
  saveDataUser,
  checkLocalStorage,
} from './services/localStorage.service';

import 'normalize.css';
import './App.scss';

import fonSound from './audio/fon.mp3';
import userEvent from '@testing-library/user-event';

function App(): JSX.Element {
  const [state, setState] = useState<State>({
    userFigure: '',
    botFigure: '',
    startBotChoice: false,
    score: [0, 0, 0],
    whoWin: '',
    showResult: false,
    volume: 0.5,
    userName: '',
    userStatId: '',
    loading: false,
    lastGame: [],
    login: false,
    backGroundMusic: true,
    otherSounds: true,
  });
  const [playBackgroundSound, { isPlaying, stop }] = useSound(fonSound, {
    volume: state.volume,
    interrupt: true,
  });

  useEffect(() => {
    if (!isPlaying && state.userName && state.backGroundMusic) {
      playBackgroundSound();
    }
    if (!state.userName || !state.backGroundMusic) {
      stop();
    }
  });

  useEffect(() => {
    if (state.userName) {
      const {
        userName,
        score,
        userStatId,
        lastGame,
        backGroundMusic,
        otherSounds,
      } = state;
      saveDataUser({
        lastGame,
        score,
        userName,
        userStatId,
        backGroundMusic,
        otherSounds,
      });
    }
  }, [state]);

  useEffect(() => {
    if (checkLocalStorage()) {
      const userData = getDataUser();
      setState(prevState => ({ ...prevState, ...userData }));
    }
  }, []);
  return (
    <globalStateContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {routes(!!state.userName)}
    </globalStateContext.Provider>
  );
}

export default App;
