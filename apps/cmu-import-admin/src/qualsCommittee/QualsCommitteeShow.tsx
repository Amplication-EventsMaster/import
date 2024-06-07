import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { QUALSCOMMITTEE_TITLE_FIELD } from "./QualsCommitteeTitle";
import { STUDENTDATUM_TITLE_FIELD } from "../studentDatum/StudentDatumTitle";

export const QualsCommitteeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Member Type" source="memberType" />
        <TextField label="Override Research" source="overrideResearch" />
        <TextField label="Override Speaking" source="overrideSpeaking" />
        <TextField label="Override Writing" source="overrideWriting" />
        <ReferenceField
          label="Student Data"
          source="studentdatum.id"
          reference="StudentDatum"
        >
          <TextField source={STUDENTDATUM_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Ur Id" source="urId" />
        <ReferenceManyField
          reference="QualsResearch"
          target="qc_id"
          label="QualsResearches"
        >
          <Datagrid rowClick="show">
            <TextField label="Approach" source="approach" />
            <TextField label="Approach Exp" source="approachExp" />
            <TextField label="ID" source="id" />
            <TextField label="Insight" source="insight" />
            <TextField label="Insight Exp" source="insightExp" />
            <TextField label="Interpretation" source="interpretation" />
            <TextField label="Interpretation Exp" source="interpretationExp" />
            <TextField label="Overall" source="overall" />
            <TextField label="Overall Exp" source="overallExp" />
            <TextField label="Progress" source="progress" />
            <ReferenceField
              label="Quals Committee"
              source="qualscommittee.id"
              reference="QualsCommittee"
            >
              <TextField source={QUALSCOMMITTEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Student Id" source="studentId" />
            <TextField label="Summary" source="summary" />
            <DateField source="timestamp" label="Timestamp" />
            <TextField label="Understanding" source="understanding" />
            <TextField label="Understanding Exp" source="understandingExp" />
            <TextField label="Ur Id" source="urId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QualsResearchForOtherStudent"
          target="qc_id"
          label="QualsResearchForOtherStudents"
        >
          <Datagrid rowClick="show">
            <TextField label="Approach" source="approach" />
            <TextField label="Approach Exp" source="approachExp" />
            <TextField label="ID" source="id" />
            <TextField label="Insight" source="insight" />
            <TextField label="Insight Exp" source="insightExp" />
            <TextField label="Interpretation" source="interpretation" />
            <TextField label="Interpretation Exp" source="interpretationExp" />
            <TextField label="Overall" source="overall" />
            <TextField label="Overall Exp" source="overallExp" />
            <TextField label="Progress" source="progress" />
            <ReferenceField
              label="Quals Committee"
              source="qualscommittee.id"
              reference="QualsCommittee"
            >
              <TextField source={QUALSCOMMITTEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Student Id" source="studentId" />
            <TextField label="Summary" source="summary" />
            <DateField source="timestamp" label="Timestamp" />
            <TextField label="Understanding" source="understanding" />
            <TextField label="Understanding Exp" source="understandingExp" />
            <TextField label="Ur Id" source="urId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QualsWriting"
          target="qc_id"
          label="QualsWritings"
        >
          <Datagrid rowClick="show">
            <TextField label="Engaging Reader" source="engaging_reader" />
            <TextField label="Engaging Reader Exp" source="engagingReaderExp" />
            <TextField label="ID" source="id" />
            <TextField label="Organization" source="organization" />
            <TextField label="Organization Exp" source="organizationExp" />
            <TextField label="Overall" source="overall" />
            <TextField label="Overall Exp" source="overallExp" />
            <ReferenceField
              label="Quals Committee"
              source="qualscommittee.id"
              reference="QualsCommittee"
            >
              <TextField source={QUALSCOMMITTEE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Status" source="status" />
            <TextField label="Student Id" source="studentId" />
            <TextField label="Summary Audience" source="summaryAudience" />
            <TextField label="Summary Topic" source="summaryTopic" />
            <DateField source="timestamp" label="Timestamp" />
            <TextField label="Ur Id" source="urId" />
            <TextField label="Writing Style" source="writing_style" />
            <TextField label="Writing Style Exp" source="writingStyleExp" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
