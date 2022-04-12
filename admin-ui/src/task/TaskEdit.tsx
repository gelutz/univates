import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { FolderTaskTitle } from "../folderTask/FolderTaskTitle";
import { GroupTitle } from "../group/GroupTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
