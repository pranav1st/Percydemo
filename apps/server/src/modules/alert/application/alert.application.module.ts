import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { AlertDomainModule } from '../domain'
import { AlertController } from './alert.controller'

import { SiemSolutionDomainModule } from '../../../modules/siemSolution/domain'

import { AlertBySiemSolutionController } from './alertBySiemSolution.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    AlertDomainModule,

    SiemSolutionDomainModule,
  ],
  controllers: [AlertController, AlertBySiemSolutionController],
  providers: [],
})
export class AlertApplicationModule {}
