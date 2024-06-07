import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ResponsibleConductOfResearchShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Completion Date" source="completionDate" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Student Id" source="studentId" />
      </SimpleShowLayout>
    </Show>
  );
};
