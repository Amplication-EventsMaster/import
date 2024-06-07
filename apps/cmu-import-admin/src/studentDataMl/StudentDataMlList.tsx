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

export const StudentDataMlList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudentDataMls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Orig Department" source="origDepartment" />
        <BooleanField label="Override Core" source="overrideCore" />
        <BooleanField label="Override Electives" source="overrideElectives" />
        <ReferenceField
          label="Student Data"
          source="studentdatum.id"
          reference="StudentDatum"
        >
          <TextField source={STUDENTDATUM_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
