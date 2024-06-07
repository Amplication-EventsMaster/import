import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  BooleanField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STUDENTDATUM_TITLE_FIELD } from "../studentDatum/StudentDatumTitle";

export const TeachingReqList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TeachingReqs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <BooleanField label="Complete" source="complete" />
        <TextField label="Course Num" source="courseNum" />
        <TextField label="Course Section" source="courseSection" />
        <TextField label="Date" source="date" />
        <TextField label="Department Code" source="departmentCode" />
        <TextField label="ID" source="id" />
        <BooleanField label="Pending" source="pending" />
        <TextField label="Status" source="status" />
        <ReferenceField
          label="Student Data"
          source="studentdatum.id"
          reference="StudentDatum"
        >
          <TextField source={STUDENTDATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <TextField label="Units" source="units" />
      </Datagrid>
    </List>
  );
};
