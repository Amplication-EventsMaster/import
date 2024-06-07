import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const StatementEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Document Id" source="documentId" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Draft", value: "Draft" },
            { label: "Completed", value: "Completed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
        <TextInput label="Text" source="text" />
        <TextInput label="Text All" source="textAll" />
      </SimpleForm>
    </Edit>
  );
};
