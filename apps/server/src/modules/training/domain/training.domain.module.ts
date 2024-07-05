import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { TrainingDomainFacade } from './training.domain.facade'
import { Training } from './training.model'

@Module({
  imports: [TypeOrmModule.forFeature([Training]), DatabaseHelperModule],
  providers: [TrainingDomainFacade, TrainingDomainFacade],
  exports: [TrainingDomainFacade],
})
export class TrainingDomainModule {}
