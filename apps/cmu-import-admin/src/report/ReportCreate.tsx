import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ReportColumnTitle } from "../reportColumn/ReportColumnTitle";
import { ReportDeptVisibilityTitle } from "../reportDeptVisibility/ReportDeptVisibilityTitle";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="reportColumns"
          reference="ReportColumn"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportColumnTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reportDeptVisibility"
          reference="ReportDeptVisibility"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportDeptVisibilityTitle} />
        </ReferenceArrayInput>
        <TextInput label="Report Query" source="reportQuery" />
        <TextInput label="Report Title" source="reportTitle" />
      </SimpleForm>
    </Create>
  );
};
