import { CreateStatResponseInterface } from './../interfaces/stat.interface';
import { StatUpdateRequestInterface } from '../interfaces/stat.interface';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const method: { [key: string]: string } = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
};

const fechData = async (url: string, met: string, body?: unknown) => {
  return await fetch(url, {
    headers,
    method: method[met],
    body: JSON.stringify(body),
  });
};

export const creatStat = async <CreateStatResponseInterface>(
  username: string,
): Promise<CreateStatResponseInterface> => {
  const data = { username: username };
  const newStat = await fechData('/api/stat', 'POST', data);

  return newStat.json();
};

export const getStat = async <CreateStatResponseInterface>(): Promise<
  CreateStatResponseInterface[]
> => {
  const arrStat = await fechData('/api/stat', 'GET');
  return arrStat.json();
};

export const updateUserStat = async (
  idStat: string,
  dataStat: StatUpdateRequestInterface,
) => {
  const updateStat = await fechData(`/api/stat/${idStat}`, 'PUT', dataStat);
  return updateStat.json();
};
