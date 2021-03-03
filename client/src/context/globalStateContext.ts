import React, { Dispatch, SetStateAction } from 'react';

// interface GlobalStateContextInterface {
//   currentFigure: string;
//   setCurrentFigure: Dispatch<SetStateAction<string>>;
//   startBotChoicie: boolean;
//   setStartBotChoice: Dispatch<SetStateAction<boolean>>;
//   botChoice: string;
//   setBotChoice: Dispatch<SetStateAction<string>>;
// }

export interface State {
  userFigure: string;

  botFigure: string;
  startBotChoice: boolean;
  score: number[];
  whoWin: string;
  showResult: boolean;
}

interface StateContextInterface {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
}

// const globalStateContext = React.createContext(
//   {} as Partial<GlobalStateContextInterface>,
// );

const globalStateContext = React.createContext(
  <Partial<StateContextInterface>>{},
);

export { globalStateContext };
