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

export const StudentInstituteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudentInstitutes"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Degree" source="degree" />
        <TextField label="ID" source="id" />
        <TextField label="Institutes Abbr" source="institutesAbbr" />
        <TextField label="Institutes Id" source="institutesId" />
        <TextField label="Institutes Name" source="institutesName" />
        <TextField label="Institutes Text" source="institutesText" />
        <TextField label="Irank" source="irank" />
        <TextField label="Major" source="major" />
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
