import { TaskCreateNestedManyWithoutGroupsInput } from "./TaskCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  tasks?: TaskCreateNestedManyWithoutGroupsInput;
};
