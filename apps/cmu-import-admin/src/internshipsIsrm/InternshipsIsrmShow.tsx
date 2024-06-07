import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { STUDENTDATUM_TITLE_FIELD } from "../studentDatum/StudentDatumTitle";

export const InternshipsIsrmShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="City" source="city" />
        <TextField label="Company" source="company" />
        <TextField label="Company Url" source="companyUrl" />
        <TextField label="End Date" source="endDate" />
        <TextField label="ID" source="id" />
        <BooleanField label="Pending" source="pending" />
        <TextField label="Position" source="position" />
        <TextField label="Start Date" source="startDate" />
        <TextField label="State" source="state" />
        <ReferenceField
          label="Student Data"
          source="studentdatum.id"
          reference="StudentDatum"
        >
          <TextField source={STUDENTDATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Supervisor Email" source="supervisorEmail" />
        <TextField label="Supervisor Name" source="supervisorName" />
        <TextField label="Supervisor Phone" source="supervisorPhone" />
      </SimpleShowLayout>
    </Show>
  );
};
