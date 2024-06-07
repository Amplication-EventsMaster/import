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

export const StudentDataIniEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Curriculum Option" source="curriculumOption" />
        <TextInput label="Curriculum Track" source="curriculumTrack" />
        <NumberInput
          step={1}
          label="Program Duration"
          source="programDuration"
        />
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
