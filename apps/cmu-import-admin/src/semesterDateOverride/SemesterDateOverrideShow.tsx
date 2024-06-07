import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const SemesterDateOverrideShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department" source="department" />
        <TextField label="ID" source="id" />
        <TextField label="Semref Id" source="semrefId" />
        <TextField label="Year" source="year" />
      </SimpleShowLayout>
    </Show>
  );
};
