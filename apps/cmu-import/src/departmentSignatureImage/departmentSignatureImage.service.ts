import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DepartmentSignatureImageServiceBase } from "./base/departmentSignatureImage.service.base";

@Injectable()
export class DepartmentSignatureImageService extends DepartmentSignatureImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
