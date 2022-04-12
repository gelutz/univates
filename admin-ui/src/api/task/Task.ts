import { FolderTask } from "../folderTask/FolderTask";
import { Group } from "../group/Group";

export type Task = {
  createdAt: Date;
  description: string | null;
  folder_Id?: FolderTask | null;
  groupId?: Group;
  id: string;
  title: string | null;
  updatedAt: Date;
};
