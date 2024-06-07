import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { STUDENTDATUM_TITLE_FIELD } from "./StudentDatumTitle";
import { STUDENTDATARI_TITLE_FIELD } from "../studentDataRi/StudentDataRiTitle";
import { USERROLE_TITLE_FIELD } from "../userRole/UserRoleTitle";

export const StudentDatumShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Area" source="area" />
        <TextField label="Citizenship" source="citizenship" />
        <TextField label="Curriculum" source="curriculum" />
        <TextField label="Degree" source="degree" />
        <TextField label="Department" source="department" />
        <TextField label="Enter Date" source="enterDate" />
        <TextField label="Gender" source="gender" />
        <TextField label="Guid" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="Institutes Id" source="institutesId" />
        <TextField label="Institutes Name" source="institutesName" />
        <BooleanField label="Mlt Switch" source="mltSwitch" />
        <TextField label="Parttime" source="parttime" />
        <TextField label="Program" source="program" />
        <TextField label="Residency" source="residency" />
        <TextField label="Status" source="status" />
        <TextField label="Status Date" source="statusDate" />
        <ReferenceField
          label="Student Data Ri"
          source="studentdatari.id"
          reference="StudentDataRi"
        >
          <TextField source={STUDENTDATARI_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Undergrad" source="undergrad" />
        <ReferenceField
          label="User Role"
          source="userrole.id"
          reference="UserRole"
        >
          <TextField source={USERROLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Year" source="year" />
        <TextField label="Year Adjust" source="yearAdjust" />
        <ReferenceManyField
          reference="Advisor"
          target="student_id"
          label="Advisors"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="Faculty Id" source="facultyId" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Area" target="student_id" label="Areas">
          <Datagrid rowClick="show">
            <TextField label="Arank" source="arank" />
            <TextField label="Area" source="area" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Award"
          target="student_id"
          label="Awards"
        >
          <Datagrid rowClick="show">
            <TextField label="Award Date" source="awardDate" />
            <TextField label="Award Name" source="awardName" />
            <TextField label="ID" source="id" />
            <BooleanField label="Pending" source="pending" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CommitteeService"
          target="student_id"
          label="CommitteeServices"
        >
          <Datagrid rowClick="show">
            <TextField label="Committee Name" source="committeeName" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="Start Date" source="startDate" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="DegreeStatus"
          target="student_id"
          label="DegreeStatuses"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Employment"
          target="student_id"
          label="Employments"
        >
          <Datagrid rowClick="show">
            <TextField label="Address1" source="address1" />
            <TextField label="Address2" source="address2" />
            <TextField label="City" source="city" />
            <TextField label="Country" source="country" />
            <TextField label="Date" source="date" />
            <TextField label="Email" source="email" />
            <TextField label="Employer" source="employer" />
            <TextField label="ID" source="id" />
            <TextField label="Phone" source="phone" />
            <TextField label="State" source="state" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type Field" source="typeField" />
            <TextField label="Zip" source="zip" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EvaluationLetter"
          target="student_id"
          label="EvaluationLetters"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="Document Id" source="documentId" />
            <TextField label="ID" source="id" />
            <TextField label="Performance Code" source="performanceCode" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Student Read" source="student_read" />
            <TextField label="Text" source="text" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ExpNeuroReq"
          target="student_id"
          label="ExpNeuroReqs"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Complete" source="complete" />
            <TextField label="Date" source="date" />
            <TextField label="Department Code" source="departmentCode" />
            <TextField label="ID" source="id" />
            <BooleanField label="Pending" source="pending" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Fellowship"
          target="student_id"
          label="Fellowships"
        >
          <Datagrid rowClick="show">
            <TextField label="Amount" source="amount" />
            <TextField label="Amount Semester" source="amountSemester" />
            <TextField label="Begin Date" source="beginDate" />
            <TextField label="Duration" source="duration" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Pending" source="pending" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Funding"
          target="student_id"
          label="Fundings"
        >
          <Datagrid rowClick="show">
            <TextField label="Funding Date" source="fundingDate" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="GeneralDatum"
          target="student_id"
          label="GeneralData"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="Date2" source="date2" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Text" source="text" />
            <TextField label="Val" source="val" />
            <TextField label="Val2" source="val2" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Internship"
          target="student_id"
          label="Internships"
        >
          <Datagrid rowClick="show">
            <TextField label="Company" source="company" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Pending" source="pending" />
            <TextField label="Start Date" source="startDate" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InternshipsCd"
          target="student_id"
          label="InternshipsCds"
        >
          <Datagrid rowClick="show">
            <TextField label="City" source="city" />
            <TextField label="Company" source="company" />
            <TextField label="Company Url" source="companyUrl" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Pending" source="pending" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="State" source="state" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Supervisor Email" source="supervisorEmail" />
            <TextField label="Supervisor Name" source="supervisorName" />
            <TextField label="Supervisor Phone" source="supervisorPhone" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InternshipsIni"
          target="student_id"
          label="InternshipsInis"
        >
          <Datagrid rowClick="show">
            <TextField label="City" source="city" />
            <TextField label="Company" source="company" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Pending" source="pending" />
            <TextField label="Position" source="position" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="State" source="state" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="InternshipsIsrm"
          target="student_id"
          label="InternshipsIsrms"
        >
          <Datagrid rowClick="show">
            <TextField label="City" source="city" />
            <TextField label="Company" source="company" />
            <TextField label="Company Url" source="companyUrl" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <BooleanField label="Pending" source="pending" />
            <TextField label="Position" source="position" />
            <TextField label="Start Date" source="startDate" />
            <TextField label="State" source="state" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Supervisor Email" source="supervisorEmail" />
            <TextField label="Supervisor Name" source="supervisorName" />
            <TextField label="Supervisor Phone" source="supervisorPhone" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Interview"
          target="student_id"
          label="Interviews"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="Employer" source="employer" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type Field" source="typeField" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Ita" target="student_id" label="Itas">
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="Score" source="score" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="LegacyRequirement"
          target="student_id"
          label="LegacyRequirements"
        >
          <Datagrid rowClick="show">
            <TextField label="Course" source="course" />
            <TextField label="ID" source="id" />
            <TextField label="Requirement Title" source="requirementTitle" />
            <TextField label="Requirement Type" source="requirementType" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Note" target="student_id" label="Notes">
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="Note Type" source="note_type" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Text" source="text" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Practicum"
          target="student_id"
          label="Practicums"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="Prac Type" source="pracType" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Presentation"
          target="student_id"
          label="Presentations"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProgramStatus"
          target="student_id"
          label="ProgramStatuses"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProjectTopic"
          target="student_id"
          label="ProjectTopics"
        >
          <Datagrid rowClick="show">
            <TextField label="Area" source="area" />
            <TextField label="Client Name" source="clientName" />
            <TextField label="Date" source="date" />
            <TextField label="ID" source="id" />
            <TextField label="Notes" source="notes" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Team Name" source="teamName" />
            <TextField label="Title" source="title" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="QualsCommittee"
          target="student_id"
          label="QualsCommittees"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Member Type" source="memberType" />
            <TextField label="Override Research" source="overrideResearch" />
            <TextField label="Override Speaking" source="overrideSpeaking" />
            <TextField label="Override Writing" source="overrideWriting" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Ur Id" source="urId" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Rotation"
          target="student_id"
          label="Rotations"
        >
          <Datagrid rowClick="show">
            <TextField label="Comment" source="comment" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Faculty Id" source="facultyId" />
            <TextField label="ID" source="id" />
            <TextField label="Sf Id" source="sfId" />
            <TextField label="Start Date" source="startDate" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Statement"
          target="student_id"
          label="Statements"
        >
          <Datagrid rowClick="show">
            <DateField source="createdDate" label="Created Date" />
            <TextField label="Date" source="date" />
            <TextField label="Document Id" source="documentId" />
            <TextField label="ID" source="id" />
            <DateField source="modifiedDate" label="Modified Date" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Text" source="text" />
            <TextField label="Text All" source="textAll" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentAdvisor"
          target="student_id"
          label="StudentAdvisors"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Consultant" source="consultant" />
            <BooleanField label="Current" source="current" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Faculty Id" source="facultyId" />
            <TextField label="ID" source="id" />
            <TextField label="Start Date" source="startDate" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentApp"
          target="student_id"
          label="StudentApps"
        >
          <Datagrid rowClick="show">
            <TextField label="App Id" source="appId" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentDataHcii"
          target="student_id"
          label="StudentDataHciis"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Upload Date" source="uploadDate" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentDataIni"
          target="student_id"
          label="StudentDataInis"
        >
          <Datagrid rowClick="show">
            <TextField label="Curriculum Option" source="curriculumOption" />
            <TextField label="Curriculum Track" source="curriculumTrack" />
            <TextField label="ID" source="id" />
            <TextField label="Program Duration" source="programDuration" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentDataMl"
          target="student_id"
          label="StudentDataMls"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Orig Department" source="origDepartment" />
            <BooleanField label="Override Core" source="overrideCore" />
            <BooleanField
              label="Override Electives"
              source="overrideElectives"
            />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentFile"
          target="student_id"
          label="StudentFiles"
        >
          <Datagrid rowClick="show">
            <TextField label="File Changes" source="fileChanges" />
            <TextField label="File Date" source="fileDate" />
            <TextField label="File Desc" source="fileDesc" />
            <TextField label="File Name" source="fileName" />
            <TextField label="File Type" source="fileType" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentInstitute"
          target="student_id"
          label="StudentInstitutes"
        >
          <Datagrid rowClick="show">
            <TextField label="Degree" source="degree" />
            <TextField label="ID" source="id" />
            <TextField label="Institutes Abbr" source="institutesAbbr" />
            <TextField label="Institutes Id" source="institutesId" />
            <TextField label="Institutes Name" source="institutesName" />
            <TextField label="Institutes Text" source="institutesText" />
            <TextField label="Irank" source="irank" />
            <TextField label="Major" source="major" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentMentor"
          target="student_id"
          label="StudentMentors"
        >
          <Datagrid rowClick="show">
            <TextField label="Consultant" source="consultant" />
            <TextField label="Current" source="current" />
            <TextField label="End Date" source="endDate" />
            <TextField label="Faculty Id" source="facultyId" />
            <TextField label="ID" source="id" />
            <TextField label="Start Date" source="startDate" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentOverride"
          target="student_id"
          label="StudentOverrides"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Note Id" source="noteId" />
            <TextField label="Requirement" source="requirement" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentPub"
          target="student_id"
          label="StudentPubs"
        >
          <Datagrid rowClick="show">
            <TextField label="Authors" source="authors" />
            <TextField label="Citation" source="citation" />
            <TextField label="Forum" source="forum" />
            <TextField label="ID" source="id" />
            <TextField label="Pub Date" source="pubDate" />
            <TextField label="Sf Id" source="sfId" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <TextField label="Url" source="url" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentResidency"
          target="student_id"
          label="StudentResidencies"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Residency Date" source="residencyDate" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="StudentSkill"
          target="student_id"
          label="StudentSkills"
        >
          <Datagrid rowClick="show">
            <TextField label="Collab" source="collab" />
            <TextField label="Comment" source="comment" />
            <TextField label="Date" source="date" />
            <TextField label="Grade" source="grade" />
            <TextField label="ID" source="id" />
            <BooleanField label="Pending" source="pending" />
            <TextField label="Skill" source="skill" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <TextField label="Units" source="units" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TeachingReq"
          target="student_id"
          label="TeachingReqs"
        >
          <Datagrid rowClick="show">
            <BooleanField label="Complete" source="complete" />
            <TextField label="Course Num" source="courseNum" />
            <TextField label="Course Section" source="courseSection" />
            <TextField label="Date" source="date" />
            <TextField label="Department Code" source="departmentCode" />
            <TextField label="ID" source="id" />
            <BooleanField label="Pending" source="pending" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <TextField label="Units" source="units" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ThesisCommittee"
          target="student_id"
          label="ThesisCommittees"
        >
          <Datagrid rowClick="show">
            <TextField label="Committee Role" source="committeeRole" />
            <TextField label="Faculty Id" source="facultyId" />
            <TextField label="ID" source="id" />
            <BooleanField label="Pending" source="pending" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Thesis Type" source="thesisType" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ThesisTopic"
          target="student_id"
          label="ThesisTopics"
        >
          <Datagrid rowClick="show">
            <TextField label="Date" source="date" />
            <BooleanField label="Defense Complete" source="defenseComplete" />
            <TextField label="Defense Date" source="defenseDate" />
            <BooleanField label="Defense Pending" source="defensePending" />
            <TextField label="Defense Title" source="defenseTitle" />
            <TextField label="ID" source="id" />
            <BooleanField label="Pending" source="pending" />
            <BooleanField label="Proposal Complete" source="proposalComplete" />
            <ReferenceField
              label="Student Data"
              source="studentdatum.id"
              reference="StudentDatum"
            >
              <TextField source={STUDENTDATUM_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
