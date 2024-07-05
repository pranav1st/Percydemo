import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class DeploymentCreateDto {
  @IsString()
  @IsOptional()
  configurationDetails?: string

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

export class DeploymentUpdateDto {
  @IsString()
  @IsOptional()
  configurationDetails?: string

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
