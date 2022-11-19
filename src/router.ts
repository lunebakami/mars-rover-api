import { Router } from 'express';
import { createRover } from './useCases/createRover';
import { listRovers } from './useCases/listRovers';

export const router = Router();

router.post('/rover', async (req, res) => {
  try {
    const rover = createRover(req.body);

    return res.status(200).json(rover);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.get('/rover', async (req, res) => {
  try {
    const rovers = await listRovers();

    return res.status(200).json(rovers);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
