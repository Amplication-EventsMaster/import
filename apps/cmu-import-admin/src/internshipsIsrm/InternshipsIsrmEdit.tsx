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
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const InternshipsIsrmEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
