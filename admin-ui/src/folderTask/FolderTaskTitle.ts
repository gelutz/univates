import { FolderTask as TFolderTask } from "../api/folderTask/FolderTask";

export const FOLDERTASK_TITLE_FIELD = "id";

export const FolderTaskTitle = (record: TFolderTask): string => {
  return record.id || record.id;
};
