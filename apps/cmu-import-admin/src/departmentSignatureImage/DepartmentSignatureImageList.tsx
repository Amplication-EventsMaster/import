import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DepartmentSignatureImageList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DepartmentSignatureImages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Display Order" source="displayOrder" />
        <TextField label="Dsig Id" source="dsigId" />
        <TextField label="File Date" source="fileDate" />
        <TextField label="File Name" source="fileName" />
        <TextField label="File Size" source="fileSize" />
        <TextField label="File Type" source="fileType" />
        <TextField label="ID" source="id" />
        <TextField label="Signature Name" source="signatureName" />
      </Datagrid>
    </List>
  );
};
