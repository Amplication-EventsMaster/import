import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RawDataLetterService } from "./rawDataLetter.service";
import { RawDataLetterControllerBase } from "./base/rawDataLetter.controller.base";

@swagger.ApiTags("rawDataLetters")
@common.Controller("rawDataLetters")
export class RawDataLetterController extends RawDataLetterControllerBase {
  constructor(protected readonly service: RawDataLetterService) {
    super(service);
  }
}
