import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { SiemSolutionDomainModule } from './siemSolution/domain'

import { DeploymentDomainModule } from './deployment/domain'

import { IncidentResponseDomainModule } from './incidentResponse/domain'

import { TrainingDomainModule } from './training/domain'

import { SupportDomainModule } from './support/domain'

import { AlertDomainModule } from './alert/domain'

import { SecurityEventDomainModule } from './securityEvent/domain'

import { ComplianceReportDomainModule } from './complianceReport/domain'

import { ResourceAllocationDomainModule } from './resourceAllocation/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

    SiemSolutionDomainModule,

    DeploymentDomainModule,

    IncidentResponseDomainModule,

    TrainingDomainModule,

    SupportDomainModule,

    AlertDomainModule,

    SecurityEventDomainModule,

    ComplianceReportDomainModule,

    ResourceAllocationDomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
