import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { QUALSSPEAKING_TITLE_FIELD } from "./QualsSpeakingTitle";

export const QualsSpeakingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="QualsSpeakingAspect"
          target="quals_speaking_id"
          label="QualsSpeakingAspects"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Quals Speaking"
              source="qualsspeaking.id"
              reference="QualsSpeaking"
            >
              <TextField source={QUALSSPEAKING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Text" source="text" />
            <TextField label="Type" source="type" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
