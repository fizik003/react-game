import { UserRequestInterface } from './../../types/user.interface';
import { User } from './user.model';

const create = async (userData: UserRequestInterface) => {
  return User.create(userData);
};

const getById = async (id: number) => User.findById(id);

const getByLoginPass = async ({ login, password }: UserRequestInterface) => {
  return User.findOne({ login, password });
};

export default { create, getById, getByLoginPass };
