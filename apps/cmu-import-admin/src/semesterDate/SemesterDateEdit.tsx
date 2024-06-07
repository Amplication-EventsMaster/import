import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const SemesterDateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <NumberInput step={1} label="Disabled" source="disabled" />
        <NumberInput step={1} label="Semref Id" source="semrefId" />
        <NumberInput step={1} label="Start Day" source="startDay" />
        <NumberInput step={1} label="Start Month" source="startMonth" />
      </SimpleForm>
    </Edit>
  );
};
