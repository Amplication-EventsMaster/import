import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ThesisCommitteeServiceBase } from "./base/thesisCommittee.service.base";

@Injectable()
export class ThesisCommitteeService extends ThesisCommitteeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
