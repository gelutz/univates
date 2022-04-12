import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FolderTaskTitle } from "../folderTask/FolderTaskTitle";

export const FolderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="foldertask.id"
          reference="FolderTask"
          label="FolderTasks"
        >
          <SelectInput optionText={FolderTaskTitle} />
        </ReferenceInput>
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
