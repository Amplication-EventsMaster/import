import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const ApplywebApplicationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Date Submitted" source="dateSubmitted" />
        <TextInput label="Pier" source="pier" />
        <TextInput label="Resume Filepath" source="resumeFilepath" />
        <TextInput
          label="Statement Of Purpose Filepath"
          source="statementOfPurposeFilepath"
        />
        <TextInput
          label="Student Citizenship Country"
          source="studentCitizenshipCountry"
        />
        <DateTimeInput
          label="Student Date Of Birth"
          source="studentDateOfBirth"
        />
        <TextInput label="Student Ethnicity" source="studentEthnicity" />
        <TextInput label="Student Gender" source="studentGender" />
        <TextInput label="Student Name First" source="studentNameFirst" />
        <TextInput label="Student Name Last" source="studentNameLast" />
        <TextInput label="Student Title" source="studentTitle" />
        <TextInput label="Women Fellowship" source="womenFellowship" />
      </SimpleForm>
    </Create>
  );
};
