import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AdvisorTitle } from "../advisor/AdvisorTitle";
import { AreaTitle } from "../area/AreaTitle";
import { AwardTitle } from "../award/AwardTitle";
import { CommitteeServiceTitle } from "../committeeService/CommitteeServiceTitle";
import { DegreeStatusTitle } from "../degreeStatus/DegreeStatusTitle";
import { EmploymentTitle } from "../employment/EmploymentTitle";
import { EvaluationLetterTitle } from "../evaluationLetter/EvaluationLetterTitle";
import { ExpNeuroReqTitle } from "../expNeuroReq/ExpNeuroReqTitle";
import { FellowshipTitle } from "../fellowship/FellowshipTitle";
import { FundingTitle } from "../funding/FundingTitle";
import { GeneralDatumTitle } from "../generalDatum/GeneralDatumTitle";
import { InternshipTitle } from "../internship/InternshipTitle";
import { InternshipsCdTitle } from "../internshipsCd/InternshipsCdTitle";
import { InternshipsIniTitle } from "../internshipsIni/InternshipsIniTitle";
import { InternshipsIsrmTitle } from "../internshipsIsrm/InternshipsIsrmTitle";
import { InterviewTitle } from "../interview/InterviewTitle";
import { ItaTitle } from "../ita/ItaTitle";
import { LegacyRequirementTitle } from "../legacyRequirement/LegacyRequirementTitle";
import { NoteTitle } from "../note/NoteTitle";
import { PracticumTitle } from "../practicum/PracticumTitle";
import { PresentationTitle } from "../presentation/PresentationTitle";
import { ProgramStatusTitle } from "../programStatus/ProgramStatusTitle";
import { ProjectTopicTitle } from "../projectTopic/ProjectTopicTitle";
import { QualsCommitteeTitle } from "../qualsCommittee/QualsCommitteeTitle";
import { RotationTitle } from "../rotation/RotationTitle";
import { StatementTitle } from "../statement/StatementTitle";
import { StudentAdvisorTitle } from "../studentAdvisor/StudentAdvisorTitle";
import { StudentAppTitle } from "../studentApp/StudentAppTitle";
import { StudentDataHciiTitle } from "../studentDataHcii/StudentDataHciiTitle";
import { StudentDataIniTitle } from "../studentDataIni/StudentDataIniTitle";
import { StudentDataMlTitle } from "../studentDataMl/StudentDataMlTitle";
import { StudentDataRiTitle } from "../studentDataRi/StudentDataRiTitle";
import { StudentFileTitle } from "../studentFile/StudentFileTitle";
import { StudentInstituteTitle } from "../studentInstitute/StudentInstituteTitle";
import { StudentMentorTitle } from "../studentMentor/StudentMentorTitle";
import { StudentOverrideTitle } from "../studentOverride/StudentOverrideTitle";
import { StudentPubTitle } from "../studentPub/StudentPubTitle";
import { StudentResidencyTitle } from "../studentResidency/StudentResidencyTitle";
import { StudentSkillTitle } from "../studentSkill/StudentSkillTitle";
import { TeachingReqTitle } from "../teachingReq/TeachingReqTitle";
import { ThesisCommitteeTitle } from "../thesisCommittee/ThesisCommitteeTitle";
import { ThesisTopicTitle } from "../thesisTopic/ThesisTopicTitle";
import { UserRoleTitle } from "../userRole/UserRoleTitle";

