import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FileAccessLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FileAccessLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Faculty Id" source="facultyId" />
        <TextField label="ID" source="id" />
        <TextField label="Sf Id" source="sfId" />
        <TextField label="Time" source="time" />
      </Datagrid>
    </List>
  );
};
