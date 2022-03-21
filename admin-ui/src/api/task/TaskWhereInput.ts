import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FolderTaskWhereUniqueInput } from "../folderTask/FolderTaskWhereUniqueInput";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type TaskWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  folder_Id?: FolderTaskWhereUniqueInput;
  groupId?: GroupWhereUniqueInput;
  id?: StringFilter;
  title?: StringNullableFilter;
};
