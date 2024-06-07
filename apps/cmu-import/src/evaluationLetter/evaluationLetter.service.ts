import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EvaluationLetterServiceBase } from "./base/evaluationLetter.service.base";

@Injectable()
export class EvaluationLetterService extends EvaluationLetterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
