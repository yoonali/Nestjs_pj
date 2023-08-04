import { PartialType } from "@nestjs/mapped-types";
import { IsString, IsNumber } from "class-validator";
import { CreateMoviveDto } from "./create-movie.dto";

export class UpdateMoviveDto extends PartialType(CreateMoviveDto) {}