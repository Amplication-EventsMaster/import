import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplywebApplicationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApplywebApplications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
