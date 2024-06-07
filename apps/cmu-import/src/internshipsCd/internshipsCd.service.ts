import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InternshipsCdServiceBase } from "./base/internshipsCd.service.base";

@Injectable()
export class InternshipsCdService extends InternshipsCdServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
