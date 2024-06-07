import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const StudentDocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Template Id" source="templateId" />
      </SimpleForm>
    </Edit>
  );
};
