import { Task } from "../task/Task";

export type Group = {
  createdAt: Date;
  id: string;
  tasks?: Array<Task>;
  updatedAt: Date;
};
