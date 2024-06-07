import { Module } from "@nestjs/common";
import { EmploymentModuleBase } from "./base/employment.module.base";
import { EmploymentService } from "./employment.service";
import { EmploymentController } from "./employment.controller";
import { EmploymentResolver } from "./employment.resolver";

@Module({
  imports: [EmploymentModuleBase],
  controllers: [EmploymentController],
  providers: [EmploymentService, EmploymentResolver],
  exports: [EmploymentService],
})
export class EmploymentModule {}
