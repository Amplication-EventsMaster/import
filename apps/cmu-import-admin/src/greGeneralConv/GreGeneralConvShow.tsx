import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const GreGeneralConvShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Current Scale" source="currentScale" />
        <TextField label="ID" source="id" />
        <TextField label="Prior Scale" source="priorScale" />
        <TextField label="Subject" source="subject" />
      </SimpleShowLayout>
    </Show>
  );
};
