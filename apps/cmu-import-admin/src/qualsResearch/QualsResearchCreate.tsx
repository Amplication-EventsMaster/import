import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

import { QualsCommitteeTitle } from "../qualsCommittee/QualsCommitteeTitle";

export const QualsResearchCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="approach"
          label="Approach"
          choices={[
            { label: "Excellent", value: "Excellent" },
            { label: "Good", value: "Good" },
            { label: "Satisfactory", value: "Satisfactory" },
            { label: "Unsatisfactory", value: "Unsatisfactory" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Approach Exp" source="approachExp" />
        <SelectInput
          source="insight"
          label="Insight"
          choices={[
            { label: "Excellent", value: "Excellent" },
            { label: "Good", value: "Good" },
            { label: "Satisfactory", value: "Satisfactory" },
            { label: "Unsatisfactory", value: "Unsatisfactory" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Insight Exp" source="insightExp" />
        <SelectInput
          source="interpretation"
          label="Interpretation"
          choices={[
            { label: "Excellent", value: "Excellent" },
            { label: "Good", value: "Good" },
            { label: "Satisfactory", value: "Satisfactory" },
            { label: "Unsatisfactory", value: "Unsatisfactory" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Interpretation Exp" source="interpretationExp" />
        <SelectInput
          source="overall"
          label="Overall"
          choices={[
            { label: "Excellent", value: "Excellent" },
            { label: "Good", value: "Good" },
            { label: "Satisfactory", value: "Satisfactory" },
            { label: "Unsatisfactory", value: "Unsatisfactory" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Overall Exp" source="overallExp" />
        <TextInput label="Progress" source="progress" />
        <ReferenceInput
          source="qualsCommittee.id"
          reference="QualsCommittee"
          label="Quals Committee"
        >
          <SelectInput optionText={QualsCommitteeTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Satisfied", value: "Satisfied" },
            { label: "Progress", value: "Progress" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="Student Id" source="studentId" />
        <TextInput label="Summary" source="summary" />
        <SelectInput
          source="understanding"
          label="Understanding"
          choices={[
            { label: "Excellent", value: "Excellent" },
            { label: "Good", value: "Good" },
            { label: "Satisfactory", value: "Satisfactory" },
            { label: "Unsatisfactory", value: "Unsatisfactory" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Understanding Exp" source="understandingExp" />
        <NumberInput step={1} label="Ur Id" source="urId" />
      </SimpleForm>
    </Create>
  );
};
