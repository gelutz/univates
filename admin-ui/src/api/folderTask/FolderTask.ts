import { Folder } from "../folder/Folder";
import { Task } from "../task/Task";

export type FolderTask = {
  createdAt: Date;
  folder_Id?: Array<Folder>;
  id: string;
  taskId?: Array<Task>;
  updatedAt: Date;
};
