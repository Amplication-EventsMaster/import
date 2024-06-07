import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const LeadershipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Leadership Other" source="leadershipOther" />
        <DateTimeInput label="Start Date" source="startDate" />
        <NumberInput step={1} label="Student Id" source="studentId" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
