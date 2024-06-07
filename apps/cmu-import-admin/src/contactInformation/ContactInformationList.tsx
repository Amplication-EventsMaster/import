import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ContactInformationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ContactInformations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Address1" source="address1" />
        <TextField label="Address2" source="address2" />
        <TextField label="City" source="city" />
        <TextField label="Country" source="country" />
        <TextField label="ID" source="id" />
        <TextField label="Phone" source="phone" />
        <TextField label="State" source="state" />
        <TextField label="Student Id" source="studentId" />
        <TextField label="Zip" source="zip" />
      </Datagrid>
    </List>
  );
};
