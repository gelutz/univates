import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { FolderTaskTitle } from "../folderTask/FolderTaskTitle";

export const FolderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
