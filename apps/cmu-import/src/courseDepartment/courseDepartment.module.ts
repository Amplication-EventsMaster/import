import { Module } from "@nestjs/common";
import { CourseDepartmentModuleBase } from "./base/courseDepartment.module.base";
import { CourseDepartmentService } from "./courseDepartment.service";
import { CourseDepartmentController } from "./courseDepartment.controller";
import { CourseDepartmentResolver } from "./courseDepartment.resolver";

@Module({
  imports: [CourseDepartmentModuleBase],
  controllers: [CourseDepartmentController],
  providers: [CourseDepartmentService, CourseDepartmentResolver],
  exports: [CourseDepartmentService],
})
export class CourseDepartmentModule {}
