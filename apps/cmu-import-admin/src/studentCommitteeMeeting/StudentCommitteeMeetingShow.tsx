import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const StudentCommitteeMeetingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Meeting Date" source="meetingDate" />
        <TextField label="Student Id" source="studentId" />
      </SimpleShowLayout>
    </Show>
  );
};
