import { FolderCreateNestedManyWithoutFolderTasksInput } from "./FolderCreateNestedManyWithoutFolderTasksInput";
import { TaskCreateNestedManyWithoutFolderTasksInput } from "./TaskCreateNestedManyWithoutFolderTasksInput";

export type FolderTaskCreateInput = {
  folder_Id?: FolderCreateNestedManyWithoutFolderTasksInput;
  taskId?: TaskCreateNestedManyWithoutFolderTasksInput;
};
