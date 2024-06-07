import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const StudentSkillCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Collab" source="collab" />
        <TextInput label="Comment" source="comment" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Grade" source="grade" />
        <BooleanInput label="Pending" source="pending" />
        <TextInput label="Skill" source="skill" />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <NumberInput step={1} label="Units" source="units" />
      </SimpleForm>
    </Create>
  );
};
