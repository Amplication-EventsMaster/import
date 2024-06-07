import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const AdvisorsCopyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Faculty Id" source="facultyId" />
        <NumberInput step={1} label="Student Id" source="studentId" />
      </SimpleForm>
    </Create>
  );
};
