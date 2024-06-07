import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const DocumentTemplateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Department" source="department" />
        <TextInput label="Description" source="description" />
        <TextInput label="Document Type" source="documentType" />
        <TextInput label="Identifier" source="identifier" />
        <TextInput label="Performance Code" source="performanceCode" />
        <TextInput label="Short Desc" source="shortDesc" />
        <NumberInput step={1} label="Sort Order" source="sortOrder" />
      </SimpleForm>
    </Create>
  );
};
