import React, { useState } from 'react';

import { MainPage } from './pages';
import { globalStateContext } from './context/globalStateContext';

import './App.scss';
import 'normalize.css';

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
