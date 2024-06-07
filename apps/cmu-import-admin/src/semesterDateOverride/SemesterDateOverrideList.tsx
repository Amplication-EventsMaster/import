import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SemesterDateOverrideList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"SemesterDateOverrides"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Department" source="department" />
        <TextField label="ID" source="id" />
        <TextField label="Semref Id" source="semrefId" />
        <TextField label="Year" source="year" />
      </Datagrid>
    </List>
  );
};
