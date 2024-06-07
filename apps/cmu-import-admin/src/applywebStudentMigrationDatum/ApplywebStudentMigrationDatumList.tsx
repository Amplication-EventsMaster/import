import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ApplywebStudentMigrationDatumList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ApplywebStudentMigrationData"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="App Id" source="appId" />
        <TextField label="Applyweb Db" source="applywebDb" />
        <TextField label="Applyweb Db User Id" source="applywebDbUserId" />
        <TextField
          label="Applyweb Db User Table"
          source="applywebDbUserTable"
        />
        <TextField label="ID" source="id" />
      </Datagrid>
    </List>
  );
};
