import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CourseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Courses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Course Num" source="courseNum" />
        <TextField label="Course Section" source="courseSection" />
        <TextField label="Department" source="department" />
        <TextField label="Department Code" source="departmentCode" />
        <TextField label="ID" source="id" />
        <TextField label="Short Title" source="shortTitle" />
        <TextField label="Title" source="title" />
        <TextField label="Units" source="units" />
      </Datagrid>
    </List>
  );
};