export const StudentDatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="advisors"
          reference="Advisor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdvisorTitle} />
        </ReferenceArrayInput>
        <TextInput label="Area" source="area" />
        <ReferenceArrayInput
          source="areas"
          reference="Area"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AreaTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="awards"
          reference="Award"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AwardTitle} />
        </ReferenceArrayInput>
        <TextInput label="Citizenship" source="citizenship" />
        <ReferenceArrayInput
          source="committeeService"
          reference="CommitteeService"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommitteeServiceTitle} />
        </ReferenceArrayInput>
        <TextInput label="Curriculum" source="curriculum" />
        <TextInput label="Degree" source="degree" />
        <ReferenceArrayInput
          source="degreeStatus"
          reference="DegreeStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DegreeStatusTitle} />
        </ReferenceArrayInput>
        <TextInput label="Department" source="department" />
        <ReferenceArrayInput
          source="employment"
          reference="Employment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EmploymentTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="Enter Date" source="enterDate" />
        <ReferenceArrayInput
          source="evaluationLetters"
          reference="EvaluationLetter"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EvaluationLetterTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="expNeuroReq"
          reference="ExpNeuroReq"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExpNeuroReqTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fellowships"
          reference="Fellowship"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FellowshipTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="funding"
          reference="Funding"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FundingTitle} />
        </ReferenceArrayInput>
        <TextInput label="Gender" source="gender" />
        <ReferenceArrayInput
          source="generalData"
          reference="GeneralDatum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GeneralDatumTitle} />
        </ReferenceArrayInput>
        <TextInput label="Guid" source="guid" />
        <TextInput label="Institutes Id" source="institutesId" />
        <TextInput label="Institutes Name" source="institutesName" />
        <ReferenceArrayInput
          source="internships"
          reference="Internship"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InternshipTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="internshipsCds"
          reference="InternshipsCd"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InternshipsCdTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="internshipsIni"
          reference="InternshipsIni"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InternshipsIniTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="internshipsIsrms"
          reference="InternshipsIsrm"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InternshipsIsrmTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="interview"
          reference="Interview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InterviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="ita"
          reference="Ita"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItaTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="legacyRequirements"
          reference="LegacyRequirement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LegacyRequirementTitle} />
        </ReferenceArrayInput>
        <BooleanInput label="Mlt Switch" source="mltSwitch" />
        <ReferenceArrayInput
          source="notes"
          reference="Note"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NoteTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Parttime" source="parttime" />
        <ReferenceArrayInput
          source="practicum"
          reference="Practicum"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PracticumTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="presentations"
          reference="Presentation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PresentationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Program" source="program" />
        <ReferenceArrayInput
          source="programStatus"
          reference="ProgramStatus"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProgramStatusTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="projectTopic"
          reference="ProjectTopic"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProjectTopicTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="qualsCommittee"
          reference="QualsCommittee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QualsCommitteeTitle} />
        </ReferenceArrayInput>
        <TextInput label="Residency" source="residency" />
        <ReferenceArrayInput
          source="rotations"
          reference="Rotation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RotationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="statements"
          reference="Statement"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StatementTitle} />
        </ReferenceArrayInput>
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Status Date" source="statusDate" />
        <ReferenceArrayInput
          source="studentAdvisors"
          reference="StudentAdvisor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentAdvisorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="studentApps"
          reference="StudentApp"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentAppTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="studentDataHcii"
          reference="StudentDataHcii"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentDataHciiTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="studentDataIni"
          reference="StudentDataIni"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentDataIniTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="studentDataMl"
          reference="StudentDataMl"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentDataMlTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="studentDataRi.id"
          reference="StudentDataRi"
          label="Student Data Ri"
        >
          <SelectInput optionText={StudentDataRiTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="studentFiles"
          reference="StudentFile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentFileTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="studentInstitutes"
          reference="StudentInstitute"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentInstituteTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="studentMentors"
          reference="StudentMentor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentMentorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="studentOverrides"
          reference="StudentOverride"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentOverrideTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="studentPubs"
          reference="StudentPub"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentPubTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="studentResidency"
          reference="StudentResidency"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentResidencyTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="studentSkills"
          reference="StudentSkill"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StudentSkillTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="teachingReq"
          reference="TeachingReq"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TeachingReqTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="thesisCommittee"
          reference="ThesisCommittee"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ThesisCommitteeTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="thesisTopic"
          reference="ThesisTopic"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ThesisTopicTitle} />
        </ReferenceArrayInput>
        <TextInput label="Undergrad" source="undergrad" />
        <ReferenceInput
          source="userRole.id"
          reference="UserRole"
          label="User Role"
        >
          <SelectInput optionText={UserRoleTitle} />
        </ReferenceInput>
        <NumberInput label="Year" source="year" />
        <TextInput label="Year Adjust" source="yearAdjust" />
      </SimpleForm>
    </Edit>
  );
};
