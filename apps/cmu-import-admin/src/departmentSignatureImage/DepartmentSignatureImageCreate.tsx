import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DepartmentSignatureImageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Display Order" source="displayOrder" />
        <NumberInput step={1} label="Dsig Id" source="dsigId" />
        <DateTimeInput label="File Date" source="fileDate" />
        <TextInput label="File Name" source="fileName" />
        <NumberInput step={1} label="File Size" source="fileSize" />
        <TextInput label="File Type" source="fileType" />
        <TextInput label="Signature Name" source="signatureName" />
      </SimpleForm>
    </Create>
  );
};
