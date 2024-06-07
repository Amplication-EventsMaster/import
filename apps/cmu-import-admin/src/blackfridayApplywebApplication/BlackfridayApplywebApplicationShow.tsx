import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const BlackfridayApplywebApplicationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField
          label="Applyweb Application Id"
          source="applywebApplicationId"
        />
        <TextField label="ID" source="id" />
        <TextField label="Student Id" source="studentId" />
      </SimpleShowLayout>
    </Show>
  );
};
