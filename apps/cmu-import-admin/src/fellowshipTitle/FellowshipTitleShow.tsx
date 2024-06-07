import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const FellowshipTitleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department" source="department" />
        <TextField label="Fellowship Title" source="fellowshipTitle" />
        <TextField label="ID" source="id" />
      </SimpleShowLayout>
    </Show>
  );
};
