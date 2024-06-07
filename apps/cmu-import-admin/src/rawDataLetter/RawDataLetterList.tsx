import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RawDataLetterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RawDataLetters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Intro Text" source="introText" />
        <TextField label="Month" source="month" />
        <TextField label="Name" source="name" />
        <TextField label="Performance Code" source="performanceCode" />
        <TextField label="Performance Code Text" source="performanceCodeText" />
        <TextField label="Text" source="text" />
        <TextField label="Year" source="year" />
      </Datagrid>
    </List>
  );
};
