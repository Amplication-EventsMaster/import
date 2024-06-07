import { Module } from "@nestjs/common";
import { RotationModuleBase } from "./base/rotation.module.base";
import { RotationService } from "./rotation.service";
import { RotationController } from "./rotation.controller";
import { RotationResolver } from "./rotation.resolver";

@Module({
  imports: [RotationModuleBase],
  controllers: [RotationController],
  providers: [RotationService, RotationResolver],
  exports: [RotationService],
})
export class RotationModule {}
