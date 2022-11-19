import { Rover } from '../models/Rover';

type RoverInput = {
  instructions: string;
  position: object;
  finalPosition: object;
  direction: string;
};

export const createRover = async (data: RoverInput) => {
  const rover = await Rover.create(data);

  return rover;
};
