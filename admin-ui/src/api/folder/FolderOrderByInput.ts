import { SortOrder } from "../../util/SortOrder";

export type FolderOrderByInput = {
  createdAt?: SortOrder;
  folderTasksId?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
