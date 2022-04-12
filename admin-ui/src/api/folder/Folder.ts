import { FolderTask } from "../folderTask/FolderTask";

export type Folder = {
  createdAt: Date;
  folderTasks?: FolderTask | null;
  id: string;
  name: string;
  updatedAt: Date;
};
