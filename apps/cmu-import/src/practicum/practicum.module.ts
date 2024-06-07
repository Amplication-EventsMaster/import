import { Module } from "@nestjs/common";
import { PracticumModuleBase } from "./base/practicum.module.base";
import { PracticumService } from "./practicum.service";
import { PracticumController } from "./practicum.controller";
import { PracticumResolver } from "./practicum.resolver";

@Module({
  imports: [PracticumModuleBase],
  controllers: [PracticumController],
  providers: [PracticumService, PracticumResolver],
  exports: [PracticumService],
})
export class PracticumModule {}
