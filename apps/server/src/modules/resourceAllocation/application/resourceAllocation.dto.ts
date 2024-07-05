import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ResourceAllocationCreateDto {
  @IsString()
  @IsOptional()
  resourceDetails?: string

  @IsString()
  @IsOptional()
  scalabilityReview?: string

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

export class ResourceAllocationUpdateDto {
  @IsString()
  @IsOptional()
  resourceDetails?: string

  @IsString()
  @IsOptional()
  scalabilityReview?: string

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
