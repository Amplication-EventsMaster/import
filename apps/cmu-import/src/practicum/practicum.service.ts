import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PracticumServiceBase } from "./base/practicum.service.base";

@Injectable()
export class PracticumService extends PracticumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
