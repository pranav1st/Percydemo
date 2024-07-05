import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { SiemSolutionDomainFacade } from './siemSolution.domain.facade'
import { SiemSolution } from './siemSolution.model'

@Module({
  imports: [TypeOrmModule.forFeature([SiemSolution]), DatabaseHelperModule],
  providers: [SiemSolutionDomainFacade, SiemSolutionDomainFacade],
  exports: [SiemSolutionDomainFacade],
})
export class SiemSolutionDomainModule {}
