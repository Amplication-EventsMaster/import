import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const NewCourseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Course Num" source="courseNum" />
        <TextField label="Course Section" source="courseSection" />
        <TextField label="Department" source="department" />
        <TextField label="Department Code" source="departmentCode" />
        <TextField label="ID" source="id" />
        <TextField label="Short Title" source="shortTitle" />
        <TextField label="Title" source="title" />
        <TextField label="Units" source="units" />
      </SimpleShowLayout>
    </Show>
  );
};
