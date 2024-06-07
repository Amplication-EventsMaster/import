import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { QUALSCOMMITTEE_TITLE_FIELD } from "../qualsCommittee/QualsCommitteeTitle";

export const QualsResearchForOtherStudentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
