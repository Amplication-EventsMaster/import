import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StudentDocumentPartEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
