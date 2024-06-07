import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const DocumentTemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Description" source="description" />
        <TextInput label="Document Type" source="documentType" />
        <TextInput label="Identifier" source="identifier" />
        <TextInput label="Performance Code" source="performanceCode" />
        <TextInput label="Short Desc" source="shortDesc" />
        <NumberInput step={1} label="Sort Order" source="sortOrder" />
      </SimpleForm>
    </Edit>
  );
};
