import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CourseDepartmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CourseDepartments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Course Id" source="courseId" />
        <TextField label="ID" source="id" />
        <TextField label="Requirement Type" source="requirementType" />
      </Datagrid>
    </List>
  );
};
