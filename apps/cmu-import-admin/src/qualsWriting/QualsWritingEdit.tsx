import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { QualsCommitteeTitle } from "../qualsCommittee/QualsCommitteeTitle";
import { QualsWritingAspectTitle } from "../qualsWritingAspect/QualsWritingAspectTitle";

export const QualsWritingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="engaging_reader"
          label="Engaging Reader"
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
        <TextInput label="Engaging Reader Exp" source="engagingReaderExp" />
        <SelectInput
          source="organization"
          label="Organization"
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
        <TextInput label="Organization Exp" source="organizationExp" />
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
        <ReferenceInput
          source="qualsCommittee.id"
          reference="QualsCommittee"
          label="Quals Committee"
        >
          <SelectInput optionText={QualsCommitteeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="qualsWritingAspect"
          reference="QualsWritingAspect"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QualsWritingAspectTitle} />
        </ReferenceArrayInput>
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
        <TextInput label="Summary Audience" source="summaryAudience" />
        <TextInput label="Summary Topic" source="summaryTopic" />
        <NumberInput step={1} label="Ur Id" source="urId" />
        <SelectInput
          source="writing_style"
          label="Writing Style"
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
        <TextInput label="Writing Style Exp" source="writingStyleExp" />
      </SimpleForm>
    </Edit>
  );
};
