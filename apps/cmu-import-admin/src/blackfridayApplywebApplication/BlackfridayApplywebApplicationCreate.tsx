import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const BlackfridayApplywebApplicationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Applyweb Application Id"
          source="applywebApplicationId"
        />
        <NumberInput step={1} label="Student Id" source="studentId" />
      </SimpleForm>
    </Create>
  );
};
