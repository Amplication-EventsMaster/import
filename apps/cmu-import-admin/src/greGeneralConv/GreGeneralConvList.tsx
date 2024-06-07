import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const GreGeneralConvList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"GreGeneralConvs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Current Scale" source="currentScale" />
        <TextField label="ID" source="id" />
        <TextField label="Prior Scale" source="priorScale" />
        <TextField label="Subject" source="subject" />
      </Datagrid>
    </List>
  );
};
