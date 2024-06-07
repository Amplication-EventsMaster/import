import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DocumentTemplateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DocumentTemplates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Department" source="department" />
        <TextField label="Description" source="description" />
        <TextField label="Document Type" source="documentType" />
        <TextField label="ID" source="id" />
        <TextField label="Identifier" source="identifier" />
        <TextField label="Performance Code" source="performanceCode" />
        <TextField label="Short Desc" source="shortDesc" />
        <TextField label="Sort Order" source="sortOrder" />
      </Datagrid>
    </List>
  );
};
