import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';

import { MainPage } from './pages';
import { globalStateContext } from './context/globalStateContext';

import 'normalize.css';
import './App.scss';

import fonSound from './audio/fon.mp3';

function App(): JSX.Element {
  // const [currentFigure, setCurrentFigure] = useState('');
  // const [startBotChoicie, setStartBotChoice] = useState(false);
  // const [botChoice, setBotChoice] = useState('');
  // const [score, setScore] = useState([0, 0]);

  const [state, setState] = useState({
    userFigure: '',
    botFigure: '',
    startBotChoice: false,
    score: [0, 0],
    whoWin: '',
    showResult: false,
    volume: 0.5,
  });
  const [playBackgroundSound, { isPlaying }] = useSound(fonSound, {
    volume: state.volume - 0.3,
    interrupt: true,
  });

  useEffect(() => {
    if (!isPlaying) {
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
      <div>
        <MainPage />
      </div>
    </globalStateContext.Provider>
  );
}

export default App;
