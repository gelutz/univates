import { FolderTaskWhereUniqueInput } from "../folderTask/FolderTaskWhereUniqueInput";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  folder_Id?: FolderTaskWhereUniqueInput | null;
  groupId: GroupWhereUniqueInput;
  title?: string | null;
};
