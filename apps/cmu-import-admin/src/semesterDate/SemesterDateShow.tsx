import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SemesterDateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department" source="department" />
        <TextField label="Disabled" source="disabled" />
        <TextField label="ID" source="id" />
        <TextField label="Semref Id" source="semrefId" />
        <TextField label="Start Day" source="startDay" />
        <TextField label="Start Month" source="startMonth" />
      </SimpleShowLayout>
    </Show>
  );
};
