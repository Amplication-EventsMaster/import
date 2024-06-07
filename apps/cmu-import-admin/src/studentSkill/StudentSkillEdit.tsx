import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const StudentSkillEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
