import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { SiemSolutionDomainModule } from '../domain'
import { SiemSolutionController } from './siemSolution.controller'

@Module({
  imports: [AuthenticationDomainModule, SiemSolutionDomainModule],
  controllers: [SiemSolutionController],
  providers: [],
})
export class SiemSolutionApplicationModule {}
