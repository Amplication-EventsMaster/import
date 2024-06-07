import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SemesterDateList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SemesterDates"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Department" source="department" />
        <TextField label="Disabled" source="disabled" />
        <TextField label="ID" source="id" />
        <TextField label="Semref Id" source="semrefId" />
        <TextField label="Start Day" source="startDay" />
        <TextField label="Start Month" source="startMonth" />
      </Datagrid>
    </List>
  );
};
