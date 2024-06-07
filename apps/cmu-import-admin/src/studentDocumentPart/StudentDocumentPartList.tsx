import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StudentDocumentPartList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudentDocumentParts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Document Id" source="documentId" />
        <TextField label="ID" source="id" />
        <TextField label="Is Default" source="isDefault" />
        <TextField label="Template Part Id" source="templatePartId" />
        <TextField label="Text" source="text" />
      </Datagrid>
    </List>
  );
};
