import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const RawDataLetterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Intro Text" source="introText" />
        <TextField label="Month" source="month" />
        <TextField label="Name" source="name" />
        <TextField label="Performance Code" source="performanceCode" />
        <TextField label="Performance Code Text" source="performanceCodeText" />
        <TextField label="Text" source="text" />
        <TextField label="Year" source="year" />
      </SimpleShowLayout>
    </Show>
  );
};
