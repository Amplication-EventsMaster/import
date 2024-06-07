import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ApplywebStudentMigrationDatumCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="App Id" source="appId" />
        <TextInput label="Applyweb Db" source="applywebDb" />
        <NumberInput
          step={1}
          label="Applyweb Db User Id"
          source="applywebDbUserId"
        />
        <TextInput
          label="Applyweb Db User Table"
          source="applywebDbUserTable"
        />
      </SimpleForm>
    </Create>
  );
};
