import { UserRequestInterface } from './../../types/user.interface';
import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import userService from './user.service';

export const router = Router();

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const userId = Number(req.params.id);
    const user = await userService.getById(userId);
    if (!user)
      res.status(StatusCodes.NOT_FOUND).send({ message: 'user not found' });
    res.status(StatusCodes.OK).send(user);
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'problem on server' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const userData: UserRequestInterface = req.body;
    const condidate = await userService.getByLoginPass(userData);
    if (condidate) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'такой пользователь уже есть' });
    }
    const user = await userService.create(userData);
    res.status(StatusCodes.OK).json(user);
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'problem on server' });
  }
});
