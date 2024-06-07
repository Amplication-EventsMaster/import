import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const StudentDocumentPartShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Document Id" source="documentId" />
        <TextField label="ID" source="id" />
        <TextField label="Is Default" source="isDefault" />
        <TextField label="Template Part Id" source="templatePartId" />
        <TextField label="Text" source="text" />
      </SimpleShowLayout>
    </Show>
  );
};
