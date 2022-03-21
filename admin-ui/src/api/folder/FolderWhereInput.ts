import { FolderTaskWhereUniqueInput } from "../folderTask/FolderTaskWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FolderWhereInput = {
  folderTasks?: FolderTaskWhereUniqueInput;
  id?: StringFilter;
  name?: StringFilter;
};
