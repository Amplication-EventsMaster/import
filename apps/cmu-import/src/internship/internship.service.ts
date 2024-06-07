import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InternshipServiceBase } from "./base/internship.service.base";

@Injectable()
export class InternshipService extends InternshipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
