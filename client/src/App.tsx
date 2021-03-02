import React, { useState } from 'react';

import { MainPage } from './pages';
import { globalStateContext } from './context/globalStateContext';

import './App.scss';
import 'normalize.css';

function App(): JSX.Element {
  const [currentFigure, setCurrentFigure] = useState('');
  const [startBotChoicie, setStartBotChoice] = useState(false);
  return (
    <globalStateContext.Provider
      value={{
        currentFigure: currentFigure,
        setCurrentFigure: setCurrentFigure,
        startBotChoicie,
        setStartBotChoice,
      }}
    >
      <div>
        <MainPage />
      </div>
    </globalStateContext.Provider>
  );
}

export default App;
