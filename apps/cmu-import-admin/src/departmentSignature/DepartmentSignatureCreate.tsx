import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DepartmentSignatureCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Sigblock" source="sigblock" />
      </SimpleForm>
    </Create>
  );
};
