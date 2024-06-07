import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const EmploymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address1" source="address1" />
        <TextInput label="Address2" source="address2" />
        <TextInput label="City" source="city" />
        <TextInput label="Country" source="country" />
        <DateTimeInput label="Date" source="date" />
        <TextInput label="Email" source="email" />
        <TextInput label="Employer" source="employer" />
        <TextInput label="Phone" source="phone" />
        <TextInput label="State" source="state" />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
        <TextInput label="Type Field" source="typeField" />
        <TextInput label="Zip" source="zip" />
      </SimpleForm>
    </Edit>
  );
};
