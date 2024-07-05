import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ResourceAllocationDomainModule } from '../domain'
import { ResourceAllocationController } from './resourceAllocation.controller'

import { SiemSolutionDomainModule } from '../../../modules/siemSolution/domain'

import { ResourceAllocationBySiemSolutionController } from './resourceAllocationBySiemSolution.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ResourceAllocationDomainModule,

    SiemSolutionDomainModule,
  ],
  controllers: [
    ResourceAllocationController,

    ResourceAllocationBySiemSolutionController,
  ],
  providers: [],
})
export class ResourceAllocationApplicationModule {}
