import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const NewCourseDepartmentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Course Id" source="courseId" />
        <TextField label="ID" source="id" />
        <TextField label="Requirement Type" source="requirementType" />
      </SimpleShowLayout>
    </Show>
  );
};
