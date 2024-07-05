import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { DeploymentDomainModule } from '../domain'
import { DeploymentController } from './deployment.controller'

import { SiemSolutionDomainModule } from '../../../modules/siemSolution/domain'

import { DeploymentBySiemSolutionController } from './deploymentBySiemSolution.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    DeploymentDomainModule,

    SiemSolutionDomainModule,
  ],
  controllers: [DeploymentController, DeploymentBySiemSolutionController],
  providers: [],
})
export class DeploymentApplicationModule {}
