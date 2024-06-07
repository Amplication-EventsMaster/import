import { Module } from "@nestjs/common";
import { ApplywebStudentMigrationDatumModuleBase } from "./base/applywebStudentMigrationDatum.module.base";
import { ApplywebStudentMigrationDatumService } from "./applywebStudentMigrationDatum.service";
import { ApplywebStudentMigrationDatumController } from "./applywebStudentMigrationDatum.controller";
import { ApplywebStudentMigrationDatumResolver } from "./applywebStudentMigrationDatum.resolver";

@Module({
  imports: [ApplywebStudentMigrationDatumModuleBase],
  controllers: [ApplywebStudentMigrationDatumController],
  providers: [
    ApplywebStudentMigrationDatumService,
    ApplywebStudentMigrationDatumResolver,
  ],
  exports: [ApplywebStudentMigrationDatumService],
})
export class ApplywebStudentMigrationDatumModule {}
