import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ComplianceReportDomainFacade } from './complianceReport.domain.facade'
import { ComplianceReport } from './complianceReport.model'

@Module({
  imports: [TypeOrmModule.forFeature([ComplianceReport]), DatabaseHelperModule],
  providers: [ComplianceReportDomainFacade, ComplianceReportDomainFacade],
  exports: [ComplianceReportDomainFacade],
})
export class ComplianceReportDomainModule {}
