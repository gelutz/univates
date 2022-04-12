import { FolderListRelationFilter } from "../folder/FolderListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type FolderTaskWhereInput = {
  folder_Id?: FolderListRelationFilter;
  id?: StringFilter;
  taskId?: TaskListRelationFilter;
};
