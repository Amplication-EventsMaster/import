import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const IccShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Date" source="date" />
        <TextField label="ID" source="id" />
        <TextField label="Score" source="score" />
        <TextField label="Student Id" source="studentId" />
      </SimpleShowLayout>
    </Show>
  );
};
