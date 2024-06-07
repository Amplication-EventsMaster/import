import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const StudentCourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Applicable" source="applicable" />
        <TextField label="Course Num" source="courseNum" />
        <TextField label="Course Section" source="courseSection" />
        <TextField label="Custom Label" source="customLabel" />
        <TextField label="Date" source="date" />
        <TextField label="Department Code" source="departmentCode" />
        <TextField label="Grade" source="grade" />
        <TextField label="ID" source="id" />
        <TextField label="Midterm Grade" source="midtermGrade" />
        <TextField label="Note" source="note" />
        <TextField label="Qpoints" source="qpoints" />
        <TextField label="Requirement Type" source="requirementType" />
        <TextField label="Short Title" source="shortTitle" />
        <TextField label="Student Id" source="studentId" />
        <TextField label="Title" source="title" />
        <TextField label="Transfercredit" source="transfercredit" />
        <TextField label="Units" source="units" />
      </SimpleShowLayout>
    </Show>
  );
};
