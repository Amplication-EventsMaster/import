import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentPubServiceBase } from "./base/studentPub.service.base";

@Injectable()
export class StudentPubService extends StudentPubServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
