import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { SupportDomainFacade } from './support.domain.facade'
import { Support } from './support.model'

@Module({
  imports: [TypeOrmModule.forFeature([Support]), DatabaseHelperModule],
  providers: [SupportDomainFacade, SupportDomainFacade],
  exports: [SupportDomainFacade],
})
export class SupportDomainModule {}
