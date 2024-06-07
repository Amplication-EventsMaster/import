import { Module } from "@nestjs/common";
import { NewCourseDepartmentModuleBase } from "./base/newCourseDepartment.module.base";
import { NewCourseDepartmentService } from "./newCourseDepartment.service";
import { NewCourseDepartmentController } from "./newCourseDepartment.controller";
import { NewCourseDepartmentResolver } from "./newCourseDepartment.resolver";

@Module({
  imports: [NewCourseDepartmentModuleBase],
  controllers: [NewCourseDepartmentController],
  providers: [NewCourseDepartmentService, NewCourseDepartmentResolver],
  exports: [NewCourseDepartmentService],
})
export class NewCourseDepartmentModule {}
