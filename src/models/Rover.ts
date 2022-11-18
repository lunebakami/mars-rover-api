import { model, Schema } from 'mongoose';

export const Rover = model(
  'Rover',
  new Schema({
    position: {
      type: Object,
      required: true,
    },
    finalPosition: {
      type: Object,
      required: true,
    },
    direction: {
      type: String,
      required: true,
    },
    instructions: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);
