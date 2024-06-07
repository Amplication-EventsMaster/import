import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdvisorList } from "./advisor/AdvisorList";
import { AdvisorCreate } from "./advisor/AdvisorCreate";
import { AdvisorEdit } from "./advisor/AdvisorEdit";
import { AdvisorShow } from "./advisor/AdvisorShow";
import { AdvisorsCopyList } from "./advisorsCopy/AdvisorsCopyList";
import { AdvisorsCopyCreate } from "./advisorsCopy/AdvisorsCopyCreate";
import { AdvisorsCopyEdit } from "./advisorsCopy/AdvisorsCopyEdit";
import { AdvisorsCopyShow } from "./advisorsCopy/AdvisorsCopyShow";
import { AgendaItemList } from "./agendaItem/AgendaItemList";
import { AgendaItemCreate } from "./agendaItem/AgendaItemCreate";
import { AgendaItemEdit } from "./agendaItem/AgendaItemEdit";
import { AgendaItemShow } from "./agendaItem/AgendaItemShow";
import { AgendaList } from "./agenda/AgendaList";
import { AgendaCreate } from "./agenda/AgendaCreate";
import { AgendaEdit } from "./agenda/AgendaEdit";
import { AgendaShow } from "./agenda/AgendaShow";
import { ApplywebApplicationList } from "./applywebApplication/ApplywebApplicationList";
import { ApplywebApplicationCreate } from "./applywebApplication/ApplywebApplicationCreate";
import { ApplywebApplicationEdit } from "./applywebApplication/ApplywebApplicationEdit";
import { ApplywebApplicationShow } from "./applywebApplication/ApplywebApplicationShow";
import { ApplywebStudentMigrationDatumList } from "./applywebStudentMigrationDatum/ApplywebStudentMigrationDatumList";
import { ApplywebStudentMigrationDatumCreate } from "./applywebStudentMigrationDatum/ApplywebStudentMigrationDatumCreate";
import { ApplywebStudentMigrationDatumEdit } from "./applywebStudentMigrationDatum/ApplywebStudentMigrationDatumEdit";
import { ApplywebStudentMigrationDatumShow } from "./applywebStudentMigrationDatum/ApplywebStudentMigrationDatumShow";
import { AreaList } from "./area/AreaList";
import { AreaCreate } from "./area/AreaCreate";
import { AreaEdit } from "./area/AreaEdit";
import { AreaShow } from "./area/AreaShow";
import { AwardList } from "./award/AwardList";
import { AwardCreate } from "./award/AwardCreate";
import { AwardEdit } from "./award/AwardEdit";
import { AwardShow } from "./award/AwardShow";
import { BlackfridayApplywebApplicationList } from "./blackfridayApplywebApplication/BlackfridayApplywebApplicationList";
import { BlackfridayApplywebApplicationCreate } from "./blackfridayApplywebApplication/BlackfridayApplywebApplicationCreate";
import { BlackfridayApplywebApplicationEdit } from "./blackfridayApplywebApplication/BlackfridayApplywebApplicationEdit";
import { BlackfridayApplywebApplicationShow } from "./blackfridayApplywebApplication/BlackfridayApplywebApplicationShow";
import { CommitteeServiceList } from "./committeeService/CommitteeServiceList";
import { CommitteeServiceCreate } from "./committeeService/CommitteeServiceCreate";
import { CommitteeServiceEdit } from "./committeeService/CommitteeServiceEdit";
import { CommitteeServiceShow } from "./committeeService/CommitteeServiceShow";
import { ContactInformationList } from "./contactInformation/ContactInformationList";
import { ContactInformationCreate } from "./contactInformation/ContactInformationCreate";
import { ContactInformationEdit } from "./contactInformation/ContactInformationEdit";
import { ContactInformationShow } from "./contactInformation/ContactInformationShow";
import { CourseDepartmentList } from "./courseDepartment/CourseDepartmentList";
import { CourseDepartmentCreate } from "./courseDepartment/CourseDepartmentCreate";
import { CourseDepartmentEdit } from "./courseDepartment/CourseDepartmentEdit";
import { CourseDepartmentShow } from "./courseDepartment/CourseDepartmentShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { DegreeStatusList } from "./degreeStatus/DegreeStatusList";
import { DegreeStatusCreate } from "./degreeStatus/DegreeStatusCreate";
import { DegreeStatusEdit } from "./degreeStatus/DegreeStatusEdit";
import { DegreeStatusShow } from "./degreeStatus/DegreeStatusShow";
import { DepartmentMeetingList } from "./departmentMeeting/DepartmentMeetingList";
import { DepartmentMeetingCreate } from "./departmentMeeting/DepartmentMeetingCreate";
import { DepartmentMeetingEdit } from "./departmentMeeting/DepartmentMeetingEdit";
import { DepartmentMeetingShow } from "./departmentMeeting/DepartmentMeetingShow";
import { DepartmentSignatureList } from "./departmentSignature/DepartmentSignatureList";
import { DepartmentSignatureCreate } from "./departmentSignature/DepartmentSignatureCreate";
import { DepartmentSignatureEdit } from "./departmentSignature/DepartmentSignatureEdit";
import { DepartmentSignatureShow } from "./departmentSignature/DepartmentSignatureShow";
import { DepartmentSignatureImageList } from "./departmentSignatureImage/DepartmentSignatureImageList";
import { DepartmentSignatureImageCreate } from "./departmentSignatureImage/DepartmentSignatureImageCreate";
import { DepartmentSignatureImageEdit } from "./departmentSignatureImage/DepartmentSignatureImageEdit";
import { DepartmentSignatureImageShow } from "./departmentSignatureImage/DepartmentSignatureImageShow";
import { DocumentTemplatePartList } from "./documentTemplatePart/DocumentTemplatePartList";
import { DocumentTemplatePartCreate } from "./documentTemplatePart/DocumentTemplatePartCreate";
import { DocumentTemplatePartEdit } from "./documentTemplatePart/DocumentTemplatePartEdit";
import { DocumentTemplatePartShow } from "./documentTemplatePart/DocumentTemplatePartShow";
import { DocumentTemplateList } from "./documentTemplate/DocumentTemplateList";
import { DocumentTemplateCreate } from "./documentTemplate/DocumentTemplateCreate";
import { DocumentTemplateEdit } from "./documentTemplate/DocumentTemplateEdit";
import { DocumentTemplateShow } from "./documentTemplate/DocumentTemplateShow";
import { EmploymentList } from "./employment/EmploymentList";
import { EmploymentCreate } from "./employment/EmploymentCreate";
import { EmploymentEdit } from "./employment/EmploymentEdit";
import { EmploymentShow } from "./employment/EmploymentShow";
import { EvaluationLetterList } from "./evaluationLetter/EvaluationLetterList";
import { EvaluationLetterCreate } from "./evaluationLetter/EvaluationLetterCreate";
import { EvaluationLetterEdit } from "./evaluationLetter/EvaluationLetterEdit";
import { EvaluationLetterShow } from "./evaluationLetter/EvaluationLetterShow";
import { EvaluatorList } from "./evaluator/EvaluatorList";
import { EvaluatorCreate } from "./evaluator/EvaluatorCreate";
import { EvaluatorEdit } from "./evaluator/EvaluatorEdit";
import { EvaluatorShow } from "./evaluator/EvaluatorShow";
import { EventScheduleList } from "./eventSchedule/EventScheduleList";
import { EventScheduleCreate } from "./eventSchedule/EventScheduleCreate";
import { EventScheduleEdit } from "./eventSchedule/EventScheduleEdit";
import { EventScheduleShow } from "./eventSchedule/EventScheduleShow";
import { ExpNeuroReqList } from "./expNeuroReq/ExpNeuroReqList";
import { ExpNeuroReqCreate } from "./expNeuroReq/ExpNeuroReqCreate";
import { ExpNeuroReqEdit } from "./expNeuroReq/ExpNeuroReqEdit";
import { ExpNeuroReqShow } from "./expNeuroReq/ExpNeuroReqShow";
import { FacultyCertList } from "./facultyCert/FacultyCertList";
import { FacultyCertCreate } from "./facultyCert/FacultyCertCreate";
import { FacultyCertEdit } from "./facultyCert/FacultyCertEdit";
import { FacultyCertShow } from "./facultyCert/FacultyCertShow";
import { FacultyDatumList } from "./facultyDatum/FacultyDatumList";
import { FacultyDatumCreate } from "./facultyDatum/FacultyDatumCreate";
import { FacultyDatumEdit } from "./facultyDatum/FacultyDatumEdit";
import { FacultyDatumShow } from "./facultyDatum/FacultyDatumShow";
import { FellowshipTitleList } from "./fellowshipTitle/FellowshipTitleList";
import { FellowshipTitleCreate } from "./fellowshipTitle/FellowshipTitleCreate";
import { FellowshipTitleEdit } from "./fellowshipTitle/FellowshipTitleEdit";
import { FellowshipTitleShow } from "./fellowshipTitle/FellowshipTitleShow";
import { FellowshipList } from "./fellowship/FellowshipList";
import { FellowshipCreate } from "./fellowship/FellowshipCreate";
import { FellowshipEdit } from "./fellowship/FellowshipEdit";
import { FellowshipShow } from "./fellowship/FellowshipShow";
import { FileAccessLogList } from "./fileAccessLog/FileAccessLogList";
import { FileAccessLogCreate } from "./fileAccessLog/FileAccessLogCreate";
import { FileAccessLogEdit } from "./fileAccessLog/FileAccessLogEdit";
import { FileAccessLogShow } from "./fileAccessLog/FileAccessLogShow";
import { FundingList } from "./funding/FundingList";
import { FundingCreate } from "./funding/FundingCreate";
import { FundingEdit } from "./funding/FundingEdit";
import { FundingShow } from "./funding/FundingShow";
import { GeneralDatumList } from "./generalDatum/GeneralDatumList";
import { GeneralDatumCreate } from "./generalDatum/GeneralDatumCreate";
import { GeneralDatumEdit } from "./generalDatum/GeneralDatumEdit";
import { GeneralDatumShow } from "./generalDatum/GeneralDatumShow";
import { GreGeneralConvList } from "./greGeneralConv/GreGeneralConvList";
import { GreGeneralConvCreate } from "./greGeneralConv/GreGeneralConvCreate";
import { GreGeneralConvEdit } from "./greGeneralConv/GreGeneralConvEdit";
import { GreGeneralConvShow } from "./greGeneralConv/GreGeneralConvShow";
import { IccList } from "./icc/IccList";
import { IccCreate } from "./icc/IccCreate";
import { IccEdit } from "./icc/IccEdit";
import { IccShow } from "./icc/IccShow";
import { InstituteList } from "./institute/InstituteList";
import { InstituteCreate } from "./institute/InstituteCreate";
import { InstituteEdit } from "./institute/InstituteEdit";
import { InstituteShow } from "./institute/InstituteShow";
import { InstitutionList } from "./institution/InstitutionList";
import { InstitutionCreate } from "./institution/InstitutionCreate";
import { InstitutionEdit } from "./institution/InstitutionEdit";
import { InstitutionShow } from "./institution/InstitutionShow";
import { InstitutionsConsolList } from "./institutionsConsol/InstitutionsConsolList";
import { InstitutionsConsolCreate } from "./institutionsConsol/InstitutionsConsolCreate";
import { InstitutionsConsolEdit } from "./institutionsConsol/InstitutionsConsolEdit";
import { InstitutionsConsolShow } from "./institutionsConsol/InstitutionsConsolShow";
import { InternshipList } from "./internship/InternshipList";
import { InternshipCreate } from "./internship/InternshipCreate";
import { InternshipEdit } from "./internship/InternshipEdit";
import { InternshipShow } from "./internship/InternshipShow";
import { InternshipsCdList } from "./internshipsCd/InternshipsCdList";
import { InternshipsCdCreate } from "./internshipsCd/InternshipsCdCreate";
import { InternshipsCdEdit } from "./internshipsCd/InternshipsCdEdit";
import { InternshipsCdShow } from "./internshipsCd/InternshipsCdShow";
import { InternshipsIniList } from "./internshipsIni/InternshipsIniList";
import { InternshipsIniCreate } from "./internshipsIni/InternshipsIniCreate";
import { InternshipsIniEdit } from "./internshipsIni/InternshipsIniEdit";
import { InternshipsIniShow } from "./internshipsIni/InternshipsIniShow";
import { InternshipsIsrmList } from "./internshipsIsrm/InternshipsIsrmList";
import { InternshipsIsrmCreate } from "./internshipsIsrm/InternshipsIsrmCreate";
import { InternshipsIsrmEdit } from "./internshipsIsrm/InternshipsIsrmEdit";
import { InternshipsIsrmShow } from "./internshipsIsrm/InternshipsIsrmShow";
import { InterviewList } from "./interview/InterviewList";
import { InterviewCreate } from "./interview/InterviewCreate";
import { InterviewEdit } from "./interview/InterviewEdit";
import { InterviewShow } from "./interview/InterviewShow";
import { ItaList } from "./ita/ItaList";
import { ItaCreate } from "./ita/ItaCreate";
import { ItaEdit } from "./ita/ItaEdit";
import { ItaShow } from "./ita/ItaShow";
import { LeadershipList } from "./leadership/LeadershipList";
import { LeadershipCreate } from "./leadership/LeadershipCreate";
import { LeadershipEdit } from "./leadership/LeadershipEdit";
import { LeadershipShow } from "./leadership/LeadershipShow";
import { LegacyRequirementList } from "./legacyRequirement/LegacyRequirementList";
import { LegacyRequirementCreate } from "./legacyRequirement/LegacyRequirementCreate";
import { LegacyRequirementEdit } from "./legacyRequirement/LegacyRequirementEdit";
import { LegacyRequirementShow } from "./legacyRequirement/LegacyRequirementShow";
import { MeetingAgendumList } from "./meetingAgendum/MeetingAgendumList";
import { MeetingAgendumCreate } from "./meetingAgendum/MeetingAgendumCreate";
import { MeetingAgendumEdit } from "./meetingAgendum/MeetingAgendumEdit";
import { MeetingAgendumShow } from "./meetingAgendum/MeetingAgendumShow";
import { MeetingParameterList } from "./meetingParameter/MeetingParameterList";
import { MeetingParameterCreate } from "./meetingParameter/MeetingParameterCreate";
import { MeetingParameterEdit } from "./meetingParameter/MeetingParameterEdit";
import { MeetingParameterShow } from "./meetingParameter/MeetingParameterShow";
import { MeetingList } from "./meeting/MeetingList";
import { MeetingCreate } from "./meeting/MeetingCreate";
import { MeetingEdit } from "./meeting/MeetingEdit";
import { MeetingShow } from "./meeting/MeetingShow";
import { NewCourseDepartmentList } from "./newCourseDepartment/NewCourseDepartmentList";
import { NewCourseDepartmentCreate } from "./newCourseDepartment/NewCourseDepartmentCreate";
import { NewCourseDepartmentEdit } from "./newCourseDepartment/NewCourseDepartmentEdit";
import { NewCourseDepartmentShow } from "./newCourseDepartment/NewCourseDepartmentShow";
import { NewCourseList } from "./newCourse/NewCourseList";
import { NewCourseCreate } from "./newCourse/NewCourseCreate";
import { NewCourseEdit } from "./newCourse/NewCourseEdit";
import { NewCourseShow } from "./newCourse/NewCourseShow";
import { NoteList } from "./note/NoteList";
import { NoteCreate } from "./note/NoteCreate";
import { NoteEdit } from "./note/NoteEdit";
import { NoteShow } from "./note/NoteShow";
import { PracticumList } from "./practicum/PracticumList";
import { PracticumCreate } from "./practicum/PracticumCreate";
import { PracticumEdit } from "./practicum/PracticumEdit";
import { PracticumShow } from "./practicum/PracticumShow";
import { PresentationList } from "./presentation/PresentationList";
import { PresentationCreate } from "./presentation/PresentationCreate";
import { PresentationEdit } from "./presentation/PresentationEdit";
import { PresentationShow } from "./presentation/PresentationShow";
import { ProgramStatusList } from "./programStatus/ProgramStatusList";
import { ProgramStatusCreate } from "./programStatus/ProgramStatusCreate";
import { ProgramStatusEdit } from "./programStatus/ProgramStatusEdit";
import { ProgramStatusShow } from "./programStatus/ProgramStatusShow";
import { ProjectTopicList } from "./projectTopic/ProjectTopicList";
import { ProjectTopicCreate } from "./projectTopic/ProjectTopicCreate";
import { ProjectTopicEdit } from "./projectTopic/ProjectTopicEdit";
import { ProjectTopicShow } from "./projectTopic/ProjectTopicShow";
import { PsyProjectReqList } from "./psyProjectReq/PsyProjectReqList";
import { PsyProjectReqCreate } from "./psyProjectReq/PsyProjectReqCreate";
import { PsyProjectReqEdit } from "./psyProjectReq/PsyProjectReqEdit";
import { PsyProjectReqShow } from "./psyProjectReq/PsyProjectReqShow";
import { QualsCommitteeList } from "./qualsCommittee/QualsCommitteeList";
import { QualsCommitteeCreate } from "./qualsCommittee/QualsCommitteeCreate";
import { QualsCommitteeEdit } from "./qualsCommittee/QualsCommitteeEdit";
import { QualsCommitteeShow } from "./qualsCommittee/QualsCommitteeShow";
import { QualsResearchList } from "./qualsResearch/QualsResearchList";
import { QualsResearchCreate } from "./qualsResearch/QualsResearchCreate";
import { QualsResearchEdit } from "./qualsResearch/QualsResearchEdit";
import { QualsResearchShow } from "./qualsResearch/QualsResearchShow";
import { QualsResearchForOtherStudentList } from "./qualsResearchForOtherStudent/QualsResearchForOtherStudentList";
import { QualsResearchForOtherStudentCreate } from "./qualsResearchForOtherStudent/QualsResearchForOtherStudentCreate";
import { QualsResearchForOtherStudentEdit } from "./qualsResearchForOtherStudent/QualsResearchForOtherStudentEdit";
import { QualsResearchForOtherStudentShow } from "./qualsResearchForOtherStudent/QualsResearchForOtherStudentShow";
import { QualsSpeakingList } from "./qualsSpeaking/QualsSpeakingList";
import { QualsSpeakingCreate } from "./qualsSpeaking/QualsSpeakingCreate";
import { QualsSpeakingEdit } from "./qualsSpeaking/QualsSpeakingEdit";
import { QualsSpeakingShow } from "./qualsSpeaking/QualsSpeakingShow";
import { QualsSpeakingAspectList } from "./qualsSpeakingAspect/QualsSpeakingAspectList";
import { QualsSpeakingAspectCreate } from "./qualsSpeakingAspect/QualsSpeakingAspectCreate";
import { QualsSpeakingAspectEdit } from "./qualsSpeakingAspect/QualsSpeakingAspectEdit";
import { QualsSpeakingAspectShow } from "./qualsSpeakingAspect/QualsSpeakingAspectShow";
import { QualsWritingList } from "./qualsWriting/QualsWritingList";
import { QualsWritingCreate } from "./qualsWriting/QualsWritingCreate";
import { QualsWritingEdit } from "./qualsWriting/QualsWritingEdit";
import { QualsWritingShow } from "./qualsWriting/QualsWritingShow";
import { QualsWritingAspectList } from "./qualsWritingAspect/QualsWritingAspectList";
import { QualsWritingAspectCreate } from "./qualsWritingAspect/QualsWritingAspectCreate";
import { QualsWritingAspectEdit } from "./qualsWritingAspect/QualsWritingAspectEdit";
import { QualsWritingAspectShow } from "./qualsWritingAspect/QualsWritingAspectShow";
import { RawDatumList } from "./rawDatum/RawDatumList";
import { RawDatumCreate } from "./rawDatum/RawDatumCreate";
import { RawDatumEdit } from "./rawDatum/RawDatumEdit";
import { RawDatumShow } from "./rawDatum/RawDatumShow";
import { RawDataLetterList } from "./rawDataLetter/RawDataLetterList";
import { RawDataLetterCreate } from "./rawDataLetter/RawDataLetterCreate";
import { RawDataLetterEdit } from "./rawDataLetter/RawDataLetterEdit";
import { RawDataLetterShow } from "./rawDataLetter/RawDataLetterShow";
import { ReportColumnList } from "./reportColumn/ReportColumnList";
import { ReportColumnCreate } from "./reportColumn/ReportColumnCreate";
import { ReportColumnEdit } from "./reportColumn/ReportColumnEdit";
import { ReportColumnShow } from "./reportColumn/ReportColumnShow";
import { ReportDeptVisibilityList } from "./reportDeptVisibility/ReportDeptVisibilityList";
import { ReportDeptVisibilityCreate } from "./reportDeptVisibility/ReportDeptVisibilityCreate";
import { ReportDeptVisibilityEdit } from "./reportDeptVisibility/ReportDeptVisibilityEdit";
import { ReportDeptVisibilityShow } from "./reportDeptVisibility/ReportDeptVisibilityShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { ResponsibleConductOfResearchList } from "./responsibleConductOfResearch/ResponsibleConductOfResearchList";
import { ResponsibleConductOfResearchCreate } from "./responsibleConductOfResearch/ResponsibleConductOfResearchCreate";
import { ResponsibleConductOfResearchEdit } from "./responsibleConductOfResearch/ResponsibleConductOfResearchEdit";
import { ResponsibleConductOfResearchShow } from "./responsibleConductOfResearch/ResponsibleConductOfResearchShow";
import { ReviewPeriodReferenceList } from "./reviewPeriodReference/ReviewPeriodReferenceList";
import { ReviewPeriodReferenceCreate } from "./reviewPeriodReference/ReviewPeriodReferenceCreate";
import { ReviewPeriodReferenceEdit } from "./reviewPeriodReference/ReviewPeriodReferenceEdit";
import { ReviewPeriodReferenceShow } from "./reviewPeriodReference/ReviewPeriodReferenceShow";
import { RotationList } from "./rotation/RotationList";
import { RotationCreate } from "./rotation/RotationCreate";
import { RotationEdit } from "./rotation/RotationEdit";
import { RotationShow } from "./rotation/RotationShow";
import { ScheduledMeetingList } from "./scheduledMeeting/ScheduledMeetingList";
import { ScheduledMeetingCreate } from "./scheduledMeeting/ScheduledMeetingCreate";
import { ScheduledMeetingEdit } from "./scheduledMeeting/ScheduledMeetingEdit";
import { ScheduledMeetingShow } from "./scheduledMeeting/ScheduledMeetingShow";
import { SemesterDateOverrideList } from "./semesterDateOverride/SemesterDateOverrideList";
import { SemesterDateOverrideCreate } from "./semesterDateOverride/SemesterDateOverrideCreate";
import { SemesterDateOverrideEdit } from "./semesterDateOverride/SemesterDateOverrideEdit";
import { SemesterDateOverrideShow } from "./semesterDateOverride/SemesterDateOverrideShow";
import { SemesterDateList } from "./semesterDate/SemesterDateList";
import { SemesterDateCreate } from "./semesterDate/SemesterDateCreate";
import { SemesterDateEdit } from "./semesterDate/SemesterDateEdit";
import { SemesterDateShow } from "./semesterDate/SemesterDateShow";
import { SemesterReferenceList } from "./semesterReference/SemesterReferenceList";
import { SemesterReferenceCreate } from "./semesterReference/SemesterReferenceCreate";
import { SemesterReferenceEdit } from "./semesterReference/SemesterReferenceEdit";
import { SemesterReferenceShow } from "./semesterReference/SemesterReferenceShow";
import { StatementList } from "./statement/StatementList";
import { StatementCreate } from "./statement/StatementCreate";
import { StatementEdit } from "./statement/StatementEdit";
import { StatementShow } from "./statement/StatementShow";
import { StudentAdvisorList } from "./studentAdvisor/StudentAdvisorList";
import { StudentAdvisorCreate } from "./studentAdvisor/StudentAdvisorCreate";
import { StudentAdvisorEdit } from "./studentAdvisor/StudentAdvisorEdit";
import { StudentAdvisorShow } from "./studentAdvisor/StudentAdvisorShow";
import { StudentAppList } from "./studentApp/StudentAppList";
import { StudentAppCreate } from "./studentApp/StudentAppCreate";
import { StudentAppEdit } from "./studentApp/StudentAppEdit";
import { StudentAppShow } from "./studentApp/StudentAppShow";
import { StudentCommitteeMeetingList } from "./studentCommitteeMeeting/StudentCommitteeMeetingList";
import { StudentCommitteeMeetingCreate } from "./studentCommitteeMeeting/StudentCommitteeMeetingCreate";
import { StudentCommitteeMeetingEdit } from "./studentCommitteeMeeting/StudentCommitteeMeetingEdit";
import { StudentCommitteeMeetingShow } from "./studentCommitteeMeeting/StudentCommitteeMeetingShow";
import { StudentCourseList } from "./studentCourse/StudentCourseList";
import { StudentCourseCreate } from "./studentCourse/StudentCourseCreate";
import { StudentCourseEdit } from "./studentCourse/StudentCourseEdit";
import { StudentCourseShow } from "./studentCourse/StudentCourseShow";
import { StudentDatumList } from "./studentDatum/StudentDatumList";
import { StudentDatumCreate } from "./studentDatum/StudentDatumCreate";
import { StudentDatumEdit } from "./studentDatum/StudentDatumEdit";
import { StudentDatumShow } from "./studentDatum/StudentDatumShow";
import { StudentDataHciiList } from "./studentDataHcii/StudentDataHciiList";
import { StudentDataHciiCreate } from "./studentDataHcii/StudentDataHciiCreate";
import { StudentDataHciiEdit } from "./studentDataHcii/StudentDataHciiEdit";
import { StudentDataHciiShow } from "./studentDataHcii/StudentDataHciiShow";
import { StudentDataIniList } from "./studentDataIni/StudentDataIniList";
import { StudentDataIniCreate } from "./studentDataIni/StudentDataIniCreate";
import { StudentDataIniEdit } from "./studentDataIni/StudentDataIniEdit";
import { StudentDataIniShow } from "./studentDataIni/StudentDataIniShow";
import { StudentDataMlList } from "./studentDataMl/StudentDataMlList";
import { StudentDataMlCreate } from "./studentDataMl/StudentDataMlCreate";
import { StudentDataMlEdit } from "./studentDataMl/StudentDataMlEdit";
import { StudentDataMlShow } from "./studentDataMl/StudentDataMlShow";
import { StudentDataRiList } from "./studentDataRi/StudentDataRiList";
import { StudentDataRiCreate } from "./studentDataRi/StudentDataRiCreate";
import { StudentDataRiEdit } from "./studentDataRi/StudentDataRiEdit";
import { StudentDataRiShow } from "./studentDataRi/StudentDataRiShow";
import { StudentDocumentPartList } from "./studentDocumentPart/StudentDocumentPartList";
import { StudentDocumentPartCreate } from "./studentDocumentPart/StudentDocumentPartCreate";
import { StudentDocumentPartEdit } from "./studentDocumentPart/StudentDocumentPartEdit";
import { StudentDocumentPartShow } from "./studentDocumentPart/StudentDocumentPartShow";
import { StudentDocumentList } from "./studentDocument/StudentDocumentList";
import { StudentDocumentCreate } from "./studentDocument/StudentDocumentCreate";
import { StudentDocumentEdit } from "./studentDocument/StudentDocumentEdit";
import { StudentDocumentShow } from "./studentDocument/StudentDocumentShow";
import { StudentFileList } from "./studentFile/StudentFileList";
import { StudentFileCreate } from "./studentFile/StudentFileCreate";
import { StudentFileEdit } from "./studentFile/StudentFileEdit";
import { StudentFileShow } from "./studentFile/StudentFileShow";
import { StudentInstituteList } from "./studentInstitute/StudentInstituteList";
import { StudentInstituteCreate } from "./studentInstitute/StudentInstituteCreate";
import { StudentInstituteEdit } from "./studentInstitute/StudentInstituteEdit";
import { StudentInstituteShow } from "./studentInstitute/StudentInstituteShow";
import { StudentMentorList } from "./studentMentor/StudentMentorList";
import { StudentMentorCreate } from "./studentMentor/StudentMentorCreate";
import { StudentMentorEdit } from "./studentMentor/StudentMentorEdit";
import { StudentMentorShow } from "./studentMentor/StudentMentorShow";
import { StudentOverrideList } from "./studentOverride/StudentOverrideList";
import { StudentOverrideCreate } from "./studentOverride/StudentOverrideCreate";
import { StudentOverrideEdit } from "./studentOverride/StudentOverrideEdit";
import { StudentOverrideShow } from "./studentOverride/StudentOverrideShow";
import { StudentPubList } from "./studentPub/StudentPubList";
import { StudentPubCreate } from "./studentPub/StudentPubCreate";
import { StudentPubEdit } from "./studentPub/StudentPubEdit";
import { StudentPubShow } from "./studentPub/StudentPubShow";
import { StudentResidencyList } from "./studentResidency/StudentResidencyList";
import { StudentResidencyCreate } from "./studentResidency/StudentResidencyCreate";
import { StudentResidencyEdit } from "./studentResidency/StudentResidencyEdit";
import { StudentResidencyShow } from "./studentResidency/StudentResidencyShow";
import { StudentSkillList } from "./studentSkill/StudentSkillList";
import { StudentSkillCreate } from "./studentSkill/StudentSkillCreate";
import { StudentSkillEdit } from "./studentSkill/StudentSkillEdit";
import { StudentSkillShow } from "./studentSkill/StudentSkillShow";
import { TeachingReqList } from "./teachingReq/TeachingReqList";
import { TeachingReqCreate } from "./teachingReq/TeachingReqCreate";
import { TeachingReqEdit } from "./teachingReq/TeachingReqEdit";
import { TeachingReqShow } from "./teachingReq/TeachingReqShow";
import { ThesisCommitteeList } from "./thesisCommittee/ThesisCommitteeList";
import { ThesisCommitteeCreate } from "./thesisCommittee/ThesisCommitteeCreate";
import { ThesisCommitteeEdit } from "./thesisCommittee/ThesisCommitteeEdit";
import { ThesisCommitteeShow } from "./thesisCommittee/ThesisCommitteeShow";
import { ThesisTopicList } from "./thesisTopic/ThesisTopicList";
import { ThesisTopicCreate } from "./thesisTopic/ThesisTopicCreate";
import { ThesisTopicEdit } from "./thesisTopic/ThesisTopicEdit";
import { ThesisTopicShow } from "./thesisTopic/ThesisTopicShow";
import { UserAccessList } from "./userAccess/UserAccessList";
import { UserAccessCreate } from "./userAccess/UserAccessCreate";
import { UserAccessEdit } from "./userAccess/UserAccessEdit";
import { UserAccessShow } from "./userAccess/UserAccessShow";
import { UserHostList } from "./userHost/UserHostList";
import { UserHostCreate } from "./userHost/UserHostCreate";
import { UserHostEdit } from "./userHost/UserHostEdit";
import { UserHostShow } from "./userHost/UserHostShow";
import { UserRoleList } from "./userRole/UserRoleList";
import { UserRoleCreate } from "./userRole/UserRoleCreate";
import { UserRoleEdit } from "./userRole/UserRoleEdit";
import { UserRoleShow } from "./userRole/UserRoleShow";
import { UserRoleLookupList } from "./userRoleLookup/UserRoleLookupList";
import { UserRoleLookupCreate } from "./userRoleLookup/UserRoleLookupCreate";
import { UserRoleLookupEdit } from "./userRoleLookup/UserRoleLookupEdit";
import { UserRoleLookupShow } from "./userRoleLookup/UserRoleLookupShow";
import { UserRoleProgramList } from "./userRoleProgram/UserRoleProgramList";
import { UserRoleProgramCreate } from "./userRoleProgram/UserRoleProgramCreate";
import { UserRoleProgramEdit } from "./userRoleProgram/UserRoleProgramEdit";
import { UserRoleProgramShow } from "./userRoleProgram/UserRoleProgramShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UsersOverrideList } from "./usersOverride/UsersOverrideList";
import { UsersOverrideCreate } from "./usersOverride/UsersOverrideCreate";
import { UsersOverrideEdit } from "./usersOverride/UsersOverrideEdit";
import { UsersOverrideShow } from "./usersOverride/UsersOverrideShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"cmu import"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Advisor"
          list={AdvisorList}
          edit={AdvisorEdit}
          create={AdvisorCreate}
          show={AdvisorShow}
        />
        <Resource
          name="AdvisorsCopy"
          list={AdvisorsCopyList}
          edit={AdvisorsCopyEdit}
          create={AdvisorsCopyCreate}
          show={AdvisorsCopyShow}
        />
        <Resource
          name="AgendaItem"
          list={AgendaItemList}
          edit={AgendaItemEdit}
          create={AgendaItemCreate}
          show={AgendaItemShow}
        />
        <Resource
          name="Agenda"
          list={AgendaList}
          edit={AgendaEdit}
          create={AgendaCreate}
          show={AgendaShow}
        />
        <Resource
          name="ApplywebApplication"
          list={ApplywebApplicationList}
          edit={ApplywebApplicationEdit}
          create={ApplywebApplicationCreate}
          show={ApplywebApplicationShow}
        />
        <Resource
          name="ApplywebStudentMigrationDatum"
          list={ApplywebStudentMigrationDatumList}
          edit={ApplywebStudentMigrationDatumEdit}
          create={ApplywebStudentMigrationDatumCreate}
          show={ApplywebStudentMigrationDatumShow}
        />
        <Resource
          name="Area"
          list={AreaList}
          edit={AreaEdit}
          create={AreaCreate}
          show={AreaShow}
        />
        <Resource
          name="Award"
          list={AwardList}
          edit={AwardEdit}
          create={AwardCreate}
          show={AwardShow}
        />
        <Resource
          name="BlackfridayApplywebApplication"
          list={BlackfridayApplywebApplicationList}
          edit={BlackfridayApplywebApplicationEdit}
          create={BlackfridayApplywebApplicationCreate}
          show={BlackfridayApplywebApplicationShow}
        />
        <Resource
          name="CommitteeService"
          list={CommitteeServiceList}
          edit={CommitteeServiceEdit}
          create={CommitteeServiceCreate}
          show={CommitteeServiceShow}
        />
        <Resource
          name="ContactInformation"
          list={ContactInformationList}
          edit={ContactInformationEdit}
          create={ContactInformationCreate}
          show={ContactInformationShow}
        />
        <Resource
          name="CourseDepartment"
          list={CourseDepartmentList}
          edit={CourseDepartmentEdit}
          create={CourseDepartmentCreate}
          show={CourseDepartmentShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="DegreeStatus"
          list={DegreeStatusList}
          edit={DegreeStatusEdit}
          create={DegreeStatusCreate}
          show={DegreeStatusShow}
        />
        <Resource
          name="DepartmentMeeting"
          list={DepartmentMeetingList}
          edit={DepartmentMeetingEdit}
          create={DepartmentMeetingCreate}
          show={DepartmentMeetingShow}
        />
        <Resource
          name="DepartmentSignature"
          list={DepartmentSignatureList}
          edit={DepartmentSignatureEdit}
          create={DepartmentSignatureCreate}
          show={DepartmentSignatureShow}
        />
        <Resource
          name="DepartmentSignatureImage"
          list={DepartmentSignatureImageList}
          edit={DepartmentSignatureImageEdit}
          create={DepartmentSignatureImageCreate}
          show={DepartmentSignatureImageShow}
        />
        <Resource
          name="DocumentTemplatePart"
          list={DocumentTemplatePartList}
          edit={DocumentTemplatePartEdit}
          create={DocumentTemplatePartCreate}
          show={DocumentTemplatePartShow}
        />
        <Resource
          name="DocumentTemplate"
          list={DocumentTemplateList}
          edit={DocumentTemplateEdit}
          create={DocumentTemplateCreate}
          show={DocumentTemplateShow}
        />
        <Resource
          name="Employment"
          list={EmploymentList}
          edit={EmploymentEdit}
          create={EmploymentCreate}
          show={EmploymentShow}
        />
        <Resource
          name="EvaluationLetter"
          list={EvaluationLetterList}
          edit={EvaluationLetterEdit}
          create={EvaluationLetterCreate}
          show={EvaluationLetterShow}
        />
        <Resource
          name="Evaluator"
          list={EvaluatorList}
          edit={EvaluatorEdit}
          create={EvaluatorCreate}
          show={EvaluatorShow}
        />
        <Resource
          name="EventSchedule"
          list={EventScheduleList}
          edit={EventScheduleEdit}
          create={EventScheduleCreate}
          show={EventScheduleShow}
        />
        <Resource
          name="ExpNeuroReq"
          list={ExpNeuroReqList}
          edit={ExpNeuroReqEdit}
          create={ExpNeuroReqCreate}
          show={ExpNeuroReqShow}
        />
        <Resource
          name="FacultyCert"
          list={FacultyCertList}
          edit={FacultyCertEdit}
          create={FacultyCertCreate}
          show={FacultyCertShow}
        />
        <Resource
          name="FacultyDatum"
          list={FacultyDatumList}
          edit={FacultyDatumEdit}
          create={FacultyDatumCreate}
          show={FacultyDatumShow}
        />
        <Resource
          name="FellowshipTitle"
          list={FellowshipTitleList}
          edit={FellowshipTitleEdit}
          create={FellowshipTitleCreate}
          show={FellowshipTitleShow}
        />
        <Resource
          name="Fellowship"
          list={FellowshipList}
          edit={FellowshipEdit}
          create={FellowshipCreate}
          show={FellowshipShow}
        />
        <Resource
          name="FileAccessLog"
          list={FileAccessLogList}
          edit={FileAccessLogEdit}
          create={FileAccessLogCreate}
          show={FileAccessLogShow}
        />
        <Resource
          name="Funding"
          list={FundingList}
          edit={FundingEdit}
          create={FundingCreate}
          show={FundingShow}
        />
        <Resource
          name="GeneralDatum"
          list={GeneralDatumList}
          edit={GeneralDatumEdit}
          create={GeneralDatumCreate}
          show={GeneralDatumShow}
        />
        <Resource
          name="GreGeneralConv"
          list={GreGeneralConvList}
          edit={GreGeneralConvEdit}
          create={GreGeneralConvCreate}
          show={GreGeneralConvShow}
        />
        <Resource
          name="Icc"
          list={IccList}
          edit={IccEdit}
          create={IccCreate}
          show={IccShow}
        />
        <Resource
          name="Institute"
          list={InstituteList}
          edit={InstituteEdit}
          create={InstituteCreate}
          show={InstituteShow}
        />
        <Resource
          name="Institution"
          list={InstitutionList}
          edit={InstitutionEdit}
          create={InstitutionCreate}
          show={InstitutionShow}
        />
        <Resource
          name="InstitutionsConsol"
          list={InstitutionsConsolList}
          edit={InstitutionsConsolEdit}
          create={InstitutionsConsolCreate}
          show={InstitutionsConsolShow}
        />
        <Resource
          name="Internship"
          list={InternshipList}
          edit={InternshipEdit}
          create={InternshipCreate}
          show={InternshipShow}
        />
        <Resource
          name="InternshipsCd"
          list={InternshipsCdList}
          edit={InternshipsCdEdit}
          create={InternshipsCdCreate}
          show={InternshipsCdShow}
        />
        <Resource
          name="InternshipsIni"
          list={InternshipsIniList}
          edit={InternshipsIniEdit}
          create={InternshipsIniCreate}
          show={InternshipsIniShow}
        />
        <Resource
          name="InternshipsIsrm"
          list={InternshipsIsrmList}
          edit={InternshipsIsrmEdit}
          create={InternshipsIsrmCreate}
          show={InternshipsIsrmShow}
        />
        <Resource
          name="Interview"
          list={InterviewList}
          edit={InterviewEdit}
          create={InterviewCreate}
          show={InterviewShow}
        />
        <Resource
          name="Ita"
          list={ItaList}
          edit={ItaEdit}
          create={ItaCreate}
          show={ItaShow}
        />
        <Resource
          name="Leadership"
          list={LeadershipList}
          edit={LeadershipEdit}
          create={LeadershipCreate}
          show={LeadershipShow}
        />
        <Resource
          name="LegacyRequirement"
          list={LegacyRequirementList}
          edit={LegacyRequirementEdit}
          create={LegacyRequirementCreate}
          show={LegacyRequirementShow}
        />
        <Resource
          name="MeetingAgendum"
          list={MeetingAgendumList}
          edit={MeetingAgendumEdit}
          create={MeetingAgendumCreate}
          show={MeetingAgendumShow}
        />
        <Resource
          name="MeetingParameter"
          list={MeetingParameterList}
          edit={MeetingParameterEdit}
          create={MeetingParameterCreate}
          show={MeetingParameterShow}
        />
        <Resource
          name="Meeting"
          list={MeetingList}
          edit={MeetingEdit}
          create={MeetingCreate}
          show={MeetingShow}
        />
        <Resource
          name="NewCourseDepartment"
          list={NewCourseDepartmentList}
          edit={NewCourseDepartmentEdit}
          create={NewCourseDepartmentCreate}
          show={NewCourseDepartmentShow}
        />
        <Resource
          name="NewCourse"
          list={NewCourseList}
          edit={NewCourseEdit}
          create={NewCourseCreate}
          show={NewCourseShow}
        />
        <Resource
          name="Note"
          list={NoteList}
          edit={NoteEdit}
          create={NoteCreate}
          show={NoteShow}
        />
        <Resource
          name="Practicum"
          list={PracticumList}
          edit={PracticumEdit}
          create={PracticumCreate}
          show={PracticumShow}
        />
        <Resource
          name="Presentation"
          list={PresentationList}
          edit={PresentationEdit}
          create={PresentationCreate}
          show={PresentationShow}
        />
        <Resource
          name="ProgramStatus"
          list={ProgramStatusList}
          edit={ProgramStatusEdit}
          create={ProgramStatusCreate}
          show={ProgramStatusShow}
        />
        <Resource
          name="ProjectTopic"
          list={ProjectTopicList}
          edit={ProjectTopicEdit}
          create={ProjectTopicCreate}
          show={ProjectTopicShow}
        />
        <Resource
          name="PsyProjectReq"
          list={PsyProjectReqList}
          edit={PsyProjectReqEdit}
          create={PsyProjectReqCreate}
          show={PsyProjectReqShow}
        />
        <Resource
          name="QualsCommittee"
          list={QualsCommitteeList}
          edit={QualsCommitteeEdit}
          create={QualsCommitteeCreate}
          show={QualsCommitteeShow}
        />
        <Resource
          name="QualsResearch"
          list={QualsResearchList}
          edit={QualsResearchEdit}
          create={QualsResearchCreate}
          show={QualsResearchShow}
        />
        <Resource
          name="QualsResearchForOtherStudent"
          list={QualsResearchForOtherStudentList}
          edit={QualsResearchForOtherStudentEdit}
          create={QualsResearchForOtherStudentCreate}
          show={QualsResearchForOtherStudentShow}
        />
        <Resource
          name="QualsSpeaking"
          list={QualsSpeakingList}
          edit={QualsSpeakingEdit}
          create={QualsSpeakingCreate}
          show={QualsSpeakingShow}
        />
        <Resource
          name="QualsSpeakingAspect"
          list={QualsSpeakingAspectList}
          edit={QualsSpeakingAspectEdit}
          create={QualsSpeakingAspectCreate}
          show={QualsSpeakingAspectShow}
        />
        <Resource
          name="QualsWriting"
          list={QualsWritingList}
          edit={QualsWritingEdit}
          create={QualsWritingCreate}
          show={QualsWritingShow}
        />
        <Resource
          name="QualsWritingAspect"
          list={QualsWritingAspectList}
          edit={QualsWritingAspectEdit}
          create={QualsWritingAspectCreate}
          show={QualsWritingAspectShow}
        />
        <Resource
          name="RawDatum"
          list={RawDatumList}
          edit={RawDatumEdit}
          create={RawDatumCreate}
          show={RawDatumShow}
        />
        <Resource
          name="RawDataLetter"
          list={RawDataLetterList}
          edit={RawDataLetterEdit}
          create={RawDataLetterCreate}
          show={RawDataLetterShow}
        />
        <Resource
          name="ReportColumn"
          list={ReportColumnList}
          edit={ReportColumnEdit}
          create={ReportColumnCreate}
          show={ReportColumnShow}
        />
        <Resource
          name="ReportDeptVisibility"
          list={ReportDeptVisibilityList}
          edit={ReportDeptVisibilityEdit}
          create={ReportDeptVisibilityCreate}
          show={ReportDeptVisibilityShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="ResponsibleConductOfResearch"
          list={ResponsibleConductOfResearchList}
          edit={ResponsibleConductOfResearchEdit}
          create={ResponsibleConductOfResearchCreate}
          show={ResponsibleConductOfResearchShow}
        />
        <Resource
          name="ReviewPeriodReference"
          list={ReviewPeriodReferenceList}
          edit={ReviewPeriodReferenceEdit}
          create={ReviewPeriodReferenceCreate}
          show={ReviewPeriodReferenceShow}
        />
        <Resource
          name="Rotation"
          list={RotationList}
          edit={RotationEdit}
          create={RotationCreate}
          show={RotationShow}
        />
        <Resource
          name="ScheduledMeeting"
          list={ScheduledMeetingList}
          edit={ScheduledMeetingEdit}
          create={ScheduledMeetingCreate}
          show={ScheduledMeetingShow}
        />
        <Resource
          name="SemesterDateOverride"
          list={SemesterDateOverrideList}
          edit={SemesterDateOverrideEdit}
          create={SemesterDateOverrideCreate}
          show={SemesterDateOverrideShow}
        />
        <Resource
          name="SemesterDate"
          list={SemesterDateList}
          edit={SemesterDateEdit}
          create={SemesterDateCreate}
          show={SemesterDateShow}
        />
        <Resource
          name="SemesterReference"
          list={SemesterReferenceList}
          edit={SemesterReferenceEdit}
          create={SemesterReferenceCreate}
          show={SemesterReferenceShow}
        />
        <Resource
          name="Statement"
          list={StatementList}
          edit={StatementEdit}
          create={StatementCreate}
          show={StatementShow}
        />
        <Resource
          name="StudentAdvisor"
          list={StudentAdvisorList}
          edit={StudentAdvisorEdit}
          create={StudentAdvisorCreate}
          show={StudentAdvisorShow}
        />
        <Resource
          name="StudentApp"
          list={StudentAppList}
          edit={StudentAppEdit}
          create={StudentAppCreate}
          show={StudentAppShow}
        />
        <Resource
          name="StudentCommitteeMeeting"
          list={StudentCommitteeMeetingList}
          edit={StudentCommitteeMeetingEdit}
          create={StudentCommitteeMeetingCreate}
          show={StudentCommitteeMeetingShow}
        />
        <Resource
          name="StudentCourse"
          list={StudentCourseList}
          edit={StudentCourseEdit}
          create={StudentCourseCreate}
          show={StudentCourseShow}
        />
        <Resource
          name="StudentDatum"
          list={StudentDatumList}
          edit={StudentDatumEdit}
          create={StudentDatumCreate}
          show={StudentDatumShow}
        />
        <Resource
          name="StudentDataHcii"
          list={StudentDataHciiList}
          edit={StudentDataHciiEdit}
          create={StudentDataHciiCreate}
          show={StudentDataHciiShow}
        />
        <Resource
          name="StudentDataIni"
          list={StudentDataIniList}
          edit={StudentDataIniEdit}
          create={StudentDataIniCreate}
          show={StudentDataIniShow}
        />
        <Resource
          name="StudentDataMl"
          list={StudentDataMlList}
          edit={StudentDataMlEdit}
          create={StudentDataMlCreate}
          show={StudentDataMlShow}
        />
        <Resource
          name="StudentDataRi"
          list={StudentDataRiList}
          edit={StudentDataRiEdit}
          create={StudentDataRiCreate}
          show={StudentDataRiShow}
        />
        <Resource
          name="StudentDocumentPart"
          list={StudentDocumentPartList}
          edit={StudentDocumentPartEdit}
          create={StudentDocumentPartCreate}
          show={StudentDocumentPartShow}
        />
        <Resource
          name="StudentDocument"
          list={StudentDocumentList}
          edit={StudentDocumentEdit}
          create={StudentDocumentCreate}
          show={StudentDocumentShow}
        />
        <Resource
          name="StudentFile"
          list={StudentFileList}
          edit={StudentFileEdit}
          create={StudentFileCreate}
          show={StudentFileShow}
        />
        <Resource
          name="StudentInstitute"
          list={StudentInstituteList}
          edit={StudentInstituteEdit}
          create={StudentInstituteCreate}
          show={StudentInstituteShow}
        />
        <Resource
          name="StudentMentor"
          list={StudentMentorList}
          edit={StudentMentorEdit}
          create={StudentMentorCreate}
          show={StudentMentorShow}
        />
        <Resource
          name="StudentOverride"
          list={StudentOverrideList}
          edit={StudentOverrideEdit}
          create={StudentOverrideCreate}
          show={StudentOverrideShow}
        />
        <Resource
          name="StudentPub"
          list={StudentPubList}
          edit={StudentPubEdit}
          create={StudentPubCreate}
          show={StudentPubShow}
        />
        <Resource
          name="StudentResidency"
          list={StudentResidencyList}
          edit={StudentResidencyEdit}
          create={StudentResidencyCreate}
          show={StudentResidencyShow}
        />
        <Resource
          name="StudentSkill"
          list={StudentSkillList}
          edit={StudentSkillEdit}
          create={StudentSkillCreate}
          show={StudentSkillShow}
        />
        <Resource
          name="TeachingReq"
          list={TeachingReqList}
          edit={TeachingReqEdit}
          create={TeachingReqCreate}
          show={TeachingReqShow}
        />
        <Resource
          name="ThesisCommittee"
          list={ThesisCommitteeList}
          edit={ThesisCommitteeEdit}
          create={ThesisCommitteeCreate}
          show={ThesisCommitteeShow}
        />
        <Resource
          name="ThesisTopic"
          list={ThesisTopicList}
          edit={ThesisTopicEdit}
          create={ThesisTopicCreate}
          show={ThesisTopicShow}
        />
        <Resource
          name="UserAccess"
          list={UserAccessList}
          edit={UserAccessEdit}
          create={UserAccessCreate}
          show={UserAccessShow}
        />
        <Resource
          name="UserHost"
          list={UserHostList}
          edit={UserHostEdit}
          create={UserHostCreate}
          show={UserHostShow}
        />
        <Resource
          name="UserRole"
          list={UserRoleList}
          edit={UserRoleEdit}
          create={UserRoleCreate}
          show={UserRoleShow}
        />
        <Resource
          name="UserRoleLookup"
          list={UserRoleLookupList}
          edit={UserRoleLookupEdit}
          create={UserRoleLookupCreate}
          show={UserRoleLookupShow}
        />
        <Resource
          name="UserRoleProgram"
          list={UserRoleProgramList}
          edit={UserRoleProgramEdit}
          create={UserRoleProgramCreate}
          show={UserRoleProgramShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UsersOverride"
          list={UsersOverrideList}
          edit={UsersOverrideEdit}
          create={UsersOverrideCreate}
          show={UsersOverrideShow}
        />
      </Admin>
    </div>
  );
};

export default App;
