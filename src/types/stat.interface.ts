import { Document, Types } from 'mongoose';

export interface StatRequestInterface extends Document {
  userName: string;
}

export interface StatUpdateRequestInterface extends Document {
  countWin?: number;
  countLose?: number;
  countDraw?: number;
}

export interface StatInterface extends Document {
  username: string;
  countWin: number;
  countLose: number;
  countDraw: number;
  _id: Types.ObjectId;
}
