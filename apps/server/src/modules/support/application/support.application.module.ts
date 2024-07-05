import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { SupportDomainModule } from '../domain'
import { SupportController } from './support.controller'

import { SiemSolutionDomainModule } from '../../../modules/siemSolution/domain'

import { SupportBySiemSolutionController } from './supportBySiemSolution.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    SupportDomainModule,

    SiemSolutionDomainModule,
  ],
  controllers: [SupportController, SupportBySiemSolutionController],
  providers: [],
})
export class SupportApplicationModule {}
