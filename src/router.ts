import { Router } from 'express';
import { Rover } from './models/Rover';

export const router = Router();

router.post('/rover', async (req, res) => {
  const { body } = req;

  const rover = await Rover.create(body);

  return res.status(200).json(rover);
});

router.get('/rover', async (req, res) => {
  const rovers = await Rover.find({});

  return res.status(200).json(rovers);
});
