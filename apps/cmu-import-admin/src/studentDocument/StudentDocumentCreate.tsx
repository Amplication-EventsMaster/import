import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const StudentDocumentCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Template Id" source="templateId" />
      </SimpleForm>
    </Create>
  );
};
