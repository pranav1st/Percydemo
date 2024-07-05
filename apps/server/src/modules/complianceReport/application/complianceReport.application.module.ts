import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from '@server/modules/authentication/domain'
import { ComplianceReportDomainModule } from '../domain'
import { ComplianceReportController } from './complianceReport.controller'

import { SiemSolutionDomainModule } from '../../../modules/siemSolution/domain'

import { ComplianceReportBySiemSolutionController } from './complianceReportBySiemSolution.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ComplianceReportDomainModule,

    SiemSolutionDomainModule,
  ],
  controllers: [
    ComplianceReportController,

    ComplianceReportBySiemSolutionController,
  ],
  providers: [],
})
export class ComplianceReportApplicationModule {}
