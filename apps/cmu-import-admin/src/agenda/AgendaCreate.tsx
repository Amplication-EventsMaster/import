import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AgendaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Long Description" source="longDescription" />
        <TextInput label="Short Description" source="shortDescription" />
      </SimpleForm>
    </Create>
  );
};
