import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RotationServiceBase } from "./base/rotation.service.base";

@Injectable()
export class RotationService extends RotationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
