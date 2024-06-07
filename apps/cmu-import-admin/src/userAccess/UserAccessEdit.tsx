import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const UserAccessEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Access" source="access" />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Edit>
  );
};
