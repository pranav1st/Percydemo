import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { SiemSolutionApplicationModule } from './siemSolution/application'

import { DeploymentApplicationModule } from './deployment/application'

import { IncidentResponseApplicationModule } from './incidentResponse/application'

import { TrainingApplicationModule } from './training/application'

import { SupportApplicationModule } from './support/application'

import { AlertApplicationModule } from './alert/application'

import { SecurityEventApplicationModule } from './securityEvent/application'

import { ComplianceReportApplicationModule } from './complianceReport/application'

import { ResourceAllocationApplicationModule } from './resourceAllocation/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { BillingApplicationModule } from './billing/application'
import { NotificationApplicationModule } from './notification/application/notification.application.module'
import { UploadApplicationModule } from './upload/application/upload.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,
    UploadApplicationModule,
    BillingApplicationModule,

    SiemSolutionApplicationModule,

    DeploymentApplicationModule,

    IncidentResponseApplicationModule,

    TrainingApplicationModule,

    SupportApplicationModule,

    AlertApplicationModule,

    SecurityEventApplicationModule,

    ComplianceReportApplicationModule,

    ResourceAllocationApplicationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
