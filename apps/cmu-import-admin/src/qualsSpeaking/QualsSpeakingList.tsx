import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const QualsSpeakingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QualsSpeakings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Av Quality" source="av_quality" />
        <TextField label="Av Quality Exp" source="avQualityExp" />
        <TextField label="ID" source="id" />
        <TextField label="Interaction" source="interaction" />
        <TextField label="Interaction Exp" source="interactionExp" />
        <TextField label="Organization" source="organization" />
        <TextField label="Organization Exp" source="organizationExp" />
        <TextField label="Overall" source="overall" />
        <TextField label="Overall Exp" source="overallExp" />
        <TextField label="Qc Id" source="qcId" />
        <TextField label="Speaking Skill" source="speaking_skill" />
        <TextField label="Speaking Skill Exp" source="speakingSkillExp" />
        <TextField label="Status" source="status" />
        <TextField label="Student Id" source="studentId" />
        <TextField label="Summary" source="summary" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Understanding" source="understanding" />
        <TextField label="Understanding Exp" source="understandingExp" />
        <TextField label="Ur Id" source="urId" />
      </Datagrid>
    </List>
  );
};
