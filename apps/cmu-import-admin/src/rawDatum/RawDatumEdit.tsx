import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const RawDatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Advisor" source="advisor" />
        <TextInput label="Ai" source="ai" />
        <TextInput label="Alg" source="alg" />
        <TextInput label="Comments" source="comments" />
        <TextInput label="Csys" source="csys" />
        <TextInput label="El" source="el" />
        <TextInput label="Finish" source="finish" />
        <TextInput label="Full Record" source="fullRecord" />
        <TextInput label="Left Program" source="leftProgram" />
        <TextInput label="Name" source="name" />
        <TextInput label="Notes" source="notes" />
        <TextInput label="Pl" source="pl" />
        <TextInput label="Programming Req" source="programmingReq" />
        <TextInput label="Qualdone" source="qualdone" />
        <TextInput label="Sex" source="sex" />
        <TextInput label="Speaking Req" source="speakingReq" />
        <TextInput label="Ss" source="ss" />
        <TextInput label="Start Sem" source="startSem" />
        <NumberInput step={1} label="Start Year" source="startYear" />
        <TextInput label="Start Year Full" source="startYearFull" />
        <TextInput label="Teaching Req" source="teachingReq" />
        <TextInput label="Thesis Committee" source="thesisCommittee" />
        <TextInput label="Thesis Proposal" source="thesisProposal" />
        <TextInput label="Thesis Title" source="thesisTitle" />
        <TextInput label="Undergrad" source="undergrad" />
        <TextInput label="Writing Req" source="writingReq" />
        <NumberInput label="Year" source="year" />
        <TextInput label="Year Full" source="yearFull" />
      </SimpleForm>
    </Edit>
  );
};
