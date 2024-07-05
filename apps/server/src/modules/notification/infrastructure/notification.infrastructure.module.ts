import { Module } from '@nestjs/common'
import { SocketModule } from '@server/libraries/socket'
import { AuthorizationDomainModule } from '@server/modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationSiemSolutionSubscriber } from './subscribers/notification.siemSolution.subscriber'

import { NotificationDeploymentSubscriber } from './subscribers/notification.deployment.subscriber'

import { NotificationIncidentResponseSubscriber } from './subscribers/notification.incidentResponse.subscriber'

import { NotificationTrainingSubscriber } from './subscribers/notification.training.subscriber'

import { NotificationSupportSubscriber } from './subscribers/notification.support.subscriber'

import { NotificationAlertSubscriber } from './subscribers/notification.alert.subscriber'

import { NotificationSecurityEventSubscriber } from './subscribers/notification.securityEvent.subscriber'

import { NotificationComplianceReportSubscriber } from './subscribers/notification.complianceReport.subscriber'

import { NotificationResourceAllocationSubscriber } from './subscribers/notification.resourceAllocation.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [
    NotificationSiemSolutionSubscriber,

    NotificationDeploymentSubscriber,

    NotificationIncidentResponseSubscriber,

    NotificationTrainingSubscriber,

    NotificationSupportSubscriber,

    NotificationAlertSubscriber,

    NotificationSecurityEventSubscriber,

    NotificationComplianceReportSubscriber,

    NotificationResourceAllocationSubscriber,
  ],
  exports: [],
})
export class NotificationInfrastructureModule {}
