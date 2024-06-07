import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const LeadershipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Leadership Other" source="leadershipOther" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Student Id" source="studentId" />
        <TextField label="Title" source="title" />
      </SimpleShowLayout>
    </Show>
  );
};
