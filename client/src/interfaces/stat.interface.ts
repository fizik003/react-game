export interface CreateStatRequestInterface {
  username: string;
}

export interface CreateStatResponseInterface {
  _id: string;
  username: string;
  countWin: number;
  countLose: number;
  countDraw: number;
}

export interface LastGameInterface {
  resultGame: string;
  dateGame: Date;
}
