import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DocumentTemplateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Department" source="department" />
        <TextField label="Description" source="description" />
        <TextField label="Document Type" source="documentType" />
        <TextField label="ID" source="id" />
        <TextField label="Identifier" source="identifier" />
        <TextField label="Performance Code" source="performanceCode" />
        <TextField label="Short Desc" source="shortDesc" />
        <TextField label="Sort Order" source="sortOrder" />
      </SimpleShowLayout>
    </Show>
  );
};
