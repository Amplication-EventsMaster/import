import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const MeetingAgendumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Meeting Id" source="meetingId" />
        <NumberInput step={1} label="Present Order" source="presentOrder" />
        <NumberInput step={1} label="Student Id" source="studentId" />
      </SimpleForm>
    </Edit>
  );
};
