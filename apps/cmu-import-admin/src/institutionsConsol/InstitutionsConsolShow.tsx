import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const InstitutionsConsolShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="City" source="city" />
        <TextField label="Code" source="code" />
        <TextField label="Country" source="country" />
        <TextField label="Country Code" source="countryCode" />
        <TextField label="ID" source="id" />
        <TextField label="Institution" source="institution" />
        <TextField label="Institution Abbr" source="institutionAbbr" />
        <TextField label="Institution Ascii" source="institutionAscii" />
        <TextField label="State" source="state" />
        <TextField label="Url" source="url" />
      </SimpleShowLayout>
    </Show>
  );
};
