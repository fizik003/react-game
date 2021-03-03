import { StatusCodes } from 'http-status-codes';
import { Router, Request, Response } from 'express';
import { Document } from 'mongoose';

import {
  StatUpdateRequestInterface,
  StatRequestInterface,
  StatInterface,
} from './../../types/stat.interface';

import statService from './stat.service';

export const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const allStat = await statService.get();
    if (!allStat)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'stat not found' });
    res.status(StatusCodes.OK).json(allStat);
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'problem on server' });
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const idStatRow: number = Number(req.params.id);
    const updatedData: StatUpdateRequestInterface = req.body;
    const updatedUserStat = await statService.update(idStatRow, updatedData);
    if (!updatedUserStat)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: 'not update' });
    res.status(StatusCodes.OK).json(updatedUserStat);
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'problem on server' });
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const statData: StatRequestInterface = req.body;
    console.log(req.body);
    const newStat: Document<StatInterface> = await statService.create(statData);
    res.status(StatusCodes.OK).json(newStat);
  } catch (err) {
    console.log(err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: 'problem on server' });
  }
});
