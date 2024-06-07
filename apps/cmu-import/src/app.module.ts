import { Module } from "@nestjs/common";
import { AdvisorModule } from "./advisor/advisor.module";
import { AdvisorsCopyModule } from "./advisorsCopy/advisorsCopy.module";
import { AgendaItemModule } from "./agendaItem/agendaItem.module";
import { AgendaModule } from "./agenda/agenda.module";
import { ApplywebApplicationModule } from "./applywebApplication/applywebApplication.module";
import { ApplywebStudentMigrationDatumModule } from "./applywebStudentMigrationDatum/applywebStudentMigrationDatum.module";
import { AreaModule } from "./area/area.module";
import { AwardModule } from "./award/award.module";
import { BlackfridayApplywebApplicationModule } from "./blackfridayApplywebApplication/blackfridayApplywebApplication.module";
import { CommitteeServiceModule } from "./committeeService/committeeService.module";
import { ContactInformationModule } from "./contactInformation/contactInformation.module";
import { CourseDepartmentModule } from "./courseDepartment/courseDepartment.module";
import { CourseModule } from "./course/course.module";
import { DegreeStatusModule } from "./degreeStatus/degreeStatus.module";
import { DepartmentMeetingModule } from "./departmentMeeting/departmentMeeting.module";
import { DepartmentSignatureModule } from "./departmentSignature/departmentSignature.module";
import { DepartmentSignatureImageModule } from "./departmentSignatureImage/departmentSignatureImage.module";
import { DocumentTemplatePartModule } from "./documentTemplatePart/documentTemplatePart.module";
import { DocumentTemplateModule } from "./documentTemplate/documentTemplate.module";
import { EmploymentModule } from "./employment/employment.module";
import { EvaluationLetterModule } from "./evaluationLetter/evaluationLetter.module";
import { EvaluatorModule } from "./evaluator/evaluator.module";
import { EventScheduleModule } from "./eventSchedule/eventSchedule.module";
import { ExpNeuroReqModule } from "./expNeuroReq/expNeuroReq.module";
import { FacultyCertModule } from "./facultyCert/facultyCert.module";
import { FacultyDatumModule } from "./facultyDatum/facultyDatum.module";
import { FellowshipTitleModule } from "./fellowshipTitle/fellowshipTitle.module";
import { FellowshipModule } from "./fellowship/fellowship.module";
import { FileAccessLogModule } from "./fileAccessLog/fileAccessLog.module";
import { FundingModule } from "./funding/funding.module";
import { GeneralDatumModule } from "./generalDatum/generalDatum.module";
import { GreGeneralConvModule } from "./greGeneralConv/greGeneralConv.module";
import { IccModule } from "./icc/icc.module";
import { InstituteModule } from "./institute/institute.module";
import { InstitutionModule } from "./institution/institution.module";
import { InstitutionsConsolModule } from "./institutionsConsol/institutionsConsol.module";
import { InternshipModule } from "./internship/internship.module";
import { InternshipsCdModule } from "./internshipsCd/internshipsCd.module";
import { InternshipsIniModule } from "./internshipsIni/internshipsIni.module";
import { InternshipsIsrmModule } from "./internshipsIsrm/internshipsIsrm.module";
import { InterviewModule } from "./interview/interview.module";
import { ItaModule } from "./ita/ita.module";
import { LeadershipModule } from "./leadership/leadership.module";
import { LegacyRequirementModule } from "./legacyRequirement/legacyRequirement.module";
import { MeetingAgendumModule } from "./meetingAgendum/meetingAgendum.module";
import { MeetingParameterModule } from "./meetingParameter/meetingParameter.module";
import { MeetingModule } from "./meeting/meeting.module";
import { NewCourseDepartmentModule } from "./newCourseDepartment/newCourseDepartment.module";
import { NewCourseModule } from "./newCourse/newCourse.module";
import { NoteModule } from "./note/note.module";
import { PracticumModule } from "./practicum/practicum.module";
import { PresentationModule } from "./presentation/presentation.module";
import { ProgramStatusModule } from "./programStatus/programStatus.module";
import { ProjectTopicModule } from "./projectTopic/projectTopic.module";
import { PsyProjectReqModule } from "./psyProjectReq/psyProjectReq.module";
import { QualsCommitteeModule } from "./qualsCommittee/qualsCommittee.module";
import { QualsResearchModule } from "./qualsResearch/qualsResearch.module";
import { QualsResearchForOtherStudentModule } from "./qualsResearchForOtherStudent/qualsResearchForOtherStudent.module";
import { QualsSpeakingModule } from "./qualsSpeaking/qualsSpeaking.module";
import { QualsSpeakingAspectModule } from "./qualsSpeakingAspect/qualsSpeakingAspect.module";
import { QualsWritingModule } from "./qualsWriting/qualsWriting.module";
import { QualsWritingAspectModule } from "./qualsWritingAspect/qualsWritingAspect.module";
import { RawDatumModule } from "./rawDatum/rawDatum.module";
import { RawDataLetterModule } from "./rawDataLetter/rawDataLetter.module";
import { ReportColumnModule } from "./reportColumn/reportColumn.module";
import { ReportDeptVisibilityModule } from "./reportDeptVisibility/reportDeptVisibility.module";
import { ReportModule } from "./report/report.module";
import { ResponsibleConductOfResearchModule } from "./responsibleConductOfResearch/responsibleConductOfResearch.module";
import { ReviewPeriodReferenceModule } from "./reviewPeriodReference/reviewPeriodReference.module";
import { RotationModule } from "./rotation/rotation.module";
import { ScheduledMeetingModule } from "./scheduledMeeting/scheduledMeeting.module";
import { SemesterDateOverrideModule } from "./semesterDateOverride/semesterDateOverride.module";
import { SemesterDateModule } from "./semesterDate/semesterDate.module";
import { SemesterReferenceModule } from "./semesterReference/semesterReference.module";
import { StatementModule } from "./statement/statement.module";
import { StudentAdvisorModule } from "./studentAdvisor/studentAdvisor.module";
import { StudentAppModule } from "./studentApp/studentApp.module";
import { StudentCommitteeMeetingModule } from "./studentCommitteeMeeting/studentCommitteeMeeting.module";
import { StudentCourseModule } from "./studentCourse/studentCourse.module";
import { StudentDatumModule } from "./studentDatum/studentDatum.module";
import { StudentDataHciiModule } from "./studentDataHcii/studentDataHcii.module";
import { StudentDataIniModule } from "./studentDataIni/studentDataIni.module";
import { StudentDataMlModule } from "./studentDataMl/studentDataMl.module";
import { StudentDataRiModule } from "./studentDataRi/studentDataRi.module";
import { StudentDocumentPartModule } from "./studentDocumentPart/studentDocumentPart.module";
import { StudentDocumentModule } from "./studentDocument/studentDocument.module";
import { StudentFileModule } from "./studentFile/studentFile.module";
import { StudentInstituteModule } from "./studentInstitute/studentInstitute.module";
import { StudentMentorModule } from "./studentMentor/studentMentor.module";
import { StudentOverrideModule } from "./studentOverride/studentOverride.module";
import { StudentPubModule } from "./studentPub/studentPub.module";
import { StudentResidencyModule } from "./studentResidency/studentResidency.module";
import { StudentSkillModule } from "./studentSkill/studentSkill.module";
import { TeachingReqModule } from "./teachingReq/teachingReq.module";
import { ThesisCommitteeModule } from "./thesisCommittee/thesisCommittee.module";
import { ThesisTopicModule } from "./thesisTopic/thesisTopic.module";
import { UserAccessModule } from "./userAccess/userAccess.module";
import { UserHostModule } from "./userHost/userHost.module";
import { UserRoleModule } from "./userRole/userRole.module";
import { UserRoleLookupModule } from "./userRoleLookup/userRoleLookup.module";
import { UserRoleProgramModule } from "./userRoleProgram/userRoleProgram.module";
import { UserModule } from "./user/user.module";
import { UsersOverrideModule } from "./usersOverride/usersOverride.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AdvisorModule,
    AdvisorsCopyModule,
    AgendaItemModule,
    AgendaModule,
    ApplywebApplicationModule,
    ApplywebStudentMigrationDatumModule,
    AreaModule,
    AwardModule,
    BlackfridayApplywebApplicationModule,
    CommitteeServiceModule,
    ContactInformationModule,
    CourseDepartmentModule,
    CourseModule,
    DegreeStatusModule,
    DepartmentMeetingModule,
    DepartmentSignatureModule,
    DepartmentSignatureImageModule,
    DocumentTemplatePartModule,
    DocumentTemplateModule,
    EmploymentModule,
    EvaluationLetterModule,
    EvaluatorModule,
    EventScheduleModule,
    ExpNeuroReqModule,
    FacultyCertModule,
    FacultyDatumModule,
    FellowshipTitleModule,
    FellowshipModule,
    FileAccessLogModule,
    FundingModule,
    GeneralDatumModule,
    GreGeneralConvModule,
    IccModule,
    InstituteModule,
    InstitutionModule,
    InstitutionsConsolModule,
    InternshipModule,
    InternshipsCdModule,
    InternshipsIniModule,
    InternshipsIsrmModule,
    InterviewModule,
    ItaModule,
    LeadershipModule,
    LegacyRequirementModule,
    MeetingAgendumModule,
    MeetingParameterModule,
    MeetingModule,
    NewCourseDepartmentModule,
    NewCourseModule,
    NoteModule,
    PracticumModule,
    PresentationModule,
    ProgramStatusModule,
    ProjectTopicModule,
    PsyProjectReqModule,
    QualsCommitteeModule,
    QualsResearchModule,
    QualsResearchForOtherStudentModule,
    QualsSpeakingModule,
    QualsSpeakingAspectModule,
    QualsWritingModule,
    QualsWritingAspectModule,
    RawDatumModule,
    RawDataLetterModule,
    ReportColumnModule,
    ReportDeptVisibilityModule,
    ReportModule,
    ResponsibleConductOfResearchModule,
    ReviewPeriodReferenceModule,
    RotationModule,
    ScheduledMeetingModule,
    SemesterDateOverrideModule,
    SemesterDateModule,
    SemesterReferenceModule,
    StatementModule,
    StudentAdvisorModule,
    StudentAppModule,
    StudentCommitteeMeetingModule,
    StudentCourseModule,
    StudentDatumModule,
    StudentDataHciiModule,
    StudentDataIniModule,
    StudentDataMlModule,
    StudentDataRiModule,
    StudentDocumentPartModule,
    StudentDocumentModule,
    StudentFileModule,
    StudentInstituteModule,
    StudentMentorModule,
    StudentOverrideModule,
    StudentPubModule,
    StudentResidencyModule,
    StudentSkillModule,
    TeachingReqModule,
    ThesisCommitteeModule,
    ThesisTopicModule,
    UserAccessModule,
    UserHostModule,
    UserRoleModule,
    UserRoleLookupModule,
    UserRoleProgramModule,
    UserModule,
    UsersOverrideModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
