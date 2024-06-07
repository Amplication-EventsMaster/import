import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const PsyProjectReqCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Complete" source="complete" />
        <DateTimeInput label="Date" source="date" />
        <BooleanInput label="Pending" source="pending" />
        <NumberInput step={1} label="Student Id" source="studentId" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
