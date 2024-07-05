import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { IncidentResponseDomainModule } from '../domain'
import { IncidentResponseController } from './incidentResponse.controller'

import { SiemSolutionDomainModule } from '../../../modules/siemSolution/domain'

import { IncidentResponseBySiemSolutionController } from './incidentResponseBySiemSolution.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    IncidentResponseDomainModule,

    SiemSolutionDomainModule,
  ],
  controllers: [
    IncidentResponseController,

    IncidentResponseBySiemSolutionController,
  ],
  providers: [],
})
export class IncidentResponseApplicationModule {}
