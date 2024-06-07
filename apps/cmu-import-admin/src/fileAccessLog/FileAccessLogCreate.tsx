import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const FileAccessLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Faculty Id" source="facultyId" />
        <NumberInput step={1} label="Sf Id" source="sfId" />
        <DateTimeInput label="Time" source="time" />
      </SimpleForm>
    </Create>
  );
};
