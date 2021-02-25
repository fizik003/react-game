import {
  StatRequestInterface,
  StatUpdateRequestInterface,
} from './../../types/stat.interface';
import { Stat } from './stat.model';

const create = async (statData: StatRequestInterface) => {
  return Stat.create(statData);
};

const update = async (
  idStatRow: number,
  updatedData: StatUpdateRequestInterface,
) => {
  delete updatedData.id;
  return Stat.findByIdAndUpdate(idStatRow, updatedData);
};

const get = async () => {
  return Stat.find({});
};

export default { create, update, get };
