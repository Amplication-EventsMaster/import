import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { QualsResearchTitle } from "../qualsResearch/QualsResearchTitle";
import { QualsResearchForOtherStudentTitle } from "../qualsResearchForOtherStudent/QualsResearchForOtherStudentTitle";
import { QualsWritingTitle } from "../qualsWriting/QualsWritingTitle";
import { StudentDatumTitle } from "../studentDatum/StudentDatumTitle";

export const QualsCommitteeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Member Type" source="memberType" />
        <NumberInput
          step={1}
          label="Override Research"
          source="overrideResearch"
        />
        <NumberInput
          step={1}
          label="Override Speaking"
          source="overrideSpeaking"
        />
        <NumberInput
          step={1}
          label="Override Writing"
          source="overrideWriting"
        />
        <ReferenceArrayInput
          source="qualsResearch"
          reference="QualsResearch"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QualsResearchTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="qualsResearchForOtherStudent"
          reference="QualsResearchForOtherStudent"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QualsResearchForOtherStudentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="qualsWriting"
          reference="QualsWriting"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QualsWritingTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="studentData.id"
          reference="StudentDatum"
          label="Student Data"
        >
          <SelectInput optionText={StudentDatumTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Ur Id" source="urId" />
      </SimpleForm>
    </Create>
  );
};
