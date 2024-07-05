import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ComplianceReportCreateDto {
  @IsString()
  @IsOptional()
  reportDetails?: string

  @IsString()
  @IsOptional()
  customizations?: string

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

export class ComplianceReportUpdateDto {
  @IsString()
  @IsOptional()
  reportDetails?: string

  @IsString()
  @IsOptional()
  customizations?: string

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
