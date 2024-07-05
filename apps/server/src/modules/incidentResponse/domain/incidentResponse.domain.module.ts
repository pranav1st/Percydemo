import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { IncidentResponseDomainFacade } from './incidentResponse.domain.facade'
import { IncidentResponse } from './incidentResponse.model'

@Module({
  imports: [TypeOrmModule.forFeature([IncidentResponse]), DatabaseHelperModule],
  providers: [IncidentResponseDomainFacade, IncidentResponseDomainFacade],
  exports: [IncidentResponseDomainFacade],
})
export class IncidentResponseDomainModule {}
