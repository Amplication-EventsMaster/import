import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LeadershipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Leaderships"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Leadership Other" source="leadershipOther" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="Student Id" source="studentId" />
        <TextField label="Title" source="title" />
      </Datagrid>
    </List>
  );
};
