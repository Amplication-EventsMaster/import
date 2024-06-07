import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const MeetingAgendumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Meeting Id" source="meetingId" />
        <TextField label="Present Order" source="presentOrder" />
        <TextField label="Student Id" source="studentId" />
      </SimpleShowLayout>
    </Show>
  );
};
