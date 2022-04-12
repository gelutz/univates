import { FolderTaskWhereUniqueInput } from "../folderTask/FolderTaskWhereUniqueInput";

export type FolderCreateInput = {
  folderTasks?: FolderTaskWhereUniqueInput | null;
  name: string;
};
