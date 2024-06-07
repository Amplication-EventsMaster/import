import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UserRoleProgramCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Program" source="program" />
        <NumberInput step={1} label="Ur Id" source="urId" />
      </SimpleForm>
    </Create>
  );
};
