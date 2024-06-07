import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const DocumentTemplatePartShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Advisor Hide" source="advisorHide" />
        <TextField label="Default Text" source="defaultText" />
        <TextField label="ID" source="id" />
        <TextField label="Keep With Next" source="keepWithNext" />
        <TextField label="Part Order" source="partOrder" />
        <TextField label="Template Id" source="templateId" />
        <TextField label="Type Field" source="typeField" />
      </SimpleShowLayout>
    </Show>
  );
};
