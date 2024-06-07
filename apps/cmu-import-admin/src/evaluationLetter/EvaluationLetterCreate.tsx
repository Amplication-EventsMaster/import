import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const EvaluationLetterCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Document Id" source="documentId" />
        <TextInput label="Performance Code" source="performanceCode" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Draft", value: "Draft" },
            { label: "Completed", value: "Completed" },
            { label: "Edited", value: "Edited" },
            { label: "Finalized", value: "Finalized" },
            { label: "Approved", value: "Approved" },
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
        <SelectInput
          source="student_read"
          label="Student Read"
          choices={[
            { label: "Yes", value: "Yes" },
            { label: "No", value: "No" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Create>
  );
};
