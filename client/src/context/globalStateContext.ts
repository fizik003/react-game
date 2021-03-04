import { LastGameInterface } from './../interfaces/stat.interface';
import React, { Dispatch, SetStateAction } from 'react';

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
  backGroundMusic: boolean;
  otherSounds: boolean;
}

interface StateContextInterface {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
}

const globalStateContext = React.createContext(
  <Partial<StateContextInterface>>{},
);

export { globalStateContext };
