import { Schema, model, Types } from 'mongoose';

const userLastGamesSchema = new Schema({
  resultGame: String,
  dateGame: Date,
});

const statSchema = new Schema(
  {
    username: { type: String },
    countWin: { type: Number, default: 0 },
    countLose: { type: Number, default: 0 },
    countDraw: { type: Number, default: 0 },
  },

  {
    versionKey: false,
    collection: 'Stat',
  },
);

export const Stat = model('Stat', statSchema);
