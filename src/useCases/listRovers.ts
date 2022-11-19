import { Rover } from '../models/Rover';

export const listRovers = async () => {
  const rovers = await Rover.find({});

  return rovers;
};
