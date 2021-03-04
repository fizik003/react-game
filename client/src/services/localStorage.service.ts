import { LastGameInterface } from './../interfaces/stat.interface';

interface SaveDataInterface {
  userName?: string;
  score?: number[];
  userStatId?: string;
  lastGame?: LastGameInterface[];
  backGroundMusic?: boolean;
  otherSounds: boolean;
}

export const saveDataUser = (obj: SaveDataInterface) => {
  localStorage.setItem('user', JSON.stringify(obj));
};

export const getDataUser = (): SaveDataInterface | undefined => {
  const userData = localStorage.getItem('user');
  if (userData) return JSON.parse(userData);
  return undefined;
};

export const checkLocalStorage = () => {
  return !!localStorage.getItem('user');
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
