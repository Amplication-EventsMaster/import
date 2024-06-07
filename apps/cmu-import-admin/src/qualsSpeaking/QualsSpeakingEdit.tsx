import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QualsSpeakingAspectTitle } from "../qualsSpeakingAspect/QualsSpeakingAspectTitle";

export const QualsSpeakingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="av_quality"
          label="Av Quality"
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
        <TextInput label="Av Quality Exp" source="avQualityExp" />
        <SelectInput
          source="interaction"
          label="Interaction"
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
        <TextInput label="Interaction Exp" source="interactionExp" />
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
        <NumberInput step={1} label="Qc Id" source="qcId" />
        <ReferenceArrayInput
          source="qualsSpeakingAspect"
          reference="QualsSpeakingAspect"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QualsSpeakingAspectTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="speaking_skill"
          label="Speaking Skill"
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
        <TextInput label="Speaking Skill Exp" source="speakingSkillExp" />
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
    </Edit>
  );
};
