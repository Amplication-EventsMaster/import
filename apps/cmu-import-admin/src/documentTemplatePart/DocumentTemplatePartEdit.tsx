import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const DocumentTemplatePartEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Advisor Hide" source="advisorHide" />
        <TextInput label="Default Text" source="defaultText" />
        <NumberInput step={1} label="Keep With Next" source="keepWithNext" />
        <NumberInput step={1} label="Part Order" source="partOrder" />
        <NumberInput step={1} label="Template Id" source="templateId" />
        <TextInput label="Type Field" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
