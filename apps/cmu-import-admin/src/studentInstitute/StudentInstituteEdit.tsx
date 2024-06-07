import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const StudentInstituteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Degree" source="degree" />
        <TextInput label="Institutes Abbr" source="institutesAbbr" />
        <TextInput label="Institutes Id" source="institutesId" />
        <TextInput label="Institutes Name" source="institutesName" />
        <TextInput label="Institutes Text" source="institutesText" />
        <NumberInput step={1} label="Irank" source="irank" />
        <TextInput label="Major" source="major" />
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
