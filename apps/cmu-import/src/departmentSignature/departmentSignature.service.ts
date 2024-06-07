import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DepartmentSignatureServiceBase } from "./base/departmentSignature.service.base";

@Injectable()
export class DepartmentSignatureService extends DepartmentSignatureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
