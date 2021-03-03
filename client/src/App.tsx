import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import { globalStateContext, State } from './context/globalStateContext';
import { routes } from './components/routes';

import 'normalize.css';
import './App.scss';

import fonSound from './audio/fon.mp3';
import { Auth } from './components';

function App(): JSX.Element {
  const [state, setState] = useState<State>({
    userFigure: '',
    botFigure: '',
    startBotChoice: false,
    score: [0, 0],
    whoWin: '',
    showResult: false,
    volume: 0.5,
    userName: '',
    userStatId: '',
    loading: false,
    lastGame: null,
    login: false,
  });
  const [playBackgroundSound, { isPlaying }] = useSound(fonSound, {
    volume: state.volume - 0.3,
    interrupt: true,
  });

  useEffect(() => {
    if (!isPlaying && state.userName) {
      playBackgroundSound();
    }
  });
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
