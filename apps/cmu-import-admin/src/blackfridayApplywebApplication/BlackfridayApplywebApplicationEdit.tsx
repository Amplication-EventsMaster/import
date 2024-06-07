import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const BlackfridayApplywebApplicationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Applyweb Application Id"
          source="applywebApplicationId"
        />
        <NumberInput step={1} label="Student Id" source="studentId" />
      </SimpleForm>
    </Edit>
  );
};
