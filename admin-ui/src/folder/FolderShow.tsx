import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { FOLDERTASK_TITLE_FIELD } from "../folderTask/FolderTaskTitle";

export const FolderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="FolderTasks"
          source="foldertask.id"
          reference="FolderTask"
        >
          <TextField source={FOLDERTASK_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
