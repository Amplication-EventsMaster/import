import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FacultyDatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Institutes Id" source="institutesId" />
        <TextInput label="Institutes Name" source="institutesName" />
        <TextInput label="Institution" source="institution" />
        <TextInput label="Institution Abbr" source="institutionAbbr" />
        <TextInput label="Status" source="status" />
        <TextInput label="Title" source="title" />
        <NumberInput step={1} label="Ur Id" source="urId" />
      </SimpleForm>
    </Edit>
  );
};
