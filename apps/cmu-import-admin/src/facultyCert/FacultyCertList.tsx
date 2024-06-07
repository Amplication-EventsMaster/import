import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FacultyCertList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FacultyCerts"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Category" source="category" />
        <TextField label="Cert Date" source="certDate" />
        <TextField label="Faculty Id" source="facultyId" />
        <TextField label="ID" source="id" />
        <TextField label="Ref Id" source="refId" />
      </Datagrid>
    </List>
  );
};
