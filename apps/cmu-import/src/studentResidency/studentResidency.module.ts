import { Module } from "@nestjs/common";
import { StudentResidencyModuleBase } from "./base/studentResidency.module.base";
import { StudentResidencyService } from "./studentResidency.service";
import { StudentResidencyController } from "./studentResidency.controller";
import { StudentResidencyResolver } from "./studentResidency.resolver";

@Module({
  imports: [StudentResidencyModuleBase],
  controllers: [StudentResidencyController],
  providers: [StudentResidencyService, StudentResidencyResolver],
  exports: [StudentResidencyService],
})
export class StudentResidencyModule {}
