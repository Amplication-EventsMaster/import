import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SemesterDateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <NumberInput step={1} label="Disabled" source="disabled" />
        <NumberInput step={1} label="Semref Id" source="semrefId" />
        <NumberInput step={1} label="Start Day" source="startDay" />
        <NumberInput step={1} label="Start Month" source="startMonth" />
      </SimpleForm>
    </Create>
  );
};
