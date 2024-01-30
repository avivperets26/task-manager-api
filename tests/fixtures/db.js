import { Types } from "mongoose";
import { sign } from "jsonwebtoken";
import User from "../../src/models/user";
import Task from "../../src/models/task";

export const userOneId = new Types.ObjectId();
export const userOne = {
  _id: userOneId,
  name: "avivp",
  email: "avivp@example.com",
  password: "12345!!",
  tokens: [
    {
      token: sign({ _id: userOneId }, process.env.JWT_SECRET),
    },
  ],
};

export const userTwoId = new Types.ObjectId();
export const userTwo = {
  _id: userTwoId,
  name: "Indhi",
  email: "indhi@example.com",
  password: "12345!!",
  tokens: [
    {
      token: sign({ _id: userTwoId }, process.env.JWT_SECRET),
    },
  ],
};

const taskOne = {
  _id: new Types.ObjectId(),
  description: "First task",
  completed: false,
  owner: userOne._id,
};

const taskTwo = {
  _id: new Types.ObjectId(),
  description: "Second task",
  completed: true,
  owner: userOne._id,
};

const taskThree = {
  _id: new Types.ObjectId(),
  description: "Third task",
  completed: true,
  owner: userTwo._id,
};

export const setupDatabase = async () => {
  await User.deleteMany();
  await Task.deleteMany();

  await new User(userOne).save();
  await new User(userTwo).save();

  await new Task(taskOne).save();
  await new Task(taskTwo).save();
  await new Task(taskThree).save();
};
