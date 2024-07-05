import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class AlertCreateDto {
  @IsString()
  @IsOptional()
  alertDetails?: string

  @IsString()
  @IsOptional()
  severity?: string

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

export class AlertUpdateDto {
  @IsString()
  @IsOptional()
  alertDetails?: string

  @IsString()
  @IsOptional()
  severity?: string

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
