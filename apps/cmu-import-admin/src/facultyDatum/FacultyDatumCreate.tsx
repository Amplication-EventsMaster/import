import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FacultyDatumCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
