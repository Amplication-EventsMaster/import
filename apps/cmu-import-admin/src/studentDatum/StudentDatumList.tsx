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
import { STUDENTDATARI_TITLE_FIELD } from "../studentDataRi/StudentDataRiTitle";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const StudentDatumList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudentData"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Area" source="area" />
        <TextField label="Citizenship" source="citizenship" />
        <TextField label="Curriculum" source="curriculum" />
        <TextField label="Degree" source="degree" />
        <TextField label="Department" source="department" />
        <TextField label="Enter Date" source="enterDate" />
        <TextField label="Gender" source="gender" />
        <TextField label="Guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="Institutes Id" source="institutesId" />
        <TextField label="Institutes Name" source="institutesName" />
        <BooleanField label="Mlt Switch" source="mltSwitch" />
        <TextField label="Parttime" source="parttime" />
        <TextField label="Program" source="program" />
        <TextField label="Residency" source="residency" />
        <TextField label="Status" source="status" />
        <TextField label="Status Date" source="statusDate" />
        <ReferenceField
          label="Student Data Ri"
          source="studentdatari.id"
          reference="StudentDataRi"
        >
          <TextField source={STUDENTDATARI_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Undergrad" source="undergrad" />
        <ReferenceField
          label="User Role"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Year" source="year" />
        <TextField label="Year Adjust" source="yearAdjust" />
      </Datagrid>
    </List>
  );
};
