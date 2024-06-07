import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DocumentTemplatePartCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Advisor Hide" source="advisorHide" />
        <TextInput label="Default Text" source="defaultText" />
        <NumberInput step={1} label="Keep With Next" source="keepWithNext" />
        <NumberInput step={1} label="Part Order" source="partOrder" />
        <NumberInput step={1} label="Template Id" source="templateId" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
