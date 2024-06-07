import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StudentDocumentPartCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Document Id" source="documentId" />
        <NumberInput step={1} label="Is Default" source="isDefault" />
        <NumberInput
          step={1}
          label="Template Part Id"
          source="templatePartId"
        />
        <TextInput label="Text" source="text" />
      </SimpleForm>
    </Create>
  );
};
