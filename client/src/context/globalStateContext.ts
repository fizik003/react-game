import React, { Dispatch, SetStateAction } from 'react';

interface GlobalStateContextInterface {
  currentFigure: string;
  setCurrentFigure: Dispatch<SetStateAction<string>>;
  startBotChoicie: boolean;
  setStartBotChoice: Dispatch<SetStateAction<boolean>>;
}

// const globalStateContext = React.createContext(
//   {} as Partial<GlobalStateContextInterface>,
// );

const globalStateContext = React.createContext(
  <Partial<GlobalStateContextInterface>>{},
);

export { globalStateContext };
