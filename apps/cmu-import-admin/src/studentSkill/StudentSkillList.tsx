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

export const StudentSkillList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudentSkills"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Collab" source="collab" />
        <TextField label="Comment" source="comment" />
        <TextField label="Date" source="date" />
        <TextField label="Grade" source="grade" />
        <TextField label="ID" source="id" />
        <BooleanField label="Pending" source="pending" />
        <TextField label="Skill" source="skill" />
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
