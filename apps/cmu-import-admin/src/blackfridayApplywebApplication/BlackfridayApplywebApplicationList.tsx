import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BlackfridayApplywebApplicationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BlackfridayApplywebApplications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField
          label="Applyweb Application Id"
          source="applywebApplicationId"
        />
        <TextField label="ID" source="id" />
        <TextField label="Student Id" source="studentId" />
      </Datagrid>
    </List>
  );
};
