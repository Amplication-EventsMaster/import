import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FacultyDatumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"FacultyData"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Department" source="department" />
        <TextField label="ID" source="id" />
        <TextField label="Institutes Id" source="institutesId" />
        <TextField label="Institutes Name" source="institutesName" />
        <TextField label="Institution" source="institution" />
        <TextField label="Institution Abbr" source="institutionAbbr" />
        <TextField label="Status" source="status" />
        <TextField label="Title" source="title" />
        <TextField label="Ur Id" source="urId" />
      </Datagrid>
    </List>
  );
};
