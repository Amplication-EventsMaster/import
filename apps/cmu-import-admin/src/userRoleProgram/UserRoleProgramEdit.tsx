import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UserRoleProgramEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Program" source="program" />
        <NumberInput step={1} label="Ur Id" source="urId" />
      </SimpleForm>
    </Edit>
  );
};
