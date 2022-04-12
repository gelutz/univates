import { FolderTaskWhereUniqueInput } from "../folderTask/FolderTaskWhereUniqueInput";

export type FolderUpdateInput = {
  folderTasks?: FolderTaskWhereUniqueInput | null;
  name?: string;
};
