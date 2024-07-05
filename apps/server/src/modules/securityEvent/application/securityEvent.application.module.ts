import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { SecurityEventDomainModule } from '../domain'
import { SecurityEventController } from './securityEvent.controller'

import { SiemSolutionDomainModule } from '../../../modules/siemSolution/domain'

import { SecurityEventBySiemSolutionController } from './securityEventBySiemSolution.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    SecurityEventDomainModule,

    SiemSolutionDomainModule,
  ],
  controllers: [SecurityEventController, SecurityEventBySiemSolutionController],
  providers: [],
})
export class SecurityEventApplicationModule {}
