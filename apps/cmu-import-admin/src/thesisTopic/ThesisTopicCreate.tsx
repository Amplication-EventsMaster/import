import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  BooleanInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const ThesisTopicCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <BooleanInput label="Defense Complete" source="defenseComplete" />
        <DateTimeInput label="Defense Date" source="defenseDate" />
        <BooleanInput label="Defense Pending" source="defensePending" />
        <TextInput label="Defense Title" source="defenseTitle" />
        <BooleanInput label="Pending" source="pending" />
        <BooleanInput label="Proposal Complete" source="proposalComplete" />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
