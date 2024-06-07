import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const StudentCommitteeMeetingEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Meeting Date" source="meetingDate" />
        <NumberInput step={1} label="Student Id" source="studentId" />
      </SimpleForm>
    </Edit>
  );
};
