import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ResourceAllocationDomainFacade } from './resourceAllocation.domain.facade'
import { ResourceAllocation } from './resourceAllocation.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([ResourceAllocation]),
    DatabaseHelperModule,
  ],
  providers: [ResourceAllocationDomainFacade, ResourceAllocationDomainFacade],
  exports: [ResourceAllocationDomainFacade],
})
export class ResourceAllocationDomainModule {}
