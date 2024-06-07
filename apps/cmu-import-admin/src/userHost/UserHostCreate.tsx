import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const UserHostCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Host" source="host" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Create>
  );
};
