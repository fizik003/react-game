import { Schema, model, Types } from 'mongoose';

const userLastGamesSchema = new Schema({
  resultGame: String,
  dateGame: Date,
});

const userSchema = new Schema(
  {
    login: { type: String },
    password: { type: String },
    lastGames: [userLastGamesSchema],
    stat: { type: Types.ObjectId, ref: 'Stat' },
  },

  {
    versionKey: false,
    collection: 'User',
  },
);

export const User = model('User', userSchema);
