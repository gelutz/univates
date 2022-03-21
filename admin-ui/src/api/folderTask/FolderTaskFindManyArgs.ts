import { FolderTaskWhereInput } from "./FolderTaskWhereInput";
import { FolderTaskOrderByInput } from "./FolderTaskOrderByInput";

export type FolderTaskFindManyArgs = {
  where?: FolderTaskWhereInput;
  orderBy?: Array<FolderTaskOrderByInput>;
  skip?: number;
  take?: number;
};
