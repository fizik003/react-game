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
  dateGame: number;
}

export interface StatUpdateRequestInterface {
  countWin?: number;
  countLose?: number;
  countDraw?: number;
}

export interface StatUpdateResponseInterface {
  countWin?: number;
  countLose?: number;
  countDraw?: number;
  _id: string;
  username: string;
}
