import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DepartmentSignatureImageShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Display Order" source="displayOrder" />
        <TextField label="Dsig Id" source="dsigId" />
        <TextField label="File Date" source="fileDate" />
        <TextField label="File Name" source="fileName" />
        <TextField label="File Size" source="fileSize" />
        <TextField label="File Type" source="fileType" />
        <TextField label="ID" source="id" />
        <TextField label="Signature Name" source="signatureName" />
      </SimpleShowLayout>
    </Show>
  );
};
