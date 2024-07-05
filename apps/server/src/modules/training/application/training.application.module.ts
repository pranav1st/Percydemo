import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { TrainingDomainModule } from '../domain'
import { TrainingController } from './training.controller'

import { SiemSolutionDomainModule } from '../../../modules/siemSolution/domain'

import { TrainingBySiemSolutionController } from './trainingBySiemSolution.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    TrainingDomainModule,

    SiemSolutionDomainModule,
  ],
  controllers: [TrainingController, TrainingBySiemSolutionController],
  providers: [],
})
export class TrainingApplicationModule {}
