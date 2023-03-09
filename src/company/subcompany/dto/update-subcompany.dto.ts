import { PartialType } from '@nestjs/mapped-types';
import { CreateSubcompanyDto } from './create-subcompany.dto';

export class UpdateSubcompanyDto extends PartialType(CreateSubcompanyDto) {}
