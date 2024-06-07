import * as React from "react";
import { Show, SimpleShowLayout, ShowProps, TextField } from "react-admin";

export const RawDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Advisor" source="advisor" />
        <TextField label="Ai" source="ai" />
        <TextField label="Alg" source="alg" />
        <TextField label="Comments" source="comments" />
        <TextField label="Csys" source="csys" />
        <TextField label="El" source="el" />
        <TextField label="Finish" source="finish" />
        <TextField label="Full Record" source="fullRecord" />
        <TextField label="ID" source="id" />
        <TextField label="Left Program" source="leftProgram" />
        <TextField label="Name" source="name" />
        <TextField label="Notes" source="notes" />
        <TextField label="Pl" source="pl" />
        <TextField label="Programming Req" source="programmingReq" />
        <TextField label="Qualdone" source="qualdone" />
        <TextField label="Sex" source="sex" />
        <TextField label="Speaking Req" source="speakingReq" />
        <TextField label="Ss" source="ss" />
        <TextField label="Start Sem" source="startSem" />
        <TextField label="Start Year" source="startYear" />
        <TextField label="Start Year Full" source="startYearFull" />
        <TextField label="Teaching Req" source="teachingReq" />
        <TextField label="Thesis Committee" source="thesisCommittee" />
        <TextField label="Thesis Proposal" source="thesisProposal" />
        <TextField label="Thesis Title" source="thesisTitle" />
        <TextField label="Undergrad" source="undergrad" />
        <TextField label="Writing Req" source="writingReq" />
        <TextField label="Year" source="year" />
        <TextField label="Year Full" source="yearFull" />
      </SimpleShowLayout>
    </Show>
  );
};
