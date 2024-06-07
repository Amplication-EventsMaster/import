import { Module } from "@nestjs/common";
import { InternshipModuleBase } from "./base/internship.module.base";
import { InternshipService } from "./internship.service";
import { InternshipController } from "./internship.controller";
import { InternshipResolver } from "./internship.resolver";

@Module({
  imports: [InternshipModuleBase],
  controllers: [InternshipController],
  providers: [InternshipService, InternshipResolver],
  exports: [InternshipService],
})
export class InternshipModule {}
