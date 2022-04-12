import { FolderUpdateManyWithoutFolderTasksInput } from "./FolderUpdateManyWithoutFolderTasksInput";
import { TaskUpdateManyWithoutFolderTasksInput } from "./TaskUpdateManyWithoutFolderTasksInput";

export type FolderTaskUpdateInput = {
  folder_Id?: FolderUpdateManyWithoutFolderTasksInput;
  taskId?: TaskUpdateManyWithoutFolderTasksInput;
};
