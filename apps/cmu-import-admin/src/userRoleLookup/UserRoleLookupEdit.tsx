import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const UserRoleLookupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Role" source="role" />
        <NumberInput step={1} label="Role Id" source="roleId" />
      </SimpleForm>
    </Edit>
  );
};
