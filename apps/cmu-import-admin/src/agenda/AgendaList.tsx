import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const AgendaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Agenda Items"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Department" source="department" />
        <TextField label="ID" source="id" />
        <TextField label="Long Description" source="longDescription" />
        <TextField label="Short Description" source="shortDescription" />
      </Datagrid>
    </List>
  );
};
