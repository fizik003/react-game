import { UserRequestInterface } from './../../types/user.interface';
import userRepo from './user.DB.repository';

const create = async (userData: UserRequestInterface) =>
  userRepo.create(userData);

const getById = async (id: number) => userRepo.getById(id);

const getByLoginPass = async (userData: UserRequestInterface) =>
  userRepo.getByLoginPass(userData);

export default { create, getById, getByLoginPass };
