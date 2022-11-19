import { afterAll, beforeAll, describe, expect, test } from '@jest/globals';
import mongoose from 'mongoose';
import { Rover } from '../../src/models/Rover';
import { createRover } from '../../src/useCases/createRover';
import { listRovers } from '../../src/useCases/listRovers';

describe('Rovers', () => {
  beforeAll(async () => {
    const url = process.env.MONGO_URL ?? '';

    console.log(url);
    await mongoose.connect(url);
  });

  afterAll(async () => {
    await Rover.deleteMany();

    await mongoose.connection.close();
  });

  test('get all rovers', async () => {
    const result = await listRovers();

    expect(result).toBeInstanceOf(Array);
  });

  test('create rover', async () => {
    const result = await createRover({
      finalPosition: {
        x: 1,
        y: 3,
        direction: 'N',
      },
      direction: 'N',
      position: {
        x: 1,
        y: 2,
      },
      instructions: 'LMLMLMLMM',
    });

    expect(result).toHaveProperty('_id');
  });
});
