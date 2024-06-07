import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const UserHostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Host" source="host" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
