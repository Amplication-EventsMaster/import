import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ApplywebStudentMigrationDatumEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
