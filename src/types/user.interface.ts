import { Document } from 'mongoose';

export interface UserRequestInterface extends Document {
  login: string;
  password: string;
}
