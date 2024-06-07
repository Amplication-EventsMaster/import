import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  DateTimeInput,
  NumberInput,
  TextInput,
} from "react-admin";

export const PsyProjectReqEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="Complete" source="complete" />
        <DateTimeInput label="Date" source="date" />
        <BooleanInput label="Pending" source="pending" />
        <NumberInput step={1} label="Student Id" source="studentId" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
