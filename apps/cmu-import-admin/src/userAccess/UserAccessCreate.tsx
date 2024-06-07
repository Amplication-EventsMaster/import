import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  NumberInput,
} from "react-admin";

export const UserAccessCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Access" source="access" />
        <NumberInput step={1} label="User Id" source="userId" />
      </SimpleForm>
    </Create>
  );
};
