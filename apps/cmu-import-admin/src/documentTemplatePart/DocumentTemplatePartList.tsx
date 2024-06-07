import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DocumentTemplatePartList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DocumentTemplateParts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Advisor Hide" source="advisorHide" />
        <TextField label="Default Text" source="defaultText" />
        <TextField label="ID" source="id" />
        <TextField label="Keep With Next" source="keepWithNext" />
        <TextField label="Part Order" source="partOrder" />
        <TextField label="Template Id" source="templateId" />
        <TextField label="Type Field" source="typeField" />
      </Datagrid>
    </List>
  );
};
