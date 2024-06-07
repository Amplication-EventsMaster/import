import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STUDENTDATUM_TITLE_FIELD } from "../studentDatum/StudentDatumTitle";

export const StudentFileList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudentFiles"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="File Changes" source="fileChanges" />
        <TextField label="File Date" source="fileDate" />
        <TextField label="File Desc" source="fileDesc" />
        <TextField label="File Name" source="fileName" />
        <TextField label="File Type" source="fileType" />
        <TextField label="ID" source="id" />
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
