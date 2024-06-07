import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const DepartmentSignatureImageEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Display Order" source="displayOrder" />
        <NumberInput step={1} label="Dsig Id" source="dsigId" />
        <DateTimeInput label="File Date" source="fileDate" />
        <TextInput label="File Name" source="fileName" />
        <NumberInput step={1} label="File Size" source="fileSize" />
        <TextInput label="File Type" source="fileType" />
        <TextInput label="Signature Name" source="signatureName" />
      </SimpleForm>
    </Edit>
  );
};
