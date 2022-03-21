import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FOLDERTASK_TITLE_FIELD } from "../folderTask/FolderTaskTitle";
import { GROUP_TITLE_FIELD } from "./GroupTitle";

export const GroupShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Task" target="GroupId" label="Tasks">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <ReferenceField
              label="Folder ID"
              source="foldertask.id"
              reference="FolderTask"
            >
              <TextField source={FOLDERTASK_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Group ID"
              source="group.id"
              reference="Group"
            >
              <TextField source={GROUP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
