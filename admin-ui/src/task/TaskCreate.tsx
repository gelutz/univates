import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FolderTaskTitle } from "../folderTask/FolderTaskTitle";
import { GroupTitle } from "../group/GroupTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="foldertask.id"
          reference="FolderTask"
          label="Folder ID"
        >
          <SelectInput optionText={FolderTaskTitle} />
        </ReferenceInput>
        <ReferenceInput source="group.id" reference="Group" label="Group ID">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
