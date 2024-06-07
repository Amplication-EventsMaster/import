import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DepartmentMeetingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DepartmentMeetings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Department" source="department" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
      </Datagrid>
    </List>
  );
};
