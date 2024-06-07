import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MeetingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Meetings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Admin Visible" source="adminVisible" />
        <TextField label="Department" source="department" />
        <TextField label="End" source="end" />
        <BooleanField label="Faculty Visible" source="facultyVisible" />
        <TextField label="ID" source="id" />
        <TextField label="Long Description" source="longDescription" />
        <TextField label="Short Description" source="shortDescription" />
        <TextField label="Start" source="start" />
      </Datagrid>
    </List>
  );
};
