import {
  StatRequestInterface,
  StatUpdateRequestInterface,
} from './../../types/stat.interface';
import statRepo from './stat.DB.repository';

const create = async (statData: StatRequestInterface) =>
  statRepo.create(statData);

const update = async (
  idStatRow: number,
  updatedData: StatUpdateRequestInterface,
) => statRepo.update(idStatRow, updatedData);

const get = async () => statRepo.get();

export default { create, update, get };
