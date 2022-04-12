import { StringFilter } from "../../util/StringFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type GroupWhereInput = {
  id?: StringFilter;
  tasks?: TaskListRelationFilter;
};
