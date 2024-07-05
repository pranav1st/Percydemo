import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class SupportCreateDto {
  @IsString()
  @IsOptional()
  supportDetails?: string

  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  siemSolutionId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class SupportUpdateDto {
  @IsString()
  @IsOptional()
  supportDetails?: string

  @IsString()
  @IsOptional()
  status?: string

  @IsString()
  @IsOptional()
  siemSolutionId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
