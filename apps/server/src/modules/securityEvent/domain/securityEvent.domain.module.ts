import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { SecurityEventDomainFacade } from './securityEvent.domain.facade'
import { SecurityEvent } from './securityEvent.model'

@Module({
  imports: [TypeOrmModule.forFeature([SecurityEvent]), DatabaseHelperModule],
  providers: [SecurityEventDomainFacade, SecurityEventDomainFacade],
  exports: [SecurityEventDomainFacade],
})
export class SecurityEventDomainModule {}
