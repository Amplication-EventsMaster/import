import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ApplywebApplicationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Date Submitted" source="dateSubmitted" />
        <TextField label="ID" source="id" />
        <TextField label="Pier" source="pier" />
        <TextField label="Resume Filepath" source="resumeFilepath" />
        <TextField
          label="Statement Of Purpose Filepath"
          source="statementOfPurposeFilepath"
        />
        <TextField
          label="Student Citizenship Country"
          source="studentCitizenshipCountry"
        />
        <TextField label="Student Date Of Birth" source="studentDateOfBirth" />
        <TextField label="Student Ethnicity" source="studentEthnicity" />
        <TextField label="Student Gender" source="studentGender" />
        <TextField label="Student Name First" source="studentNameFirst" />
        <TextField label="Student Name Last" source="studentNameLast" />
        <TextField label="Student Title" source="studentTitle" />
        <TextField label="Women Fellowship" source="womenFellowship" />
      </SimpleShowLayout>
    </Show>
  );
};
