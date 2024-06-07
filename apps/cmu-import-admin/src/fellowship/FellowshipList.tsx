import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STUDENTDATUM_TITLE_FIELD } from "../studentDatum/StudentDatumTitle";

export const FellowshipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Fellowships"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Amount" source="amount" />
        <TextField label="Amount Semester" source="amountSemester" />
        <TextField label="Begin Date" source="beginDate" />
        <TextField label="Duration" source="duration" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="Pending" source="pending" />
        <ReferenceField
          label="Student Data"
          source="studentdatum.id"
          reference="StudentDatum"
        >
          <TextField source={STUDENTDATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
      </Datagrid>
    </List>
  );
};
