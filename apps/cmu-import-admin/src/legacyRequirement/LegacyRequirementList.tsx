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

export const LegacyRequirementList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"LegacyRequirements"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Course" source="course" />
        <TextField label="ID" source="id" />
        <TextField label="Requirement Title" source="requirementTitle" />
        <TextField label="Requirement Type" source="requirementType" />
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
