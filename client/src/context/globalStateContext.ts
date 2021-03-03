import { LastGameInterface } from './../interfaces/stat.interface';
import { Types } from 'mongoose';
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
  volume: number;
  userName: string;
  userStatId: string;
  loading: boolean;
  lastGame: LastGameInterface[];
  login: boolean;
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
