import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EvaluatorServiceBase } from "./base/evaluator.service.base";

@Injectable()
export class EvaluatorService extends EvaluatorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
