import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Andrew Id" source="andrewId" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Middle Name" source="middleName" />
        <TextField label="Nickname" source="nickname" />
        <TextField label="Owner" source="owner" />
        <TextField label="Owner Display" source="ownerDisplay" />
        <TextField label="Username" source="username" />
      </Datagrid>
    </List>
  );
};
