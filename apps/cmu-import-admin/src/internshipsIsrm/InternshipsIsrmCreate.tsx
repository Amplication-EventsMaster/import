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
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const InternshipsIsrmCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="Company" source="company" />
        <TextInput label="Company Url" source="companyUrl" />
        <DateTimeInput label="End Date" source="endDate" />
        <BooleanInput label="Pending" source="pending" />
        <TextInput label="Position" source="position" />
        <DateTimeInput label="Start Date" source="startDate" />
        <TextInput label="State" source="state" />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
        <TextInput label="Supervisor Email" source="supervisorEmail" />
        <TextInput label="Supervisor Name" source="supervisorName" />
        <TextInput label="Supervisor Phone" source="supervisorPhone" />
      </SimpleForm>
    </Create>
  );
};
