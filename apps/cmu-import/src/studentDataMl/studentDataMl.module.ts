import { Module } from "@nestjs/common";
import { StudentDataMlModuleBase } from "./base/studentDataMl.module.base";
import { StudentDataMlService } from "./studentDataMl.service";
import { StudentDataMlController } from "./studentDataMl.controller";
import { StudentDataMlResolver } from "./studentDataMl.resolver";

@Module({
  imports: [StudentDataMlModuleBase],
  controllers: [StudentDataMlController],
  providers: [StudentDataMlService, StudentDataMlResolver],
  exports: [StudentDataMlService],
})
export class StudentDataMlModule {}
