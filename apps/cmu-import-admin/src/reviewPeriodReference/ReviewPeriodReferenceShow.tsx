import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const ReviewPeriodReferenceShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Ref Abbrev" source="refAbbrev" />
        <TextField label="Ref Day" source="refDay" />
        <TextField label="Ref Month" source="refMonth" />
        <TextField label="Ref Name" source="refName" />
      </SimpleShowLayout>
    </Show>
  );
};
